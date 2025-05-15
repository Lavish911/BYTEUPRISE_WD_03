import { formatTimeHMS } from "@/lib/timeUtils";

interface TimerDisplayProps {
  time: number;
  isRunning: boolean;
  isFinished: boolean;
}

export function TimerDisplay({ time, isRunning, isFinished }: TimerDisplayProps) {
  return (
    <div className={`py-10 px-4 flex items-center justify-center ${isRunning ? 'animate-pulse-subtle' : ''}`}>
      <div className={`font-mono text-6xl md:text-7xl font-bold tracking-wider select-none 
        ${isFinished ? 'text-red-500' : isRunning ? 'text-gradient' : 'text-gray-700'}`}>
        {formatTimeHMS(time)}
      </div>
    </div>
  );
}