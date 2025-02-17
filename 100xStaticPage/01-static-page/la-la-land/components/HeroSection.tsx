"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const HeroSection: React.FC = () => {
    return (
        <section className="h-[30rem] rounded-md w-full relative flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0A043C] to-[#5A189A] text-white overflow-hidden">
            <StarsBackground className="z-0" /> {/* Behind content */}
            <div className="z-10"> {/* Content above the stars */}
                <h1 className="text-7xl pb-10 font-yesevaOne text-center text-shadow-neon">La La Land</h1>
                <h1 className="text-6xl font-greatVibes text-yellow-400 text-shadow-neon">
                    Here’s to the fools who dream...
                </h1>
                <p className="mt-4 text-lg text-lavender">A love story under the city lights.</p>
                <button className="mt-6 px-6 py-3 text-lg font-semibold bg-pink-500 rounded-lg shadow-lg transition cursor-pointer hover:bg-pink-400 active:bg-pink-600 focus:ring-4 focus:ring-pink-300">
                    Experience the Magic
                </button>
            </div>
            <ShootingStars className="z-5" /> {/* Above stars but below content */}
        </section>
    );
};

export default HeroSection;