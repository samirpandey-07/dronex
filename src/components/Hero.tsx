import React from 'react';
import { ChevronDown } from 'lucide-react';
import backgroundPicture from '../assets/hero-bg.jpg';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="DroneX Hero Section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundPicture})` }}
        aria-hidden="true"
      />

      {/* Optional Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg">
          Welcome to <span className="text-blue-500">DroneX</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-200 font-light tracking-wide drop-shadow-md max-w-4xl mx-auto">
          Igniting Innovation, Building the Future of Drone Technology.
        </p>

        <a
          href="https://forms.gle/iG6LmZ1JufbFEPCx6"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition-transform duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-400/40"
        >
          Join DroneX
        </a>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll to About Section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
