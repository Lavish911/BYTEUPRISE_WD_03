import { TimerDisplay } from "./TimerDisplay";
import { TimerControls } from "./TimerControls";
import { TimerSettings } from "./TimerSettings";
import { useTimer } from "@/hooks/useTimer";

export function TimerComponent() {
  const {
    time,
    isRunning,
    isPaused,
    isFinished,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    setTimerDuration
  } = useTimer();

  return (
    <div className="container max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 border border-purple-100">
      {/* Header */}
      <div className="bg-gradient p-6 text-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">Timer</h1>
      </div>
      
      {/* Timer Display */}
      <TimerDisplay 
        time={time} 
        isRunning={isRunning} 
        isFinished={isFinished} 
      />
      
      {/* Controls */}
      <TimerControls 
        isRunning={isRunning} 
        isPaused={isPaused} 
        isFinished={isFinished}
        hasTime={time > 0}
        onStart={startTimer} 
        onPause={pauseTimer} 
        onStop={stopTimer} 
        onReset={resetTimer} 
      />
      
      {/* Timer Settings */}
      <TimerSettings 
        onSetTimer={setTimerDuration}
        disabled={isRunning || isPaused}
      />
      
      {/* Footer - Trademark */}
      <div className="py-3 px-5 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-sm font-medium text-gradient">Developed by Lavish</p>
      </div>
    </div>
  );
}