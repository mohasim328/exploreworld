import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

// Import your page components

import Home from "./Pages/Home";
import About from './Pages/About'
import Contact from "./Pages/Contact";
import Pay from "./Pages/Pay";

// domestic
import North from "./pages/North";
import South from "./pages/South";
import East from "./pages/East";
import West from "./pages/West";

// international

import International from "./pages/International";

// place

import Destinations from './Pages/Destinations'
import Gallery from './Pages/Gallery'
import Hotels from './Pages/Hotels'

// package
import DomesticPackage from "./Pages/DomesticPackage";
import InternationalPackage from "./Pages/InternationalPackage";
import FixedContact from "./components/FixContactDiv";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Domestic Routes */}
          <Route path="/domestic/north" element={<North />} />
          <Route path="/domestic/south" element={<South />} />
          <Route path="/domestic/east" element={<East />} />
          <Route path="/domestic/west" element={<West />} />

          <Route path="/international" element={<International />} />

          {/* Place Routes */}
          <Route path="/place/destinations" element={<Destinations />} />
          <Route path="/place/gallery" element={<Gallery />} />
          <Route path="/place/hotels" element={<Hotels />} />

          {/* Package Routes */}
          <Route path="/package/domestic" element={<DomesticPackage />} />
          <Route path="/package/international" element={<InternationalPackage />} />
          <Route path="/contact" element={<Contact />} />
          {/* {pay} */}
          <Route path="/pay" element={<Pay/>} />

        </Routes>
        <FixedContact/>
      </main>
      <Footer/>
    
    </Router>
  );
};

export default App;
