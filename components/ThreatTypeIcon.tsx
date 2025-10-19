import { ThreatTypeConfig } from '@/types/threat';

export function ThreatTypeIcon({ type }: { type: string }) {
  const getThreatConfig = (type: string): ThreatTypeConfig => {
    switch (type) {
      case 'Phishing':
        return {
          icon: '🎣',
          color: 'text-pink-600',
          bgColor: 'bg-pink-50'
        };
      case 'Malware':
        return {
          icon: '🦠',
          color: 'text-purple-600',
          bgColor: 'bg-purple-50'
        };
      case 'Spam':
        return {
          icon: '📧',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50'
        };
      default:
        return {
          icon: '❓',
          color: 'text-gray-600',
          bgColor: 'bg-gray-50'
        };
    }
  };

  const config = getThreatConfig(type);

  return (
    <span 
      className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.color}`}
      title={`Threat Type: ${type}`}
    >
      <span className="mr-1">{config.icon}</span>
      <span className="hidden sm:inline">{type}</span>
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Quarantined':
        return {
          color: 'text-blue-700',
          bgColor: 'bg-blue-100',
          icon: '🔒'
        };
      case 'Active':
        return {
          color: 'text-red-700',
          bgColor: 'bg-red-100',
          icon: '⚠️'
        };
      case 'Resolved':
        return {
          color: 'text-green-700',
          bgColor: 'bg-green-100',
          icon: '✅'
        };
      default:
        return {
          color: 'text-gray-700',
          bgColor: 'bg-gray-100',
          icon: '❓'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span 
      className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${config.bgColor} ${config.color}`}
      title={`Status: ${status}`}
    >
      <span className="mr-1">{config.icon}</span>
      {status}
    </span>
  );
}
