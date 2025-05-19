// import React from "react";
// import { motion } from "framer-motion";
// import chennai from "../assets/chennai.jpg";
// import bengaluru from "../assets/bengaluru.jpg";
// import coorg from "../assets/coorg.jpg";
// import hyderabad from "../assets/hyderabad.jpg";
// import kerala from "../assets/kerla.webp";

// const cities = [
//   {
//     name: "Chennai",
//     image: chennai,
//     description: "A vibrant coastal city known for temples, beaches, and cultural heritage.",
//   },
//   {
//     name: "Bengaluru",
//     image: bengaluru,
//     description: "The Silicon Valley of India with lush parks and a buzzing tech scene.",
//   },
//   {
//     name: "Coorg",
//     image: coorg,
//     description: "A scenic hill station famous for coffee plantations and misty hills.",
//   },
//   {
//     name: "Hyderabad",
//     image: hyderabad,
//     description: "The City of Pearls, famous for historic monuments and delectable cuisine.",
//   },
//   {
//     name: "Kerala",
//     image: kerala,
//     description: "God’s Own Country — renowned for backwaters, beaches, and Ayurvedic retreats.",
//   },
// ];

// const South = () => {
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Top Banner Image with Overlay Text */}
//       <div className="relative w-full h-[80vh] rounded-lg overflow-hidden mb-10 shadow-lg">
//         <img
//           src={kerala} // Change to your preferred South India banner image
//           alt="South India Scenic"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
//             Discover the Beauty of South India
//           </h1>
//         </div>
//       </div>

//       {/* About South India Section with Quote */}
//       <section className="max-w-4xl mx-auto mb-12 text-center px-4">
//         <h2 className="text-3xl font-semibold mb-4 text-gray-800">About South India</h2>
//         <p className="text-gray-700 mb-6">
//           South India is a land of diverse cultures, rich history, and breathtaking landscapes—from serene beaches to lush hills and vibrant cities.
//         </p>
//         <blockquote className="text-xl italic text-green-700 font-semibold border-l-4 border-green-700 pl-4 max-w-xl mx-auto">
//           "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
//         </blockquote>
//       </section>

//       {/* Cities Grid */}
//       <h1 className="text-4xl font-bold text-center mb-10">Top Cities to Visit in South India</h1>
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         {cities.map((city, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//           >
//             <img src={city.image} alt={city.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h2 className="text-2xl font-semibold mb-2">{city.name}</h2>
//               <p className="text-gray-600">{city.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default South;

import React from "react";
import { motion } from "framer-motion";
import chennai from "../assets/chennai.jpg";
import bengaluru from "../assets/bengaluru.jpg";
import coorg from "../assets/coorg.jpg";
import hyderabad from "../assets/hyderabad.jpg";
import kerala from "../assets/kerla.webp";

const cities = [
  {
    name: "Chennai",
    image: chennai,
    description: "A vibrant coastal city known for temples, beaches, and cultural heritage.",
  },
  {
    name: "Bengaluru",
    image: bengaluru,
    description: "The Silicon Valley of India with lush parks and a buzzing tech scene.",
  },
  {
    name: "Coorg",
    image: coorg,
    description: "A scenic hill station famous for coffee plantations and misty hills.",
  },
  {
    name: "Hyderabad",
    image: hyderabad,
    description: "The City of Pearls, famous for historic monuments and delectable cuisine.",
  },
  {
    name: "Kerala",
    image: kerala,
    description: "God’s Own Country — renowned for backwaters, beaches, and Ayurvedic retreats.",
  },
];

const South = () => {
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
          src={kerala}
          alt="South India Scenic"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0  bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <motion.h1
            className="text-white text-4xl md:text-5xl font-bold text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Discover the Beauty of South India
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* About South India Section with Quote */}
      <section className="max-w-4xl mx-auto mb-12 text-center px-4">
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          About South India
        </motion.h2>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          South India is a land of diverse cultures, rich history, and breathtaking landscapes—from serene beaches to lush hills and vibrant cities.
        </motion.p>
        <motion.blockquote
          className="text-xl italic text-green-700 font-semibold border-l-4 border-green-700 pl-4 max-w-xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          "Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta
        </motion.blockquote>
      </section>

      {/* Cities Grid */}
      <h1 className="text-4xl font-bold text-center mb-10">Top Cities to Visit in South India</h1>
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

export default South;
