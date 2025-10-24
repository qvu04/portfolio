import React, { useEffect } from "react";

const AboutMe = () => {
    useEffect(() => {
        const handleScroll = () => {
            const reveals = document.querySelectorAll(".reveal");
            reveals.forEach((el) => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add("active");
                } else {
                    el.classList.remove("active");
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const skills = [
        { name: "HTML", level: 90 },
        { name: "CSS / TailwindCSS", level: 75 },
        { name: "JavaScript (ES6+)", level: 70 },
        { name: "Typescript", level: 60 },
        { name: "ReactJS", level: 70 },
        { name: "Next.js", level: 60 },
    ];
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section
            id="about"
            className=" relative min-h-screen py-10 md:py-16 px-6 md:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 flex items-center"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                {/* LEFT: Avatar */}
                <div className="flex justify-center md:justify-start reveal">
                    <div className="relative group">
                        <img
                            src="/vu.jpg"
                            alt="Vu"
                            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 
                 rounded-2xl object-cover shadow-xl 
                 transition-transform duration-300 group-hover:scale-105 
                 border-4 border-transparent 
                 bg-gradient-to-br from-pink-500 to-purple-600 p-[3px]"
                        />
                        <div className="absolute top-[-25px] right-[-15px] animate-wave text-6xl">👋</div>
                    </div>
                </div>

                {/* RIGHT: Info */}
                <div className="text-gray-800 dark:text-gray-200 space-y-6 reveal delay-200">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-lg leading-relaxed">
                        Hi there! My name is{" "}
                        <span className="font-semibold text-pink-500 dark:text-pink-400">
                            Ngo Quang Vu
                        </span>
                        , a recent graduate with a strong passion for{" "}
                        <span className="text-purple-600 dark:text-purple-400">
                            coding and frontend development
                        </span>
                        . As someone just starting my professional journey, I may not have much
                        experience yet — but I make up for it with hard work, perseverance, and a
                        strong desire to learn and grow every day. My goal is to continuously improve
                        myself, take on new challenges, and make meaningful contributions wherever I
                        work.
                    </p>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm">
                        <p>
                            <span className="font-semibold">Year of birth:</span>{" "}
                            <span className="text-pink-500">2004</span>
                        </p>
                        <p>
                            <span className="font-semibold">Living in:</span>{" "}
                            <span className="text-pink-500">Ho Chi Minh city</span>
                        </p>
                        <p>
                            <span className="font-semibold">Email:</span>{" "}
                            <a
                                href="mailto:quangvu221004@gmail.com"
                                className="text-pink-500 hover:underline"
                            >
                                quangvu221004@gmail.com
                            </a>
                        </p>
                        <p>
                            <span className="font-semibold">Role:</span>{" "}
                            <span className="text-pink-500">Frontend Developer</span>
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="mt-6 reveal delay-400">
                        <h3 className="text-xl font-semibold mb-4">Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <div className="flex justify-between mb-1">
                                        <span>{skill.name}</span>
                                    </div>
                                    <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                        <div
                                            className="progress-bar h-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                                            style={{ "--target-width": `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => scrollTo("projects")}
                className="absolute bottom-0 sm:bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer text-pink-500 hover:text-pink-400 animate-bounce"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </section>
    );
};

export default AboutMe;
