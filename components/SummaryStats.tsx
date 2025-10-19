import { IconProps } from '@/types/shared';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  color: string;
  bgColor: string;
}

function SummaryCard({ icon, title, value, color, bgColor }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <div className="flex items-center">
        <div className={`${bgColor} rounded-lg p-3 mr-4 shadow-sm flex items-center justify-center`}>
          <span className={`${color}`}>{icon}</span>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">
            {value.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

interface SummaryStatsProps {
  emailsScanned: number;
  threatsDetected: number;
  quarantinedItems: number;
  emailIcon: React.ComponentType<IconProps>;
  threatIcon: React.ComponentType<IconProps>;
  shieldIcon: React.ComponentType<IconProps>;
}

export function SummaryStats({ 
  emailsScanned, 
  threatsDetected, 
  quarantinedItems,
  emailIcon: EmailIcon,
  threatIcon: ThreatIcon,
  shieldIcon: ShieldIcon
}: SummaryStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <SummaryCard
        icon={<EmailIcon color="#3B82F6" width={24} height={24} />}
        title="Emails Scanned"
        value={emailsScanned}
        color="text-blue-600"
        bgColor="bg-blue-50"
      />
      <SummaryCard
        icon={<ThreatIcon color="#DC2626" width={24} height={24} />}
        title="Threats Detected"
        value={threatsDetected}
        color="text-red-600"
        bgColor="bg-red-50"
      />
      <SummaryCard
        icon={<ShieldIcon color="#16A34A" width={24} height={24} />}
        title="Quarantined Items"
        value={quarantinedItems}
        color="text-green-600"
        bgColor="bg-green-50"
      />
    </div>
  );
}
