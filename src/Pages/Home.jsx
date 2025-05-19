// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { motion } from "framer-motion";

// // Carousel images (replace with real image imports)
// import img1 from "../assets/jaipurpic.jpg";
// import img2 from "../assets/taj.jpg";
// import img3 from "../assets/dubai.jpg";
// import img4 from "../assets/sighapure.jpg";

// // Destination images (replace with real image imports)
// import paris from "../assets/paris.jpeg";
// import rome from "../assets/rome.jpeg";
// import bangkok from "../assets/bangkok.jpg";
// import dubai from "../assets/dubai.jpg";
// import jaipur from "../assets/jaipurpic.jpg";
// import goa from "../assets/goa.jpg";
// import manali from "../assets/manali.jpg";
// import varanasi from "../assets/vanarsh.jpg";

// // Framer Motion Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 }
// };

// const zoomIn = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1 }
// };

// const Home = () => {
//   const images = [img1, img2, img3, img4];
//   const prevButtonRef = useRef(null);
//   const nextButtonRef = useRef(null);

//   const internationalDestinations = [
//     { name: "Paris", img: paris },
//     { name: "Rome", img: rome },
//     { name: "Bangkok", img: bangkok },
//     { name: "Dubai", img: dubai },
//   ];

//   const indiaDestinations = [
//     { name: "Jaipur", img: jaipur },
//     { name: "Goa", img: goa },
//     { name: "Manali", img: manali },
//     { name: "Varanasi", img: varanasi },
//   ];

//   return (
//     <div className="w-full">
//       {/* Hero Carousel */}
      
//       <div className="relative">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation={{
//             prevEl: prevButtonRef.current,
//             nextEl: nextButtonRef.current,
//           }}
//           pagination={{ clickable: true }}
//           className="w-full max-h-[700px]"
//         >
//           {images.map((src, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative">
//                 <img
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-screen sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-top"
//                 />
//                 {/* ⭐ Contact Us Button Overlay */}
//                 <div className="absolute inset-0 flex items-center justify-center flex-col">
//                 <h1 className="font-bold text-white text-5xl drop-shadow-md pb-3">Welcome to the ExploreWorld</h1>
//                   <Link
//                     to={"/contact"}
//                     className="bg-white/80 hover:bg-white text-black font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-lg md:text-xl"
//                   >
//                     Contact Us
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <div
//           ref={prevButtonRef}
//           className="cursor-pointer absolute left-5 top-1/2 transform -translate-y-1/2 z-10 text-3xl font-bold text-white p-2"
//         >
//           &lt;
//         </div>
//         <div
//           ref={nextButtonRef}
//           className="cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 z-10 text-3xl font-bold text-white p-2"
//         >
//           &gt;
//         </div>
//       </div>


//    {/* Our Services Section */}
// <section className="px-6 py-12 bg-gray-100">
//   <motion.h2
//     className="text-3xl font-bold text-center mb-8"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//     transition={{ duration: 0.5 }}
//   >
//     Our Services
//   </motion.h2>

//   <div className="grid gap-6 md:grid-cols-3">
//     {[
//       {
//         title: "Custom Tour Packages",
//         desc: "We offer tailored packages to fit your needs and budget, for every destination.",
//       },
//       {
//         title: "Hotel Bookings",
//         desc: "Best deals on hotels across the globe with verified guest ratings.",
//       },
//       {
//         title: "24/7 Support",
//         desc: "We provide round-the-clock support for all your travel queries and emergencies.",
//       },
//     ].map((service, index) => (
//       <motion.div
//         key={index}
//         className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300"
//         variants={fadeInUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         whileHover={{ scale: 1.05 }}
//         transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
//       >
//         <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//         <p className="text-gray-600">{service.desc}</p>
//       </motion.div>
//     ))}
//   </div>
// </section>

// {/* Popular Destinations */}
// <section className="px-6 py-12 bg-white">
//   <motion.h2
//     className="text-3xl font-bold mb-8 text-center"
//     variants={fadeInUp}
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//   >
//     Popular Destinations
//   </motion.h2>

//   {/* International */}
//   <motion.div
//     className="mb-10"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//   >
//     <h3 className="text-2xl font-semibold mb-4">🌏 International</h3>
//     <div className="grid gap-6 md:grid-cols-4">
//       {internationalDestinations.map((place, index) => (
//         <motion.div
//           key={index}
//           className="rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
//           variants={zoomIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
//         >
//           <img src={place.img} alt={place.name} className="w-full h-40 object-cover" />
//           <div className="p-4 text-center font-medium">{place.name}</div>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>

//   {/* India */}
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={fadeInUp}
//   >
//     <h3 className="text-2xl font-semibold mb-4">🇮🇳 India</h3>
//     <div className="grid gap-6 md:grid-cols-4">
//       {indiaDestinations.map((place, index) => (
//         <motion.div
//           key={index}
//           className="rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
//           variants={zoomIn}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.05 }}
//           transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
//         >
//           <img src={place.img} alt={place.name} className="w-full h-40 object-cover" />
//           <div className="p-4 text-center font-medium">{place.name}</div>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>

//     </div>
//   );
// };

// export default Home;

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

// Carousel images (replace with real image imports)
import img1 from "../assets/jaipurpic.jpg";
import img2 from "../assets/taj.jpg";
import img3 from "../assets/dubai.jpg";
import img4 from "../assets/sighapure.jpg";

// Destination images (replace with real image imports)
import paris from "../assets/paris.jpeg";
import rome from "../assets/rome.jpeg";
import bangkok from "../assets/bangkok.jpg";
import dubai from "../assets/dubai.jpg";
import jaipur from "../assets/jaipurpic.jpg";
import goa from "../assets/goa.jpg";
import manali from "../assets/manali.jpg";
import varanasi from "../assets/vanarsh.jpg";

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Home = () => {
  const images = [img1, img2, img3, img4];
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const internationalDestinations = [
    { name: "Paris", img: paris },
    { name: "Rome", img: rome },
    { name: "Bangkok", img: bangkok },
    { name: "Dubai", img: dubai },
  ];

  const indiaDestinations = [
    { name: "Jaipur", img: jaipur },
    { name: "Goa", img: goa },
    { name: "Manali", img: manali },
    { name: "Varanasi", img: varanasi },
  ];

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          pagination={{ clickable: true }}
          className="w-full max-h-[800px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-screen sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <h1 className="font-bold text-white text-5xl drop-shadow-md pb-3">
                    Welcome to the ExploreWorld
                  </h1>
                  <Link
                    to={"/contact"}
                    className="bg-white/80 hover:bg-white text-black font-bold px-6 py-3 rounded-full shadow-lg transition-all duration-300 text-lg md:text-xl"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevButtonRef}
          className="cursor-pointer absolute left-5 top-1/2 transform -translate-y-1/2 z-10 text-3xl font-bold text-white p-2"
        >
          &lt;
        </div>
        <div
          ref={nextButtonRef}
          className="cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2 z-10 text-3xl font-bold text-white p-2"
        >
          &gt;
        </div>
      </div>

      {/* Our Services Section */}
      <section className="px-8 py-16 bg-gray-100 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Custom Tour Packages",
              desc: "We offer tailored packages to fit your needs and budget, for every destination.",
            },
            {
              title: "Hotel Bookings",
              desc: "Best deals on hotels across the globe with verified guest ratings.",
            },
            {
              title: "24/7 Support",
              desc: "We provide round-the-clock support for all your travel queries and emergencies.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow hover:shadow-2xl transition-shadow transform hover:-translate-y-1 duration-300"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 text-base">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="px-8 py-16 bg-white max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Popular Destinations
        </motion.h2>

        {/* International */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-6">🌏 International</h3>
          <div className="grid gap-8 md:grid-cols-4">
            {internationalDestinations.map((place, index) => (
              <motion.div
                key={index}
                className="rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              >
                <img src={place.img} alt={place.name} className="w-full h-60 object-cover" />
                <div className="p-6 text-center font-medium text-lg">{place.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* India */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold mb-6">🇮🇳 India</h3>
          <div className="grid gap-8 md:grid-cols-4">
            {indiaDestinations.map((place, index) => (
              <motion.div
                key={index}
                className="rounded overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                variants={zoomIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              >
                <img src={place.img} alt={place.name} className="w-full h-60 object-cover" />
                <div className="p-6 text-center font-medium text-lg">{place.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
