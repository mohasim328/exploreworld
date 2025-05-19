import React from 'react';
import { motion } from 'framer-motion';

const Pay = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Payment Portal
        </motion.h2>

        <form className="space-y-5">
          {[
            { label: 'Name on Card', type: 'text', placeholder: 'John Doe' },
            { label: 'Card Number', type: 'text', placeholder: '1234 5678 9012 3456' },
            { label: 'Expiry Date', type: 'text', placeholder: 'MM/YY' },
            { label: 'CVV', type: 'password', placeholder: '123' },
            { label: 'Amount (INR)', type: 'number', placeholder: '500' }
          ].map((field, index) => (
            <motion.div
              key={field.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <label className="block text-gray-700 font-semibold mb-1">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          ))}

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Make Payment
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Pay;
