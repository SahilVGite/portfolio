import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      icon: BookOpen,
      title: 'Jr. Frontend Developer',
      institution: '4Fox Solutions',
      year: '2024 - Present',
      description: 'Creative Frontend Developer | Specializing in Responsive Web Design Using HTML, CSS, JavaScript/jQuery, React.js',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Award,
      title: 'Full Stack Development Certification',
      institution: 'Online Learning (MZOS Institute)',
      year: '2023',
      description: 'Comprehensive training in modern web development technologies',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: GraduationCap,
      title: 'Bachelor of Engineering',
      institution: 'Brahma Valley College of Engineering',
      year: '2019 - 2022',
      description: 'Focused on Mechanical Engineering',
      color: 'from-blue-500 to-blue-600',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-teal-400">Education & Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full hidden lg:block" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-600/30"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} mr-4`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-blue-400 font-medium">{item.institution}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-2">{item.description}</p>
                    <p className="text-sm text-gray-400 font-medium">{item.year}</p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 my-4 lg:my-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color} border-4 border-gray-900`}
                  />
                </div>

                <div className="flex-1 lg:block hidden" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
