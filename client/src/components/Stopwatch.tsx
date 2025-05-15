import { StopwatchDisplay } from "./StopwatchDisplay";
import { ControlButtons } from "./ControlButtons";
import { LapTimesList } from "./LapTimesList";
import { useStopwatch } from "@/hooks/useStopwatch";
import { useSound } from "@/hooks/useSound";

export function Stopwatch() {
  const {
    time,
    isRunning,
    isPaused,
    laps,
    startStop,
    pause,
    reset,
    lap,
  } = useStopwatch();
  
  // Sound effects
  const buttonClickSound = useSound("/sounds/button_click.mp3", { volume: 0.4 });
  
  // Add sound to actions
  const handleStartStop = () => {
    buttonClickSound.play();
    startStop();
  };
  
  const handlePause = () => {
    buttonClickSound.play();
    pause();
  };
  
  const handleReset = () => {
    buttonClickSound.play();
    reset();
  };
  
  const handleLap = () => {
    buttonClickSound.play();
    lap();
  };

  return (
    <div className="container max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border border-purple-100">
      {/* Header */}
      <div className="bg-gradient p-6 text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">Stopwatch</h1>
      </div>
      
      {/* Stopwatch Display */}
      <StopwatchDisplay time={time} isRunning={isRunning} />
      
      {/* Controls */}
      <ControlButtons 
        isRunning={isRunning} 
        isPaused={isPaused} 
        hasTime={time > 0}
        onStartStop={handleStartStop} 
        onPause={handlePause} 
        onReset={handleReset} 
        onLap={handleLap} 
      />
      
      {/* Lap Times */}
      <LapTimesList laps={laps} />
      
      {/* Footer - Trademark */}
      <div className="py-3 px-5 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-sm font-medium text-gradient">Developed by Lavish</p>
      </div>
    </div>
  );
}
