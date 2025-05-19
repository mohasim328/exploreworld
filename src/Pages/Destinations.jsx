import React from "react";
import { motion } from "framer-motion";

// Image Imports
import paris from "../assets/paris.jpeg";
import rome from "../assets/rome.jpeg";
import bangkok from "../assets/bangkok.jpg";
import dubai from "../assets/dubai.jpg";
import jaipur from "../assets/jaipurpic.jpg";
import goa from "../assets/goa.jpg";
import manali from "../assets/manali.jpg";
import varanasi from "../assets/vanarsh.jpg";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Destination = () => {
  const international = [
    { name: "Paris", img: paris },
    { name: "Rome", img: rome },
    { name: "Bangkok", img: bangkok },
    { name: "Dubai", img: dubai },
  ];

  const india = [
    { name: "Jaipur", img: jaipur },
    { name: "Goa", img: goa },
    { name: "Manali", img: manali },
    { name: "Varanasi", img: varanasi },
  ];

  return (
    <div className="w-full px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        Explore Our Top Destinations
      </motion.h1>

      {/* 🌍 International Destinations */}
      <section className="mb-14">
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          🌍 International Destinations
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-4">
          {international.map((place, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="w-full aspect-square">
                <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center font-medium">{place.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🇮🇳 Indian Destinations */}
      <section>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          🇮🇳 Indian Destinations
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-4">
          {india.map((place, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1"
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="w-full aspect-square">
                <img src={place.img} alt={place.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 text-center font-medium">{place.name}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destination;



