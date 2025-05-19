import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#3C658C] to-gray-white text-white">
      {/* Upper Div */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-6 py-8 border-b border-white">
        <div>
          <h3 className="text-lg font-bold mb-2 tracking-wide">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline tracking-wide">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 tracking-wide">Domestic Packages</h3>
          <ul>
            <li><a href="#" className="hover:underline">Delhi Tour</a></li>
            <li><a href="#" className="hover:underline">Goa Trip</a></li>
            <li><a href="#" className="hover:underline">Kashmir Tour</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 tracking-wide">International Packages</h3>
          <ul>
            <li><a href="#" className="hover:underline">Thailand</a></li>
            <li><a href="#" className="hover:underline">Dubai</a></li>
            <li><a href="#" className="hover:underline">Europe</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 tracking-wide">Yatra</h3>
          <ul>
            <li><a href="#" className="hover:underline">Chardham</a></li>
            <li><a href="#" className="hover:underline">Vaishno Devi</a></li>
            <li><a href="#" className="hover:underline">Amarnath</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2 ">Contact Us</h3>
          <ul>
            <li>Email: mohasim32283@gmail.com.com</li>
            <li>Phone: +91 9528545024</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* Lower Div with Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm">
        <p className="mb-2 md:mb-0 text-blue-400">© {new Date().getFullYear()} ExploreWorld. All rights reserved.</p>
        <div className="flex space-x-4 text-gray-800 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaXTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
