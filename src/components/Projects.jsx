import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  BookOpenCheck,
  Gamepad2,
  Swords,
  BriefcaseBusiness,
} from "lucide-react";
import {
  GeneralKnowledgeQuizss,
  GuessTheNumber,
  FrontendMentorChallenges,
  PortfolioPreview,
} from "../assets/images/";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "My personal portfolio showcasing my skills and projects",
      image: PortfolioPreview,
      tech: ["react", "framer-motion", "tailwindcss"],
      github: "https://github.com/SahilVGite/portfolio",
      live: "https://sahilvgite.netlify.app/",
      icon: BriefcaseBusiness,
    },
    {
      title: "General Knowledge Quiz",
      description:
        "General Knowledge Quiz application with multiple-choice questions and scoring system",
      image: GeneralKnowledgeQuizss,
      tech: ["HTML", "CSS", "jquery"],
      github:
        "https://github.com/SahilVGite/General-Knowledge-Quiz/tree/main",
      live: "https://sahilvgite.github.io/General-Knowledge-Quiz/",
      icon: BookOpenCheck,
    },
    {
      title: "Guess the Number",
      description:
        "Number guessing game with a simple UI and random number generation",
      image: GuessTheNumber,
      tech: ["HTML", "CSS", "JS"],
      github: "https://github.com/SahilVGite/Guess-the-Number",
      live: "https://sahilvgite.github.io/Guess-the-Number/",
      icon: Gamepad2,
    },
    {
      title: "Frontend Mentor Challenges",
      description:
        "A collection of solutions to various Frontend Mentor challenges",
      image: FrontendMentorChallenges,
      tech: ["HTML", "CSS", "JS", "jquery"],
      github: "https://github.com/SahilVGite/Frontend_Mentor_Challenges",
      live: "https://sahilvgite.github.io/Frontend_Mentor_Challenges/",
      icon: Swords,
    },
  ];

  const [rows, setRows] = useState(1); // initially show 1 row
  const [cardsPerRow, setCardsPerRow] = useState(3);

  // detect screen size for cards per row
  const updateCardsPerRow = () => {
    if (window.innerWidth >= 1024) setCardsPerRow(3); // desktop
    else if (window.innerWidth >= 768) setCardsPerRow(2); // tablet
    else setCardsPerRow(1); // mobile
  };

  useEffect(() => {
    updateCardsPerRow();
    window.addEventListener("resize", updateCardsPerRow);
    return () => window.removeEventListener("resize", updateCardsPerRow);
  }, []);

  const visibleProjects = projects.slice(0, rows * cardsPerRow);

  const handleReadMore = () => {
    setRows((prev) => prev + 1); // reveal one more row
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing some of my best work and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-gray-700/30"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <project.icon size={32} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        {visibleProjects.length < projects.length && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReadMore}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              Show More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;