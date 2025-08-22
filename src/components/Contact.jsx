import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from "emailjs-com";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_czevp5m",   // from EmailJS dashboard
        "template_8usln37",  // your template ID
        {
          from_name: data.name,
          from_email: data.email,
          from_phone: data.phone,
          subject: data.subject,
          message: data.message,
        },
        "wEaA7soL5JScbIT7s" // Public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sahilvgite@gmail.com',
      href: 'mailto:sahilvgite@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8149901081',
      href: 'tel:+918149901081',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nashik, Maharashtra, India',
      href: 'https://maps.app.goo.gl/3eSNtiWix4YNkEr97',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your next project or just say hello!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll do my best
                to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <div className="text-teal-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-gray-300">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700/30 rounded-xl p-8 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className='relative'>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm absolute top-full">{errors.name.message}</p>
                  )}
                </div>

                <div className='relative'>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm  absolute top-full">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
              <div className='relative'>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="text"
                  id="phone"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm  absolute top-full">{errors.phone.message}</p>
                )}
              </div>

              <div className='relative'>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject', { required: 'Subject is required' })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm  absolute top-full">{errors.subject.message}</p>
                )}
              </div>
              </div>



              <div className='relative'>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-300 resize-none"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm  absolute top-full">{errors.message.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
