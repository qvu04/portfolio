"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const projects = [
        {
            title: "Hotel Booking App",
            desc: "A hotel booking platform built with Next.js, featuring room search, booking management, and admin dashboard integration.",
            img: "/project-3.png",
            link: "https://github.com/qvu04/B5ooking.git",
            tags: [
                { name: "Next.js", color: "bg-gray-900 text-white" },
                { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600" },
                { name: "Redux", color: "bg-purple-500/10 text-purple-600" },
                { name: "Node.js", color: "bg-green-500/10 text-green-700" },
                { name: "Express.js", color: "bg-yellow-500/10 text-yellow-700" },
                { name: "LocalStorage", color: "bg-slate-500/10 text-slate-700" },
                { name: "Responsive Layout", color: "bg-teal-500/10 text-teal-700" },
            ],
        },
        {
            title: "Student Management System",
            desc: "A web-based platform for managing student data, grades, and class assignments with an integrated API and dashboard.",
            img: "/project-4.png",
            link: "https://github.com/LamThanh2k04/Acadex.git",
            tags: [
                { name: "Next.js", color: "bg-gray-900 text-white" },
                { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600" },
                { name: "Redux", color: "bg-purple-500/10 text-purple-600" },
                { name: "Node.js", color: "bg-green-500/10 text-green-700" },
                { name: "Express.js", color: "bg-yellow-500/10 text-yellow-700" },
                { name: "LocalStorage", color: "bg-slate-500/10 text-slate-700" },
            ],
        },
        {
            title: "Movie Ticket App",
            desc: "A responsive movie booking web app built with React and Redux, allowing users to browse movies and reserve seats in real time.",
            img: "/project-2.png",
            link: "https://github.com/qvu04/MovieApp.git",
            tags: [
                { name: "React", color: "bg-blue-500/10 text-blue-600" },
                { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600" },
                { name: "LocalStorage", color: "bg-slate-500/10 text-slate-700" },
                { name: "SwaggerUI", color: "bg-orange-500/10 text-orange-600" },
                { name: "Redux", color: "bg-purple-500/10 text-purple-600" },
            ],
        },
        {
            title: "Portfolio Terminal",
            desc: "A terminal-style portfolio website with typing animation, showcasing personal information and social links in a minimalist design.",
            img: "/project-1.png",
            link: "https://github.com/qvu04/portfolio",
            tags: [
                { name: "React", color: "bg-blue-500/10 text-blue-600" },
                { name: "Framer Motion", color: "bg-pink-500/10 text-pink-600" },
                { name: "Tailwind CSS", color: "bg-cyan-500/10 text-cyan-600" },
            ],
        },
        {
            title: "ToDo App",
            desc: "A simple and efficient ToDo application built with React and LocalStorage for managing daily tasks offline.",
            img: "/project-5.png",
            link: "https://github.com/qvu04/ToDo-App",
            tags: [
                { name: "React", color: "bg-blue-500/10 text-blue-600" },
                { name: "LocalStorage", color: "bg-slate-500/10 text-slate-700" },
            ],
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    // Thay đổi itemsPerPage theo responsive
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setItemsPerPage(3); // desktop
            } else if (window.innerWidth >= 768) {
                setItemsPerPage(2); // tablet
            } else {
                setItemsPerPage(1); // mobile
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleProjects = projects.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (startIndex + itemsPerPage < projects.length) {
            setDirection(1);
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setDirection(-1);
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 150 : -150,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        exit: (direction) => ({
            x: direction > 0 ? -150 : 150,
            opacity: 0,
            transition: { duration: 0.4, ease: "easeIn" },
        }),
    };

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            className="relative min-h-screen flex flex-col justify-center items-center py-16 bg-[#d4d8f0]"
            id="projects"
        >
            <h2 className="text-4xl font-bold mb-10 text-gray-900">My Projects</h2>

            <div className="relative w-full max-w-10xl overflow-hidden px-6 md:px-10">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={startIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className={`flex gap-8 md:gap-10 flex-wrap justify-center md:flex-wrap lg:flex-nowrap`}
                    >
                        {visibleProjects.map((project, index) => (
                            <div key={index} className="w-full sm:w-[48%] lg:w-[23%]">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-6 mt-10">
                <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${startIndex === 0
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#d4b9a2] text-white hover:bg-[#c6a48b]"
                        }`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={startIndex + itemsPerPage >= projects.length}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${startIndex + itemsPerPage >= projects.length
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-[#d4b9a2] text-white hover:bg-[#c6a48b]"
                        }`}
                >
                    Next
                </button>
            </div>

            <div
                onClick={() => scrollTo("contact")}
                className="absolute bottom-1 md:bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer text-pink-500 hover:text-pink-400 animate-bounce"
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

export default Projects;
