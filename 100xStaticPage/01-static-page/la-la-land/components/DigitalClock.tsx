"use client"
import React, { useState, useEffect } from 'react'

const DigitalClock = () => {
    const [currentTime, setCurrentTime] = useState<string>(" ");
    //Old version
    // function myTimer() {
    //     const date = new Date();
    //     const time = date.toLocaleTimeString();
    //     setCurrentTime(time);
    // }

    // useEffect(() => {
    //     const myInterval = setInterval(myTimer, 1000);
    //     return () => clearInterval(myInterval);
    // }, [])

    //Current Version
    useEffect(() => {
        function myTimer() {
            const date = new Date();
            const time = date.toLocaleTimeString();
            setCurrentTime(time);
        }
        myTimer();
        const myInterval = setInterval(() => { myTimer }, 1000);
        return () => clearInterval(myInterval);
    }, []);

    return (
        <div className='w-full flex justify-center items-center'>
            <h1 className='text-3xl p-4 mt-10 rounded-md bg-white/10 backdrop-blur-sm shadow-2xl text-blue-200'>{currentTime}</h1>
        </div>
    )
}

export default DigitalClock
