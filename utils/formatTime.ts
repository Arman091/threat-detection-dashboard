export function formatThreatAge(timestamp: string): string {
  const now = new Date();
  const threatTime = new Date(timestamp);
  const diffInMs = now.getTime() - threatTime.getTime();
  
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);
  
  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else if (diffInDays < 7) {
    return `${diffInDays}d ago`;
  } else {
    // For older threats, show the actual date
    return threatTime.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: threatTime.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  }
}

export function getAgeColor(timestamp: string): string {
  const now = new Date();
  const threatTime = new Date(timestamp);
  const diffInMs = now.getTime() - threatTime.getTime();
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'bg-[var(--color-threat-critical)]'; // Recent - urgent attention
  } else if (diffInHours < 24) {
    return 'bg-[var(--color-threat-medium)]'; // Today - medium priority
  } else {
    return 'bg-gray-500'; // Older - lower priority
  }
}

export function formatFullTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}
