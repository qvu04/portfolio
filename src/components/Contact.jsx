import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    {
        name: "Email",
        icon: <FaEnvelope />,
        href: "mailto:quangvu221004@gmail.com",
        tooltip: "Send me an email",
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        href: "https://www.linkedin.com/in/ngo-quang-vu-1906b8305/",
        tooltip: "Visit my LinkedIn",
    },
    {
        name: "GitHub",
        icon: <FaGithub />,
        href: "https://github.com/qvu04",
        tooltip: "Check out my GitHub",
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        href: "https://www.facebook.com/ngo.quangvu.79/",
        tooltip: "Follow me on Facebook",
    },
];

const Contact = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="contact"
            className="min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 py-16 bg-gradient-to-tr from-purple-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-500 overflow-hidden"
        >
            {/* Decorative floating circles */}
            <div className="absolute w-72 h-72 bg-pink-300 rounded-full opacity-20 top-[-50px] left-[-50px] animate-spin-slow"></div>
            <div className="absolute w-56 h-56 bg-purple-400 rounded-full opacity-20 bottom-[-60px] right-[-40px] animate-pulse-slow"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
                Let's Connect!
            </h2>
            <p className="text-center mb-12 text-gray-700 dark:text-gray-300 max-w-2xl">
                I'm always open to discuss new projects or opportunities. Reach out to me
                via any platform below!
            </p>

            {/* Social icons */}
            <div className="flex flex-wrap justify-center gap-8 z-10">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-2xl text-gray-900 dark:text-gray-100"
                    >
                        <span className="text-3xl">{social.icon}</span>
                        {/* Tooltip */}
                        <span className="absolute -bottom-10 bg-gray-900 text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                            {social.tooltip}
                        </span>
                    </a>
                ))}
            </div>

            {/* Arrow Down to Footer */}
            <div
                onClick={() => scrollTo("footer")}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-pink-500 hover:text-pink-400 animate-bounce"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Contact;
