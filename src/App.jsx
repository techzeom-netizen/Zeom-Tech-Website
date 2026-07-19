import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import Footer from './components/layout/Footer';
import ContactUs from './components/common/ContactUs';
import TechWeLove from './components/sections/TechWeLove';
import NotFound from './components/common/NotFound'; // Import the 404 component
import AboutUs from './components/sections/AboutUs';
import Discover from './components/sections/Discover';
import HelpWidget from './components/common/HelpWidget';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <header className='fixed top-0 left-0 w-full z-[999] bg-white shadow-md border-b border-blue-gray-100'>
          <Navbar />
        </header>

        <main className="pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/techwelove" element={<TechWeLove />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="*" element={<NotFound />} /> {/* 404 route */}
          </Routes>
        </main>
        <Footer />
        <div className='z-999'>
        <HelpWidget />
        </div>
      </div>
    </Router>
  );
}

export default App;
