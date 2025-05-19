// import React from 'react';
// import { motion } from 'framer-motion';

// const About = () => {
//   const features = [
//     {
//       title: 'Expert Guides',
//       desc: 'We collaborate with experienced local guides to offer authentic and insightful adventures.',
//     },
//     {
//       title: 'Custom Itineraries',
//       desc: 'From solo backpackers to family trips, we tailor every journey to your unique style and budget.',
//     },
//     {
//       title: '24/7 Customer Support',
//       desc: 'Our team is available round-the-clock to help with bookings, queries, and last-minute changes.',
//     },
//   ];

//   const team = [
//     {
//       name: 'Aarav Kapoor',
//       role: 'Founder & Explorer-in-Chief',
//       img: 'https://randomuser.me/api/portraits/men/32.jpg',
//     },
//     {
//       name: 'Sana Sharma',
//       role: 'Creative Director',
//       img: 'https://randomuser.me/api/portraits/women/44.jpg',
//     },
//     {
//       name: 'Rohan Mehta',
//       role: 'Lead Travel Consultant',
//       img: 'https://randomuser.me/api/portraits/men/65.jpg',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 px-6 py-16">
//       {/* Hero Section */}
//       <motion.div
//         className="text-center mb-20"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-5xl font-bold text-blue-700 mb-4">About WanderWorld</h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//           Your ultimate travel companion—crafting extraordinary journeys and unlocking the true spirit of exploration.
//         </p>
//       </motion.div>

//       {/* Mission Section */}
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
//         {/* Image */}
//         <motion.img
//           src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
//           alt="Adventure travel"
//           className="w-full md:w-1/2 rounded-2xl shadow-xl"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//         />

//         {/* Text */}
//         <motion.div
//           className="w-full md:w-1/2"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.7 }}
//         >
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
//           <p className="text-gray-600 mb-4">
//             WanderWorld was born from a passion for exploration and a desire to make travel meaningful, immersive, and accessible. 
//             We believe travel should not just be about ticking places off a list, but about connecting with cultures, stories, and people.
//           </p>
//           <p className="text-gray-600">
//             Our vision is to empower travelers to explore the world with confidence and purpose—through personalized experiences, trusted partners, and community-driven recommendations.
//           </p>
//         </motion.div>
//       </div>

//       {/* Features Section */}
//       <motion.div
//         className="max-w-5xl mx-auto mb-24"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, idx) => (
//             <motion.div
//               key={feature.title}
//               className="bg-white p-6 rounded-xl shadow-lg"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Team Section */}
//       <motion.div
//         className="max-w-6xl mx-auto"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Team</h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
//           {team.map((member, idx) => (
//             <motion.div
//               key={member.name}
//               className="bg-white rounded-xl shadow-md p-6 text-center"
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
//               />
//               <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
//               <p className="text-sm text-gray-500">{member.role}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//       {/* Customer Reviews Section */}
// <motion.div
//   className="max-w-6xl mx-auto mt-24"
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.6 }}
//   viewport={{ once: true }}
// >
//   <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Travelers Say</h2>
//   <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//     {[
//       {
//         name: "Emily Rose",
//         review:
//           "WanderWorld made our honeymoon magical! Every detail was perfectly arranged. Highly recommended!",
//         stars: 5,
//         image: "https://randomuser.me/api/portraits/women/68.jpg",
//       },
//       {
//         name: "James Lee",
//         review:
//           "Their local guides were knowledgeable and fun. It felt like an authentic cultural immersion.",
//         stars: 4,
//         image: "https://randomuser.me/api/portraits/men/79.jpg",
//       },
//       {
//         name: "Priya Malhotra",
//         review:
//           "I’ve used many travel services, but WanderWorld’s support and customization were next-level.",
//         stars: 5,
//         image: "https://randomuser.me/api/portraits/women/33.jpg",
//       },
//     ].map((review, idx) => (
//       <motion.div
//         key={idx}
//         className="bg-white shadow-md rounded-xl p-6"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: idx * 0.2 }}
//         viewport={{ once: true }}
//       >
//         <div className="flex items-center gap-4 mb-4">
//           <img
//             src={review.image}
//             alt={review.name}
//             className="w-12 h-12 rounded-full object-cover"
//           />
//           <div>
//             <h4 className="text-md font-semibold text-gray-800">{review.name}</h4>
//             <div className="flex text-yellow-500">
//               {'★'.repeat(review.stars)}
//               {'☆'.repeat(5 - review.stars)}
//             </div>
//           </div>
//         </div>
//         <p className="text-gray-600 text-sm">{review.review}</p>
//       </motion.div>
//     ))}
//   </div>
// </motion.div>

//     </div>
//   );
// };

// export default About;


import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Expert Guides',
      desc: 'We collaborate with experienced local guides to offer authentic and insightful adventures.',
    },
    {
      title: 'Custom Itineraries',
      desc: 'From solo backpackers to family trips, we tailor every journey to your unique style and budget.',
    },
    {
      title: '24/7 Customer Support',
      desc: 'Our team is available round-the-clock to help with bookings, queries, and last-minute changes.',
    },
  ];

  const team = [
    {
      name: 'Brajesh Kumar Jaiswal',
      role: 'CO-FOUNDER',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Preeti',
      role: 'CEO & FOUNDER',
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Saurabh Mahawar',
      role: 'CO-FOUNDER',
      img: 'https://randomuser.me/api/portraits/men/65.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-16">
      {/* Top Image with Quote */}
      <motion.div
        className="mb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1493558103817-58b2924bce98"
          alt="WanderWorld"
          className="w-full h-96 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-6">
            "Travel isn’t always about the destination — it’s about the journey and the stories you collect."
          </h2>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold text-blue-700 mb-4">About WanderWorld</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Your ultimate travel companion—crafting extraordinary journeys and unlocking the true spirit of exploration.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-20">
        <motion.img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Adventure travel"
          className="w-full md:w-1/2 rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
          <p className="text-gray-600 mb-4">
            WanderWorld was born from a passion for exploration and a desire to make travel meaningful, immersive, and accessible. 
            We believe travel should not just be about ticking places off a list, but about connecting with cultures, stories, and people.
          </p>
          <p className="text-gray-600">
            Our vision is to empower travelers to explore the world with confidence and purpose—through personalized experiences, trusted partners, and community-driven recommendations.
          </p>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        className="max-w-5xl mx-auto mb-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-xl shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Customer Reviews Section */}
      <motion.div
        className="max-w-6xl mx-auto mt-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">What Our Travelers Say</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Emily Rose",
              review:
                "WanderWorld made our honeymoon magical! Every detail was perfectly arranged. Highly recommended!",
              stars: 5,
              image: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "James Lee",
              review:
                "Their local guides were knowledgeable and fun. It felt like an authentic cultural immersion.",
              stars: 4,
              image: "https://randomuser.me/api/portraits/men/79.jpg",
            },
            {
              name: "Priya Malhotra",
              review:
                "I’ve used many travel services, but WanderWorld’s support and customization were next-level.",
              stars: 5,
              image: "https://randomuser.me/api/portraits/women/33.jpg",
            },
          ].map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-md rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex text-yellow-500">
                    {'★'.repeat(review.stars)}
                    {'☆'.repeat(5 - review.stars)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;

