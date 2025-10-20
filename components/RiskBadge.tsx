import { RiskLevel } from '@/types/threat';

interface RiskBadgeProps {
  score: number;
  showScore?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function RiskBadge({ score, showScore = true, size = 'md' }: RiskBadgeProps) {
  const getRiskConfig = (score: number) => {
    if (score >= 76) {
      return {
        level: 'critical' as RiskLevel,
        color: 'text-white',
        bgColor: 'bg-[var(--color-threat-critical)]',
        label: 'Critical'
      };
    } else if (score >= 51) {
      return {
        level: 'high' as RiskLevel,
        color: 'text-white',
        bgColor: 'bg-[var(--color-threat-high)]',
        label: 'High'
      };
    } else if (score >= 26) {
      return {
        level: 'medium' as RiskLevel,
        color: 'text-white',
        bgColor: 'bg-[var(--color-threat-medium)]',
        label: 'Medium'
      };
    } else {
      return {
        level: 'low' as RiskLevel,
        color: 'text-white',
        bgColor: 'bg-[var(--color-threat-low)]',
        label: 'Low'
      };
    }
  };

  const config = getRiskConfig(score);

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full  min-w-[100px] justify-center
        ${config.bgColor} ${config.color} ${sizeClasses[size]}
      `}
      title={`Risk Score: ${score}/100 - ${config.label}`}
    >
      {showScore && (
        <span className="mr-1">
          {score}
        </span>
      )}
      <span>{config.label}</span>
    </span>
  );
}

export function RiskScoreBar({ score }: { score: number }) {
  const percentage = Math.min(score, 100);
  const config = score >= 76 ? 'bg-[var(--color-threat-critical)]' :
    score >= 51 ? 'bg-[var(--color-threat-high)]' :
    score >= 26 ? 'bg-[var(--color-threat-medium)]' : 'bg-[var(--color-threat-low)]';

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`${config} h-2 rounded-full transition-all duration-300`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
