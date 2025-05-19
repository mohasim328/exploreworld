import React from "react";
import { motion } from "framer-motion";

import tajmahal from "../assets/taj.jpg";
import goldentemple from "../assets/goldentample.jpeg";
import kerala from "../assets/kerla.webp";
import jaipur from "../assets/jaipurpic.jpg";
import goa from "../assets/goa.jpg";
import darjeeling from "../assets/dergeling.jpg";
import dubai from "../assets/dubai.jpg";


const destinations = [
  { name: "Taj Mahal", image: tajmahal },
  { name: "Golden Temple", image: goldentemple },
  { name: "Kerala Backwaters", image: kerala },
  { name: "Jaipur", image: jaipur },
  { name: "Goa Beach", image: goa },
  { name: "Dubai", image: dubai },
  { name: "Darjeeling", image: darjeeling },
];

const Gallery = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-50 to-purple-100 min-h-screen p-6">
      {/* Intro Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Explore India</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A breathtaking gallery of India’s most iconic and beautiful destinations.
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {destinations.map((place, index) => (
          <motion.div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg break-inside-avoid group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white px-4 py-2 text-center text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300">
              {place.name}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
