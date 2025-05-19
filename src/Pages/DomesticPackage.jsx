import React from "react";
import { motion } from "framer-motion";

// Sample Images (replace with your own images)
import delhi from "../assets/delhi.jpg";
import kerala from "../assets/kerla.webp";
import rishikesh from "../assets/vanarsh.jpg";
import mumbai from "../assets/mumbai.webp";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const DomesticPackage = () => {
  const packages = [
    {
      name: "Delhi Heritage Tour",
      img: delhi,
      description:
        "Explore the rich history and vibrant culture of India's capital city.",
      price: "₹15,000",
      duration: "3 Days / 2 Nights",
    },
    {
      name: "Kerala Backwaters",
      img: kerala,
      description:
        "Relax and rejuvenate amidst the serene backwaters of Kerala with houseboat stays.",
      price: "₹25,000",
      duration: "4 Days / 3 Nights",
    },
    {
      name: "Rishikesh Adventure",
      img: rishikesh,
      description:
        "Experience thrilling river rafting, yoga, and spiritual vibes in Rishikesh.",
      price: "₹12,000",
      duration: "2 Days / 1 Night",
    },
    {
      name: "Mumbai City Lights",
      img: mumbai,
      description:
        "Discover the fast-paced life, iconic landmarks, and nightlife of Mumbai.",
      price: "₹18,000",
      duration: "3 Days / 2 Nights",
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
        Domestic Travel Packages
      </motion.h1>

      {/* 👇 2 or 3 columns max to allow larger cards */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl shadow-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer max-w-lg mx-auto"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
            style={{ minHeight: "450px" }}
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
              <div className="flex justify-between items-center text-indigo-600 font-bold text-lg">
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

export default DomesticPackage;
