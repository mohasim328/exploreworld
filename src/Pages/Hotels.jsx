import React from "react";
import { motion } from "framer-motion";

// Images (place them in src/assets)
import tajMahal from "../assets/tajhotel.jpeg";
import oberoiUdaivilas from "../assets/oberoiUdaivilas.jpeg";
import leelaGoa from "../assets/leelagoa.jpeg";
import rambaghPalace from "../assets/rambaghPalace.jpeg";
import itcGrandChola from "../assets/itcGrandChola.jpeg";
import jumera from "../assets/jumera.webp";

const hotels = [
  {
    name: "The Taj Mahal Palace, Mumbai",
    image: tajMahal,
    location: "Mumbai, Maharashtra",
    description: "An iconic waterfront luxury hotel blending heritage with world-class service.",
  },
  {
    name: "The Oberoi Udaivilas",
    image: oberoiUdaivilas,
    location: "Udaipur, Rajasthan",
    description: "A regal retreat on the banks of Lake Pichola, known for opulence and royal architecture.",
  },
  {
    name: "The Leela Goa",
    image: leelaGoa,
    location: "Goa",
    description: "A luxury beach resort combining Portuguese charm with modern comfort.",
  },
  {
    name: "Rambagh Palace",
    image: rambaghPalace,
    location: "Jaipur, Rajasthan",
    description: "A former royal palace offering timeless elegance and exceptional hospitality.",
  },
  {
    name: "ITC Grand Chola",
    image: itcGrandChola,
    location: "Chennai, Tamil Nadu",
    description: "A grand luxury hotel inspired by Chola dynasty architecture and sustainable design.",
  },
  {
    name: "Jumera Hotel",
    image: jumera,
    location: "UAE , Dubai",
    description: "A grand luxury hotel inspired by Chola dynasty architecture and sustainable design.",
  },
];

const Hotel = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Banner */}
      <motion.div
        className="relative w-full h-[70vh] rounded-lg overflow-hidden mb-10 shadow-lg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={tajMahal}
          alt="Luxury Hotels in India"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0  bg-opacity-50 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Luxury Hotels Across India
          </h1>
        </motion.div>
      </motion.div>

      {/* Section Intro */}
      <section className="max-w-4xl mx-auto text-center px-4 mb-12">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Discover India's Finest Hotels
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From royal palaces to coastal retreats, experience world-class hospitality in India’s most luxurious hotels.
        </motion.p>
      </section>

      {/* Hotel Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{hotel.name}</h2>
              <p className="text-sm text-blue-500 font-medium">{hotel.location}</p>
              <p className="text-gray-600 mt-2">{hotel.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
