import { PhishingIcon } from '@/assets/icons/phishing';
import { MalwareIcon } from '@/assets/icons/malware';
import { SpamIcon } from '@/assets/icons/spam';
import { IconProps } from '@/types/shared';
import { ThreatTypeConfig } from '@/types/threat';

export function ThreatTypeIcon({ type }: { type: string }) {
  const getThreatConfig = (type: string): ThreatTypeConfig => {
    switch (type) {
      case 'Phishing':
        return {
          icon: (props: IconProps) => <PhishingIcon {...props} />,
          color: 'text-[var(--color-threat-phishing)]',
          bgColor: 'bg-pink-50'
        };
      case 'Malware':
        return {
          icon: (props: IconProps) => <MalwareIcon {...props} />,
          color: 'text-[var(--color-threat-malware)]',
          bgColor: 'bg-purple-50'
        };
      case 'Spam':
        return {
          icon: (props: IconProps) => <SpamIcon {...props} />,
          color: 'text-[var(--color-threat-spam)]',
          bgColor: 'bg-gray-200'
        };
      default:
        return {
          icon: (props: IconProps) => <PhishingIcon {...props} />,
          color: 'text-gray-600',
          bgColor: 'bg-green-50'
        };
    }
  };

  const config = getThreatConfig(type);

  return (
    <span 
      className={`inline-flex items-center min-w-[100px] justify-center px-2 py-1 rounded-full text-sm font-medium ${config.bgColor}`}
      title={`Threat Type: ${type}`}
    >
      <span className="mr-1 flex items-center">
        {config.icon({ 
          color: type === 'Phishing' ? 'var(--color-threat-phishing)' : 
                 type === 'Malware' ? 'var(--color-threat-malware)' : 
                 'var(--color-threat-spam)',
          width: 16,
          height: 16
        })}
      </span>
      <span className={`hidden sm:inline ${config.color}`}>{type}</span>
    </span>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Quarantined':
        return {
          color: 'text-[var(--color-status-quarantined)]',
          bgColor: 'bg-blue-100',
          icon: '🔒'
        };
      case 'Active':
        return {
          color: 'text-[var(--color-status-active)]',
          bgColor: 'bg-red-100',
          icon: '⚠️'
        };
      case 'Resolved':
        return {
          color: 'text-[var(--color-status-resolved)]',
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
