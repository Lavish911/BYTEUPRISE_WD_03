import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TimerControlsProps {
  isRunning: boolean;
  isPaused: boolean;
  isFinished: boolean;
  hasTime: boolean;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
  onReset: () => void;
}

export function TimerControls({
  isRunning,
  isPaused,
  isFinished,
  hasTime,
  onStart,
  onPause,
  onStop,
  onReset,
}: TimerControlsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 pb-6">
      <Button
        onClick={onStart}
        disabled={isRunning && !isPaused || isFinished || !hasTime}
        className={cn(
          "py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          "bg-gradient text-white hover:shadow-lg",
          (isRunning && !isPaused || isFinished || !hasTime) && "opacity-50 cursor-not-allowed"
        )}
      >
        Start
      </Button>

      <Button
        onClick={onPause}
        disabled={!isRunning || isFinished}
        className={cn(
          "py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          isPaused
            ? "bg-gradient text-white hover:shadow-lg"
            : "bg-yellow-500 hover:bg-yellow-600",
          (!isRunning || isFinished) && "opacity-50 cursor-not-allowed"
        )}
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>

      <Button
        onClick={onStop}
        disabled={!isRunning && !isPaused}
        className={cn(
          "bg-red-500 hover:bg-red-600 py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          (!isRunning && !isPaused) && "opacity-50 cursor-not-allowed"
        )}
      >
        Stop
      </Button>

      <Button
        onClick={onReset}
        disabled={!hasTime && !isFinished}
        className={cn(
          "bg-violet-500 hover:bg-violet-600 py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          (!hasTime && !isFinished) && "opacity-50 cursor-not-allowed"
        )}
      >
        Reset
      </Button>
    </div>
  );
}