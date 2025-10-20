export function formatThreatAge(timestamp: string): string {
  const now = new Date();
  const threatTime = new Date(timestamp);
  const diffInHours = Math.floor((now.getTime() - threatTime.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "Just now";
  if (diffInHours < 24) return `${diffInHours}h ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d ago`;
  
  return threatTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
