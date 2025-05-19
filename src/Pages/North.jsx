import React from "react";
import { motion } from "framer-motion";
import delhi from "../assets/delhi.jpg";
import jaipur from "../assets/jaipurpic.jpg";
import manali from "../assets/manali.jpg";
import shimla from "../assets/shimla.jpg";
import varanasi from "../assets/vanarsh.jpg";

const cities = [
  {
    name: "Delhi",
    image: delhi,
    description: "The capital city full of heritage, culture, and amazing street food.",
  },
  {
    name: "Jaipur",
    image: jaipur,
    description: "The Pink City known for palaces, forts, and vibrant markets.",
  },
  {
    name: "Manali",
    image: manali,
    description: "A beautiful hill station with snow-capped peaks and adventure sports.",
  },
  {
    name: "Shimla",
    image: shimla,
    description: "The Queen of Hills with colonial charm and scenic landscapes.",
  },
  {
    name: "Varanasi",
    image: varanasi,
    description: "A spiritual city on the banks of the Ganga, rich in culture and rituals.",
  },
];

const North = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Banner Image with Overlay Text */}
      <motion.div
        className="relative w-full h-[70vh] rounded-lg overflow-hidden mb-10 shadow-lg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={shimla}
          alt="North India Scenic"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 text-shadow-2xs bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            Explore the Wonders of North India
          </h1>
        </motion.div>
      </motion.div>

      {/* About North India Section with Quote */}
      <section className="max-w-4xl mx-auto mb-12 text-center px-4">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          About North India
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          North India is a captivating blend of history, culture, and natural beauty — from the bustling cities to serene mountains.
        </motion.p>
        <motion.blockquote
          className="text-xl italic text-blue-700 font-semibold border-l-4 border-blue-700 pl-4 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
        </motion.blockquote>
      </section>

      {/* Cities Grid */}
      <h1 className="text-4xl font-bold text-center mb-10">Top Cities to Visit in North India</h1>
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

export default North;
