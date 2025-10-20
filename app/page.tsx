'use client';

import { useState } from 'react';
import { ThreatFeedResponse } from '@/types/threat';
import { SummaryStats } from '@/components/SummaryStats';
import { ThreatTable } from '@/components/ThreatTable';
import { ThreatCard } from '@/components/ThreatCard';
import { ThreatFilter } from '@/components/ThreatFilter';
import { MalwareIcon } from '@/assets/icons/malware';
import { SpamIcon } from '@/assets/icons/spam';
import mockData from '@/data/mockData.json';
import { ScanIcon } from '@/assets/icons/scan';

export default function Home() {
  // In a real app, this would come from an API call
  const data: ThreatFeedResponse = mockData as ThreatFeedResponse;
  const [filterType, setFilterType] = useState<string>('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Threat Feed Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and analyze email security threats in real-time
          </p>
        </header>

        {/* Summary Statistics */}
        <SummaryStats
          emailsScanned={data.summary.emails_scanned}
          threatsDetected={data.summary.threats_detected}
          quarantinedItems={data.summary.quarantined_items}
          emailIcon={ScanIcon}
          threatIcon={MalwareIcon}
          shieldIcon={SpamIcon}
        />

        {/* Threat Filter */}
        <ThreatFilter 
          selectedType={filterType}
          onFilterChange={setFilterType}
        />

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <ThreatTable threats={data.threats} filterType={filterType} />
        </div>

        {/* Mobile Card View */}
        <ThreatCard threats={data.threats} filterType={filterType} />
      </div>
    </div>
  );
}
