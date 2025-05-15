import { useState, useEffect, useCallback, useRef } from "react";

export interface Lap {
  number: number;
  time: number;
  diff: number;
}

export function useStopwatch() {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  const intervalRef = useRef<number | null>(null);
  const previousLapTimeRef = useRef<number>(0);

  // Clear interval on component unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Setup keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space - Start/Stop
      if (e.code === 'Space') {
        e.preventDefault();
        startStop();
      }
      
      // P - Pause/Resume
      if (e.code === 'KeyP' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (isRunning) pause();
      }
      
      // R - Reset
      if (e.code === 'KeyR' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (time > 0) reset();
      }
      
      // L - Lap
      if (e.code === 'KeyL' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        e.preventDefault();
        if (isRunning && !isPaused) lap();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRunning, isPaused, time]);

  const startTimer = useCallback(() => {
    if (intervalRef.current) return;
    
    setIsRunning(true);
    setIsPaused(false);
    
    intervalRef.current = window.setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 100); // Update every 100ms (1/10th of a second)
  }, []);

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setIsRunning(false);
    setIsPaused(false);
  }, []);

  const startStop = useCallback(() => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  }, [isRunning, startTimer, stopTimer]);

  const pause = useCallback(() => {
    if (!isRunning) return;
    
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
  }, [isRunning, isPaused, startTimer]);

  const reset = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    setTime(0);
    setLaps([]);
    setIsRunning(false);
    setIsPaused(false);
    previousLapTimeRef.current = 0;
  }, []);

  const lap = useCallback(() => {
    if (!isRunning || isPaused) return;
    
    const lapTime = time;
    const lapDiff = lapTime - previousLapTimeRef.current;
    previousLapTimeRef.current = lapTime;
    
    setLaps(prevLaps => [
      ...prevLaps,
      {
        number: prevLaps.length + 1,
        time: lapTime,
        diff: lapDiff
      }
    ]);
  }, [isRunning, isPaused, time]);

  return {
    time,
    isRunning,
    isPaused,
    laps,
    startStop,
    pause,
    reset,
    lap
  };
}
