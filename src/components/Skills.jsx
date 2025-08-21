import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML/CSS/JS', level: 85 },
        { name: 'React', level: 70 },
        // { name: 'JavaScript', level: 70 },
        { name: 'Wordpress', level: 75 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'MySQL', level: 75 },
        { name: 'Java', level: 55 },
        { name: 'Python', level: 50 },
        // { name: 'MongoDB', level: 80 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80 },
        // { name: 'REST APIs', level: 85 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Problem Solving', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
