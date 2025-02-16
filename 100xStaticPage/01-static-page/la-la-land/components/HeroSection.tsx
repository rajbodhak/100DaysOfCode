"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const HeroSection: React.FC = () => {
    return (
        <section className="h-[30rem] rounded-md w-full relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0A043C] to-[#5A189A] text-white">
            {/* Background stars
            <div className="absolute inset-0 bg-[url('/stars.png')] bg-cover opacity-20"></div> */}
            <h1 className="text-7xl p-10 font-yesevaOne text-center text-shadow-neon">La La Land</h1>

            <h1 className="text-6xl font-greatVibes text-yellow-400 text-shadow-neon">
                Here’s to the fools who dream...
            </h1>
            <p className="mt-4 text-lg text-lavender">A love story under the city lights.</p>

            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-pink-500 rounded-lg shadow-lg hover:bg-pink-400 transition">
                Experience the Magic
            </button>
            <ShootingStars />
            <StarsBackground />
        </section>
    );
};

export default HeroSection;
