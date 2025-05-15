import { formatTime } from "@/lib/stopwatchUtils";

interface StopwatchDisplayProps {
  time: number;
  isRunning: boolean;
}

export function StopwatchDisplay({ time, isRunning }: StopwatchDisplayProps) {
  return (
    <div className={`py-10 px-4 flex items-center justify-center ${isRunning ? 'animate-pulse-subtle' : ''}`}>
      <div className="font-mono text-6xl md:text-7xl font-bold tracking-wider select-none text-gradient">
        {formatTime(time)}
      </div>
    </div>
  );
}