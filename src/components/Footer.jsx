import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com/SahilVGite', label: 'GitHub' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sahil-gite-0b4874284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
    { Icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="py-12 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
          >
            Portfolio
          </motion.div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                onClick={(e) => {
                  if (href === '#contact') {
                    e.preventDefault();
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-gray-400"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="text-red-500"
            >
              <Heart size={18} fill="currentColor" />
            </motion.div>
            <span>by Sahil Gite</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-4"
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>

  )
}

export default Footer
