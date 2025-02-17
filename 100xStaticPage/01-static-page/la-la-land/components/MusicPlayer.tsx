"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Repeat } from "lucide-react"; // Import icons

const MusicPlayer: React.FC = () => {
    const [playing, setPlaying] = useState(false);
    const [loop, setLoop] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const updateProgress = () => {
                setProgress((audio.currentTime / audio.duration) * 100);
            };
            audio.addEventListener("timeupdate", updateProgress);
            return () => audio.removeEventListener("timeupdate", updateProgress);
        }
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        setPlaying(!playing);
    };

    const toggleLoop = () => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.loop = !audio.loop;
        setLoop(!loop);
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        const newTime = (Number(e.target.value) / 100) * audio.duration;
        audio.currentTime = newTime;
        setProgress(Number(e.target.value));
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = Number(e.target.value);
        setVolume(Number(e.target.value));
    };

    return (
        <div className="bg-[#5A189A]/20 backdrop-blur-lg p-4 rounded-lg shadow-lg flex flex-col items-center">
            <audio ref={audioRef}>
                <source src="/city-of-stars.ogg" type="audio/ogg" />
                <source src="/city-of-stars.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Controls */}
            <div className="flex items-center gap-3">
                <button onClick={togglePlay} className="bg-pink-500 p-2 rounded-full">
                    {playing ? <Pause size={24} /> : <Play size={24} />}
                </button>

                {/* Seek Bar */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleSeek}
                    className="w-40 h-1 bg-gray-300 rounded-full cursor-pointer sm:w-32"
                />

                {/* Loop Button */}
                <button onClick={toggleLoop} className={`${loop ? "text-blue-400" : "text-white"}`}>
                    <Repeat size={24} />
                </button>
            </div>

            {/* Volume Control */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 mt-2 cursor-pointer sm:w-20"
            />
        </div>
    );
};

export default MusicPlayer;

