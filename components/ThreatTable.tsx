'use client';

import { useState } from 'react';
import { Threat } from '@/types/threat';
import { formatThreatAge, getAgeColor, formatFullTimestamp } from '@/utils/formatTime';
import { RiskBadge, RiskScoreBar } from './RiskBadge';
import { ThreatTypeIcon, StatusBadge } from './ThreatTypeIcon';

interface ThreatTableProps {
  threats: Threat[];
  filterType?: string;
}

interface ThreatRowProps {
  threat: Threat;
  isExpanded: boolean;
  onToggle: () => void;
}

function ThreatRow({ threat, isExpanded, onToggle }: ThreatRowProps) {
  const truncatedSubject = threat.details.subject.length > 50
    ? `${threat.details.subject.substring(0, 50)}...`
    : threat.details.subject;

  const truncatedSender = threat.details.sender.length > 25
    ? `${threat.details.sender.substring(0, 25)}...`
    : threat.details.sender;

  const isSuspiciousSender = threat.details.sender.includes('microsft') ||
    threat.details.sender.includes('typo') ||
    threat.details.sender.includes('fake');

  return (
    <>
      <tr
        onClick={onToggle}
        className="cursor-pointer hover:bg-blue-50 border-b border-gray-200 transition-all duration-200 group"
      >
        <td className="px-4 py-4">
          <RiskBadge score={threat.risk_score} size="sm" />
        </td>
        <td className="px-4 py-4">
          <ThreatTypeIcon type={threat.type} />
        </td>
        <td className="px-4 py-4">
          <div className="max-w-xs">
            <p className="font-medium text-gray-900 truncate" title={threat.details.subject}>
              {truncatedSubject}
            </p>
          </div>
        </td>
        <td className="px-4 py-4">
          <div className="max-w-xs">
            <p
              className={`truncate ${isSuspiciousSender ? 'text-red-600 font-medium' : 'text-gray-600'}`}
              title={threat.details.sender}
            >
              {truncatedSender}
              {isSuspiciousSender && <span className="ml-1">⚠️</span>}
            </p>
          </div>
        </td>
        <td className="px-4 py-4">
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium text-white ${getAgeColor(threat.timestamp)}`}>
              {formatThreatAge(threat.timestamp)}
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs text-blue-600 font-medium">
              Click to view details
            </span>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-gray-50">
          <td colSpan={5} className="px-4 py-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Full Details</h4>
                  <div className="space-y-2">
                    <p><span className="font-medium">Subject:</span><span className="text-[14px] text-gray-600 pl-2">{threat.details.subject}</span></p>
                    <p>
                      <span className="font-medium text-black">Sender:</span>
                      <span className={isSuspiciousSender ? 'text-red-600 font-medium ml-1' : 'text-[14px] text-gray-600 ml-1'}>
                        {threat.details.sender}
                        {isSuspiciousSender && <span className="ml-1">⚠️ (Suspicious domain)</span>}
                      </span>
                    </p>
                    <p><span className="font-medium">Timestamp:</span><span className="text-[14px] text-gray-600 pl-2">{formatFullTimestamp(threat.timestamp)}</span></p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Risk Analysis</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">Risk Score</span>
                        <span className="text-sm font-bold">{threat.risk_score}/100</span>
                      </div>
                      <RiskScoreBar score={threat.risk_score} />
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={threat.status} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export function ThreatTable({ threats, filterType = 'all' }: ThreatTableProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Filter and sort threats
  const filteredThreats = filterType === 'all'
    ? threats
    : threats.filter(threat => threat.type === filterType);

  const sortedThreats = [...filteredThreats].sort((a, b) => b.risk_score - a.risk_score);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Threat List</h2>
        <p className="text-sm text-gray-600 mt-1">
          Click any row to view detailed information. Threats are sorted by risk score.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sender
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedThreats.map((threat) => (
              <ThreatRow
                key={threat.id}
                threat={threat}
                isExpanded={expandedId === threat.id}
                onToggle={() => toggleExpand(threat.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {sortedThreats.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No threats detected</p>
        </div>
      )}
    </div>
  );
}
