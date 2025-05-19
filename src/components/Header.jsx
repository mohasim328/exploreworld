import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import trlogo from '../assets/trlogo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 bg-gradient-to-b from-[#3C658C] to-white">
      <nav className="container mx-auto flex items-center justify-end md:justify-center px-4 py-3 h-20">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 absolute left-2 top-3"><img src={trlogo} alt="logo" className='rounded-full h-20 border border-blue-800'/></Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-bold relative items-center">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>

          {/* Domestic */}
          <li className="relative">
            <button onClick={() => toggleDropdown('domestic')} className="flex items-center gap-1 hover:text-blue-600">
              Domestic <FaCaretDown />
            </button>
            {openDropdown === 'domestic' && (
              <ul className="absolute bg-white shadow mt-2 p-2 rounded w-40 space-y-2 z-10">
                <li><Link to="/domestic/north" className="block hover:text-blue-600">North</Link></li>
                <li><Link to="/domestic/south" className="block hover:text-blue-600">South</Link></li>
                <li><Link to="/domestic/east" className="block hover:text-blue-600">East</Link></li>
                <li><Link to="/domestic/west" className="block hover:text-blue-600">West</Link></li>
              </ul>
            )}
          </li>

          {/* International */}
          <li className="relative">
            <button onClick={() => toggleDropdown('international')} className="flex items-center gap-1 hover:text-blue-600">
              International <FaCaretDown />
            </button>
            {openDropdown === 'international' && (
              <ul className="absolute bg-white shadow mt-2 p-2 rounded w-48 space-y-2 z-10">
                <li><Link to="/international/thailand" className="block hover:text-blue-600">Thailand</Link></li>
                <li><Link to="/international/belgium" className="block hover:text-blue-600">Belgium</Link></li>
                <li><Link to="/international/canada" className="block hover:text-blue-600">Canada</Link></li>
                <li><Link to="/international/dubai" className="block hover:text-blue-600">Dubai</Link></li>
                <li><Link to="/international/singapore" className="block hover:text-blue-600">Singapore</Link></li>
                <li><Link to="/international/germany" className="block hover:text-blue-600">Germany</Link></li>
                <li><Link to="/international/maldives" className="block hover:text-blue-600">Maldives</Link></li>
                <li><Link to="/international/iceland" className="block hover:text-blue-600">Iceland</Link></li>
                <li><Link to="/international/malaysia" className="block hover:text-blue-600">Malaysia</Link></li>
                <li><Link to="/international/switzerland" className="block hover:text-blue-600">Switzerland</Link></li>
                <li><Link to="/international/nepal" className="block hover:text-blue-600">Nepal</Link></li>
                <li><Link to="/international/more" className="block text-blue-600 font-semibold">View More Place</Link></li>
              </ul>
            )}
          </li>

          {/* Place */}
          <li className="relative">
            <button onClick={() => toggleDropdown('place')} className="flex items-center gap-1 hover:text-blue-600">
              Place <FaCaretDown />
            </button>
            {openDropdown === 'place' && (
              <ul className="absolute bg-white shadow mt-2 p-2 rounded w-40 space-y-2 z-10">
                <li><Link to="/place/destinations" className="block hover:text-blue-600">Destinations</Link></li>
                <li><Link to="/place/gallery" className="block hover:text-blue-600">Gallery</Link></li>
                <li><Link to="/place/hotels" className="block hover:text-blue-600">Hotels</Link></li>
              </ul>
            )}
          </li>

          {/* Package */}
          <li className="relative">
            <button onClick={() => toggleDropdown('package')} className="flex items-center gap-1 hover:text-blue-600">
              Package <FaCaretDown />
            </button>
            {openDropdown === 'package' && (
              <ul className="absolute bg-white shadow mt-2 p-2 rounded w-40 space-y-2 z-10">
                <li><Link to="/package/international" className="block hover:text-blue-600">International</Link></li>
                <li><Link to="/package/domestic" className="block hover:text-blue-600">Domestic</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>

          {/* Call & Pay Now Buttons */}
          <li>
            <a href="tel:+911234567890" className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">Call Now</a>
          </li>
          <li>
            <Link to="/pay" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition">Pay Now</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden block text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <IoMdClose size={24} /> : <MdMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700 font-bold">
            <li><Link to="/" className="block">Home</Link></li>
            <li><Link to="/about" className="block">About</Link></li>

            <details>
              <summary className="cursor-pointer">Domestic</summary>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/domestic/north" className="block">North</Link></li>
                <li><Link to="/domestic/south" className="block">South</Link></li>
                <li><Link to="/domestic/east" className="block">East</Link></li>
                <li><Link to="/domestic/west" className="block">West</Link></li>
              </ul>
            </details>

            <details>
              <summary className="cursor-pointer">International</summary>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/international/thailand" className="block">Thailand</Link></li>
                <li><Link to="/international/belgium" className="block">Belgium</Link></li>
                <li><Link to="/international/canada" className="block">Canada</Link></li>
                <li><Link to="/international/dubai" className="block">Dubai</Link></li>
                <li><Link to="/international/singapore" className="block">Singapore</Link></li>
                <li><Link to="/international/germany" className="block">Germany</Link></li>
                <li><Link to="/international/maldives" className="block">Maldives</Link></li>
                <li><Link to="/international/iceland" className="block">Iceland</Link></li>
                <li><Link to="/international/malaysia" className="block">Malaysia</Link></li>
                <li><Link to="/international/switzerland" className="block">Switzerland</Link></li>
                <li><Link to="/international/nepal" className="block">Nepal</Link></li>
                <li><Link to="/international/more" className="block text-blue-600 font-semibold">View More Place</Link></li>
              </ul>
            </details>

            <details>
              <summary className="cursor-pointer">Place</summary>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/place/destinations" className="block">Destinations</Link></li>
                <li><Link to="/place/gallery" className="block">Gallery</Link></li>
                <li><Link to="/place/hotels" className="block">Hotels</Link></li>
              </ul>
            </details>

            <details>
              <summary className="cursor-pointer">Package</summary>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/package/international" className="block">International</Link></li>
                <li><Link to="/package/domestic" className="block">Domestic</Link></li>
              </ul>
            </details>

            <li><Link to="/contact" className="block">Contact Us</Link></li>

            {/* Mobile Call & Pay Buttons */}
            <li>
              <a href="tel:+919528545024" className="block bg-green-600 text-white px-3 py-2 rounded text-center hover:bg-green-700 transition">Call Now</a>
            </li>
            <li>
              <Link to="/pay" className="block bg-blue-600 text-white px-3 py-2 rounded text-center hover:bg-blue-700 transition">Pay Now</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
