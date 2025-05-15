// Format time as HH:MM:SS.T
export function formatTime(timeInTenthSeconds: number): string {
  const hours = Math.floor(timeInTenthSeconds / 36000);
  const minutes = Math.floor((timeInTenthSeconds % 36000) / 600);
  const seconds = Math.floor((timeInTenthSeconds % 600) / 10);
  const tenths = timeInTenthSeconds % 10;
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${tenths}`;
}

// Format time difference for lap display
export function formatDiff(diff: number): string {
  const sign = diff >= 0 ? '+' : '-';
  return `${sign}${formatTime(Math.abs(diff))}`;
}
