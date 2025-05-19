import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const infoCards = [
    {
      icon: <FaPhoneAlt className="text-xl text-blue-600" />,
      title: 'Phone',
      text: '+91 9876543210',
    },
    {
      icon: <FaEnvelope className="text-xl text-blue-600" />,
      title: 'Email',
      text: 'contact@example.com',
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-blue-600" />,
      title: 'Address',
      text: '123 Main Street, City, India',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10 space-y-8">
      {/* Info Cards Outside the Form Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
        {infoCards.map((card, index) => (
          <motion.div
            key={card.title}
            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-3">{card.icon}</div>
            <h4 className="font-semibold text-lg text-gray-800">{card.title}</h4>
            <p className="text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Contact Form Card */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl font-bold mb-6 text-center text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Contact Us
        </motion.h2>

        <form className="space-y-4">
          {['Name', 'Email', 'Subject', 'Message'].map((field, index) => (
            <motion.div
              key={field}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
            >
              <label className="block mb-1 font-semibold text-gray-700">{field}</label>
              {field !== 'Message' ? (
                <input
                  type={field === 'Email' ? 'email' : 'text'}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={`Your ${field}`}
                  required
                />
              ) : (
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Message"
                  required
                ></textarea>
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
