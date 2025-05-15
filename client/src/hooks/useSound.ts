import { useRef, useEffect } from 'react';

interface UseAudioOptions {
  volume?: number;
  autoPlay?: boolean;
}

export function useSound(src: string, options: UseAudioOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume = 1, autoPlay = false } = options;

  useEffect(() => {
    // Create an audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
      
      if (autoPlay) {
        audioRef.current.autoplay = true;
      }
    }

    // Cleanup function to remove the audio element when the component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [src, volume, autoPlay]);

  const play = () => {
    if (audioRef.current) {
      // Reset the audio to the beginning before playing
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { play, pause, stop };
}