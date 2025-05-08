
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Автовоспроизведение не разрешено браузером:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio 
        ref={audioRef} 
        src="https://audio.jukehost.co.uk/9To4w6AhPDxBXQWyxIcHwXsQpiVVJNXM" 
        loop
      />
      <Button 
        onClick={togglePlay} 
        className="rounded-full p-3 bg-green-700 hover:bg-green-800 shadow-lg"
        aria-label={isPlaying ? 'Выключить музыку' : 'Включить музыку'}
      >
        <Icon name={isPlaying ? "VolumeX" : "Volume2"} className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default MusicPlayer;
