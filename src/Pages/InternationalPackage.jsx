import React from "react";
import { motion } from "framer-motion";

// Sample Images (replace with your own images)
import paris from "../assets/paris.jpeg";
import rome from "../assets/rome.jpeg";
import bangkok from "../assets/bangkok.jpg";
import dubai from "../assets/dubai.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const InternationalPackage = () => {
  const packages = [
    {
      name: "Paris Romantic Getaway",
      img: paris,
      description:
        "Enjoy the city of love with Eiffel Tower views, exquisite cuisine, and rich art.",
      price: "$1,200",
      duration: "5 Days / 4 Nights",
    },
    {
      name: "Rome Historical Tour",
      img: rome,
      description:
        "Explore ancient ruins, Vatican City, and experience authentic Italian culture.",
      price: "$1,500",
      duration: "6 Days / 5 Nights",
    },
    {
      name: "Bangkok Cultural Experience",
      img: bangkok,
      description:
        "Dive into vibrant street life, temples, and flavorful Thai cuisine in Bangkok.",
      price: "$900",
      duration: "4 Days / 3 Nights",
    },
    {
      name: "Dubai Luxury Escape",
      img: dubai,
      description:
        "Discover luxury shopping, desert safaris, and stunning modern architecture.",
      price: "$1,800",
      duration: "5 Days / 4 Nights",
    },
  ];

  return (
    <div className="w-full px-6 py-12 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        International Travel Packages
      </motion.h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="rounded-lg shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-md mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
            style={{ minHeight: "420px" }} // optional fixed min height to make cards taller
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src={pkg.img}
                alt={pkg.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">{pkg.name}</h3>
              <p className="text-gray-700 mb-4">{pkg.description}</p>
              <div className="flex justify-between items-center text-indigo-600 font-semibold text-lg">
                <span>{pkg.duration}</span>
                <span>{pkg.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default InternationalPackage;


