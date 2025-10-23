import React from "react";

const Footer = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer
            id="footer"
            className="min-h-[30vh] flex flex-col items-center justify-center bg-gray-900 text-gray-100 relative px-6 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Thanks for your attention!
            </h2>
            <p className="text-center mb-8 text-gray-400">
                I hope you enjoyed my portfolio.
            </p>

            {/* Button scroll lên đầu trang */}
            <button
                onClick={() => scrollTo("header")}
                className="flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition transform hover:scale-105"
            >
                Back to Top
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                </svg>
            </button>

            {/* Decorative circles */}
            <div className="absolute w-48 h-48 bg-pink-500 rounded-full opacity-20 top-[-50px] left-[-30px] animate-pulse-slow"></div>
        </footer>
    );
};

export default Footer;
