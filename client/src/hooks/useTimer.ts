import { useState, useEffect, useRef, useCallback } from "react";
import { useSound } from "./useSound";

export interface TimerSettings {
  hours: number;
  minutes: number;
  seconds: number;
}

export function useTimer() {
  const [time, setTime] = useState<number>(0); // time in seconds
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);
  
  // Sound effects
  const timerEndSound = useSound("/sounds/timer_end.mp3", { volume: 0.6 });
  const buttonClickSound = useSound("/sounds/button_click.mp3", { volume: 0.4 });

  // Clear interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startTimer = useCallback(() => {
    if (intervalRef.current || time <= 0) return;
    
    buttonClickSound.play();
    setIsRunning(true);
    setIsPaused(false);
    setIsFinished(false);
    
    intervalRef.current = window.setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          // Timer is done
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          setIsFinished(true);
          timerEndSound.play();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // update every second
  }, [time, buttonClickSound, timerEndSound]);

  const pauseTimer = useCallback(() => {
    if (!isRunning) return;
    
    buttonClickSound.play();
    
    if (isPaused) {
      // Resume
      startTimer();
    } else {
      // Pause
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsPaused(true);
    }
  }, [isRunning, isPaused, startTimer, buttonClickSound]);

  const stopTimer = useCallback(() => {
    buttonClickSound.play();
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsRunning(false);
    setIsPaused(false);
  }, [buttonClickSound]);

  const resetTimer = useCallback(() => {
    buttonClickSound.play();
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setTime(0);
    setIsRunning(false);
    setIsPaused(false);
    setIsFinished(false);
  }, [buttonClickSound]);

  const setTimerDuration = useCallback((settings: TimerSettings) => {
    const totalSeconds = 
      (settings.hours * 3600) + 
      (settings.minutes * 60) + 
      settings.seconds;
    
    setTime(totalSeconds);
    setIsFinished(false);
  }, []);

  return {
    time,
    isRunning,
    isPaused,
    isFinished,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    setTimerDuration
  };
}