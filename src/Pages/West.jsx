import React from "react";
import { motion } from "framer-motion";
import mumbai from "../assets/mumbai.webp";
import goa from "../assets/goa.jpg";
import ahmedabad from "../assets/ahamdabad.jpeg";
import udaipur from "../assets/udaipur.jpeg";
import pune from "../assets/pune.jpeg";

const cities = [
  {
    name: "Mumbai",
    image: mumbai,
    description: "The financial capital of India, known for Bollywood, beaches, and vibrant nightlife.",
  },
  {
    name: "Goa",
    image: goa,
    description: "Famous for its stunning beaches, Portuguese heritage, and laid-back vibe.",
  },
  {
    name: "Ahmedabad",
    image: ahmedabad,
    description: "A city rich in history and culture, known for Sabarmati Ashram and textile industry.",
  },
  {
    name: "Udaipur",
    image: udaipur,
    description: "The City of Lakes, adorned with palaces and romantic landscapes.",
  },
  {
    name: "Pune",
    image: pune,
    description: "An educational and cultural hub with a perfect mix of modernity and tradition.",
  },
];

const West = () => {
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
          src={goa}
          alt="West India Scenic"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0  bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Explore the Wonders of West India
          </h1>
        </motion.div>
      </motion.div>

      {/* About West India Section */}
      <section className="max-w-4xl mx-auto mb-12 text-center px-4">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          About West India
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          West India is a land of contrasts—from vibrant cities and historical forts to pristine beaches and cultural heritage.
        </motion.p>
        <motion.blockquote
          className="text-xl italic text-yellow-700 font-semibold border-l-4 border-yellow-700 pl-4 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          "The world is a book and those who do not travel read only one page." – Saint Augustine
        </motion.blockquote>
      </section>

      {/* Cities Grid */}
      <h1 className="text-4xl font-bold text-center mb-10">Top Cities to Visit in West India</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
          >
            <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{city.name}</h2>
              <p className="text-gray-600">{city.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default West;
