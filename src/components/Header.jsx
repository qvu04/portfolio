"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import devAnimation from "../assets/developers.json";

const Header = () => {
    const lines = [
        "> Hello, I'm Vu.",
        "> I'm a Frontend Developer passionate about UI/UX and modern web.",
        "> Welcome to my portfolio!",
    ];

    const [displayedText, setDisplayedText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < lines.length) {
            if (charIndex < lines[lineIndex].length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + lines[lineIndex][charIndex]);
                    setCharIndex(charIndex + 1);
                }, 50);
                return () => clearTimeout(timeout);
            } else {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + "\n");
                    setLineIndex(lineIndex + 1);
                    setCharIndex(0);
                }, 500);
                return () => clearTimeout(timeout);
            }
        }
    }, [charIndex, lineIndex]);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header
            id="header"
            className="flex flex-col md:flex-row items-center justify-center md:justify-between h-screen px-6 md:px-10 bg-[#232946] text-[#c9d1d9] font-mono relative"
        >
            {/* Container chính */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full">
                {/* Left - Terminal */}
                <div className="flex-1 flex justify-center">
                    <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[600px] rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg bg-[#161b22] mt-10 md:mt-0">
                        <div className="flex gap-2 px-4 py-2 bg-[#21262d]">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="p-5 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                            {displayedText}
                        </div>
                    </div>
                </div>

                {/* Right - Animation */}
                <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
                    <div className="w-full sm:w-[250px] md:w-[300px] lg:w-[600px]">
                        <Lottie animationData={devAnimation} loop={true} />
                    </div>
                </div>
            </div>

            {/* Arrow Down - scroll đến AboutMe */}
            <div
                onClick={() => scrollTo("about")}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-pink-500 hover:text-pink-400 animate-bounce"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 sm:w-10 sm:h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </header>
    );
};

export default Header;
