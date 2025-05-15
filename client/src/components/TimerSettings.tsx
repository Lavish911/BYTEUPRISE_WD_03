import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TimerSettings as ITimerSettings } from "@/hooks/useTimer";

interface TimerSettingsProps {
  onSetTimer: (settings: ITimerSettings) => void;
  disabled: boolean;
}

export function TimerSettings({ onSetTimer, disabled }: TimerSettingsProps) {
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Make sure values are between valid ranges
    const validHours = Math.max(0, Math.min(23, hours));
    const validMinutes = Math.max(0, Math.min(59, minutes));
    const validSeconds = Math.max(0, Math.min(59, seconds));
    
    // Ensure that at least one value is greater than 0
    if (validHours === 0 && validMinutes === 0 && validSeconds === 0) {
      return;
    }
    
    onSetTimer({
      hours: validHours,
      minutes: validMinutes,
      seconds: validSeconds
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-gray-50 border-t border-gray-100">
      <div className="text-base font-semibold mb-3 text-gradient">Set Timer</div>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="flex flex-col">
          <label htmlFor="hours" className="text-xs text-gray-500 mb-1">Hours</label>
          <Input
            id="hours"
            type="number"
            min="0"
            max="23"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value) || 0)}
            disabled={disabled}
            className="text-center"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="minutes" className="text-xs text-gray-500 mb-1">Minutes</label>
          <Input
            id="minutes"
            type="number"
            min="0"
            max="59"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
            disabled={disabled}
            className="text-center"
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="seconds" className="text-xs text-gray-500 mb-1">Seconds</label>
          <Input
            id="seconds"
            type="number"
            min="0"
            max="59"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
            disabled={disabled}
            className="text-center"
          />
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-gradient text-white hover:shadow-lg"
        disabled={disabled || (hours === 0 && minutes === 0 && seconds === 0)}
      >
        Set Timer
      </Button>
    </form>
  );
}