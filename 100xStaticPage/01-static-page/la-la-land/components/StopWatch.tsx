"use client"
import { useState, useRef } from 'react'
// import {} from "lucide-react"
const StopWatch = () => {
    const [isRunning, setisRunning] = useState<boolean>(false);
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    function onStart() {
        if (isRunning) return;
        setisRunning(true);

        const start = Date.now() - elapsedTime;
        intervalRef.current = setInterval(() => {
            let timeElapsed = Date.now() - start;
            setElapsedTime(timeElapsed);
        }, 100);
    }

    function onStop() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setisRunning(false);
    }

    function onReset() {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setisRunning(false);
        setElapsedTime(0);
    }

    function formatTime(ms: number) {
        let milliseconds = Math.floor((ms % 1000) / 10);
        let seconds = Math.floor((ms / 1000) % 60);
        let minutes = Math.floor((ms / (1000 * 60)) % 60);
        let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
        let days = Math.floor((ms / (1000 * 60 * 60 * 24)));

        return `${days > 0 ? days + "d : " : ""}${hours > 0 ? String(hours).padStart(2, "0") + "h : " : ""}${String(minutes).padStart(2, "0")}m : ${String(seconds).padStart(2, "0")}s : ${String(milliseconds).padStart(2, "0")}`;

    }

    return (
        <div className='p-10 flex items-center justify-center'>
            <div className='h-auto w-96 bg-white/15 backdrop-blur-md p-4 flex flex-col justify-center rounded-lg'>
                <h1 className='text-3xl text-center font-bold text-blue-200'>Stop Watch</h1>
                <div>
                    <div className='py-3 px-5 text-xl text-center text-blue-300'>
                        {formatTime(elapsedTime)}
                    </div>
                    <div className='flex justify-evenly'>
                        <button onClick={onStart} className='btn-primary'>Start</button>
                        <button onClick={onStop} className='btn-primary'>Stop</button>
                        <button onClick={onReset} className='btn-primary'>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StopWatch
