import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ControlButtonsProps {
  isRunning: boolean;
  isPaused: boolean;
  hasTime: boolean;
  onStartStop: () => void;
  onPause: () => void;
  onReset: () => void;
  onLap: () => void;
}

export function ControlButtons({
  isRunning,
  isPaused,
  hasTime,
  onStartStop,
  onPause,
  onReset,
  onLap,
}: ControlButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 pb-6">
      <Button
        onClick={onStartStop}
        className={cn(
          "py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          isRunning
            ? "bg-red-500 hover:bg-red-600"
            : "bg-gradient text-white hover:shadow-lg"
        )}
      >
        {isRunning ? "Stop" : "Start"}
      </Button>

      <Button
        onClick={onPause}
        disabled={!isRunning}
        className={cn(
          "py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          isPaused
            ? "bg-gradient text-white hover:shadow-lg"
            : "bg-yellow-500 hover:bg-yellow-600",
          !isRunning && "opacity-50 cursor-not-allowed"
        )}
      >
        {isPaused ? "Resume" : "Pause"}
      </Button>

      <Button
        onClick={onReset}
        disabled={!hasTime}
        className={cn(
          "bg-red-500 hover:bg-red-600 py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          !hasTime && "opacity-50 cursor-not-allowed"
        )}
      >
        Reset
      </Button>

      <Button
        onClick={onLap}
        disabled={!isRunning || isPaused}
        className={cn(
          "bg-violet-500 hover:bg-violet-600 py-4 text-base font-semibold rounded-xl shadow-md transition-all duration-200 transform hover:scale-105",
          (!isRunning || isPaused) && "opacity-50 cursor-not-allowed"
        )}
      >
        Lap
      </Button>
    </div>
  );
}
