import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building scalable web applications with modern technologies',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Ensuring fast and efficient user experiences',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm Sahil Gite, a passionate Full Stack Developer dedicated to creating
            innovative web solutions and building scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-6xl font-bold">
                  SG
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                As a Full Stack Developer, I specialize in creating end-to-end web solutions
                using modern technologies. I'm passionate about writing clean, efficient code
                and building applications that provide exceptional user experiences.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg"
                >
                  <div className="text-blue-400 mt-1">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
