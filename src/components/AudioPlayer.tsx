import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { type Song } from "../data/songs";
import { assetPath } from "../lib/assetPath";

type AudioPlayerProps = {
  song: Song;
  autoPlay?: boolean;
  playSignal?: number;
};

export function AudioPlayer({ song, autoPlay = false, playSignal = 0 }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isEnabled, setIsEnabled] = useState(autoPlay);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    setIsPlaying(false);
    audio.load();
    setIsEnabled(autoPlay);
  }, [song.src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const markPaused = () => setIsPlaying(false);

    audio.addEventListener("ended", markPaused);
    audio.addEventListener("pause", markPaused);

    return () => {
      audio.removeEventListener("ended", markPaused);
      audio.removeEventListener("pause", markPaused);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isEnabled) {
      audio.pause();
      return;
    }

    const attemptAutoplay = async () => {
      try {
        audio.volume = 0.9;
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    void attemptAutoplay();
  }, [isEnabled, playSignal, song.src]);

  async function togglePlay() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setIsEnabled(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
      setIsEnabled(false);
    }
  }

  return (
    <div className="audio-shell">
      <audio ref={audioRef} src={assetPath(song.src)} preload="metadata" />
      <button
        className={`audio-toggle ${isPlaying ? "audio-toggle--playing" : ""}`}
        type="button"
        onClick={() => void togglePlay()}
        aria-label={isPlaying ? "关闭背景音乐" : "播放背景音乐"}
      >
        {isPlaying ? <Pause size={18} aria-hidden="true" /> : <Play size={18} aria-hidden="true" />}
      </button>
    </div>
  );
}
