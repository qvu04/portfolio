import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="w-full max-w-sm bg-[#f7f8ff] rounded-2xl shadow-md overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -6 }}
        >
            {/* Hình preview */}
            <div className="relative overflow-hidden">
                <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                />
            </div>

            {/* Nội dung */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${tag.color
                                }`}
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>

                {/* Mô tả */}
                <p className="text-gray-600 text-sm flex-grow">{project.desc}</p>

                {/* Nút Live View */}
                <div className="flex justify-between items-center mt-4">
                    <FaGithub className="text-3xl text-gray-600" />
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#d4b9a2] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-[#c6a48b] transition-all duration-300"
                    >
                        View Demo Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
