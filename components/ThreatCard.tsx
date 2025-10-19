'use client';

import { useState } from 'react';
import { Threat } from '@/types/threat';
import { formatThreatAge, getAgeColor, formatFullTimestamp } from '@/utils/formatTime';
import { RiskBadge, RiskScoreBar } from './RiskBadge';
import { ThreatTypeIcon, StatusBadge } from './ThreatTypeIcon';

interface ThreatCardProps {
  threats: Threat[];
}

interface SingleThreatCardProps {
  threat: Threat;
  isExpanded: boolean;
  onToggle: () => void;
}

function SingleThreatCard({ threat, isExpanded, onToggle }: SingleThreatCardProps) {
  const isSuspiciousSender = threat.details.sender.includes('microsft') || 
                            threat.details.sender.includes('typo') ||
                            threat.details.sender.includes('fake');

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Header: Risk + Type */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex gap-2 flex-wrap">
          <RiskBadge score={threat.risk_score} size="sm" />
          <ThreatTypeIcon type={threat.type} />
        </div>
        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getAgeColor(threat.timestamp)}`}>
          {formatThreatAge(threat.timestamp)}
        </span>
      </div>
      
      {/* Subject */}
      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
        {threat.details.subject}
      </h3>
      
      {/* Sender */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1 min-w-0">
          <p className={`text-sm truncate ${isSuspiciousSender ? 'text-red-600 font-medium' : 'text-gray-600'}`}>
            From: {threat.details.sender}
            {isSuspiciousSender && <span className="ml-1">⚠️</span>}
          </p>
        </div>
        <StatusBadge status={threat.status} />
      </div>

      {/* Expand/Collapse Button */}
      <button
        onClick={onToggle}
        className="w-full text-left text-sm text-blue-600 hover:text-blue-800 font-medium py-2 border-t border-gray-100"
      >
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Full Details</h4>
              <div className="space-y-2 text-sm">
                <p><span className="font-medium">Subject:</span> {threat.details.subject}</p>
                <p>
                  <span className="font-medium">Sender:</span> 
                  <span className={isSuspiciousSender ? 'text-red-600 font-medium ml-1' : 'ml-1'}>
                    {threat.details.sender}
                    {isSuspiciousSender && <span className="ml-1">⚠️ (Suspicious domain)</span>}
                  </span>
                </p>
                <p><span className="font-medium">Timestamp:</span> {formatFullTimestamp(threat.timestamp)}</p>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ThreatCard({ threats }: ThreatCardProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Sort threats by risk score (highest first)
  const sortedThreats = [...threats].sort((a, b) => b.risk_score - a.risk_score);

  return (
    <div className="md:hidden">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Threat List</h2>
        <p className="text-sm text-gray-600">
          Tap any card to view detailed information. Threats are sorted by risk score.
        </p>
      </div>
      
      <div className="space-y-4">
        {sortedThreats.map((threat) => (
          <SingleThreatCard
            key={threat.id}
            threat={threat}
            isExpanded={expandedId === threat.id}
            onToggle={() => toggleExpand(threat.id)}
          />
        ))}
      </div>
      
      {sortedThreats.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No threats detected</p>
        </div>
      )}
    </div>
  );
}
