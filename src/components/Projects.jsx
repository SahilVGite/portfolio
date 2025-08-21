import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, ShoppingCart } from 'lucide-react';
import {GeneralKnowledgeQuizss, GuessTheNumber, FrontendMentorChallenges} from '../assets/images/';

const Projects = () => {
  const projects = [
    {
      title: 'General Knowledge Quiz',
      description: 'General Knowledge Quiz application with multiple-choice questions and scoring system',
      image: GeneralKnowledgeQuizss,
      tech: ['HTML', 'CSS', 'jquery'],
      github: 'https://github.com/SahilVGite/General-Knowledge-Quiz/tree/main',
      live: 'https://sahilvgite.github.io/General-Knowledge-Quiz/',
      icon: Globe,
    },
    {
      title: 'Guess the Number',
      description: 'Number guessing game with a simple UI and random number generation',
      image: GuessTheNumber,
      tech: ['HTML', 'CSS', 'JS'],
      github: 'https://github.com/SahilVGite/Guess-the-Number',
      live: 'https://sahilvgite.github.io/Guess-the-Number/',
      icon: Globe,
    },
    {
      title: 'Frontend Mentor Challenges',
      description: 'A collection of solutions to various Frontend Mentor challenges',
      image: FrontendMentorChallenges,
      tech: ['HTML', 'CSS', 'JS', 'jquery'],
      github: 'https://github.com/SahilVGite/Frontend_Mentor_Challenges',
      live: 'https://sahilvgite.github.io/Frontend_Mentor_Challenges/',
      icon: Globe,
    },
  ];

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
          {projects.map((project, index) => (
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
      </div>
    </section>
  );
};

export default Projects;
