import { IconProps } from '@/types/shared';

export function ScanIcon({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 3H3V6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12H12L22 12" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 19V17V15" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16V15.5V15" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 17V16V15" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21V19.5V18" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 3H21V6" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 21H3V18" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 21H21V18" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

ScanIcon.displayName = 'ScanIcon';
