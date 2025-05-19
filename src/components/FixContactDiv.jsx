

import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const FixedContact = () => {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50 bg-white p-4 rounded-r-2xl shadow-lg space-y-6">
      {/* Phone */}
      <a href="tel:+919528545024" title="Call Us" >
        <FiPhone className="text-blue-500 w-5 h-5 cursor-pointer hover:translate-x-2 transition-transform duration-200 my-1" />
      </a>

      {/* Email */}
      <a href="mailto:mohasim3283.com" title="Send Email">
        <FiMail className="text-blue-500 w-5 h-5 cursor-pointer hover:translate-x-2 transition-transform duration-200 my-1" />
      </a>

      {/* Address (Google Maps link) */}
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        title="View Location"
      >
        <FiMapPin className="text-blue-500 w-5 h-5 cursor-pointer hover:translate-x-2 transition-transform duration-200 my-1" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919528545024"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-blue-500 w-5 h-5 cursor-pointer hover:translate-x-2 transition-transform duration-200 my-1" />
      </a>
    </div>
  );
};

export default FixedContact;
