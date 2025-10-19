import { ThreatFeedResponse } from '@/types/threat';
import { SummaryStats } from '@/components/SummaryStats';
import { ThreatTable } from '@/components/ThreatTable';
import { ThreatCard } from '@/components/ThreatCard';
import mockData from '@/data/mockData.json';

export default function Home() {
  // In a real app, this would come from an API call
  const data: ThreatFeedResponse = mockData;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Threat Feed Dashboard
          </h1>
          <p className="text-gray-600">
            Monitor and analyze email security threats in real-time
          </p>
        </div>

        {/* Summary Statistics */}
        <SummaryStats
          emailsScanned={data.summary.emails_scanned}
          threatsDetected={data.summary.threats_detected}
          quarantinedItems={data.summary.quarantined_items}
        />

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <ThreatTable threats={data.threats} />
        </div>

        {/* Mobile Card View */}
        <ThreatCard threats={data.threats} />
      </div>
    </div>
  );
}
