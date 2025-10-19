import { IconProps } from '@/types/shared';

export function SpamIcon({
  color = '#000000',
  width = 24,
  height = 24,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="spamIconTitle"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    >
      <title id="spamIconTitle">Spam</title>
      <polygon points="16 3 21 8 21 16 16 21 8 21 3 16 3 8 8 3" />
      <path d="M12 8 L12 13" />
      <line x1="12" y1="16" x2="12" y2="16" />
    </svg>
  );
}

SpamIcon.displayName = 'SpamIcon';
