import React from "react";
import heroImg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/95" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        {/* Styled Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          <span className="bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Drone
          </span>
          <span className="text-white">X Club</span>
        </h1>

        {/* Tagline */}
        <p className="mt-5 text-lg md:text-2xl font-medium max-w-2xl text-gray-200">
          Empowering the future with drones. Explore, build, and fly with us.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-6 flex-wrap justify-center">
          <a
            href="#about"
            className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 hover:bg-gray-100 transition-transform duration-300"
          >
            Explore More
          </a>
          <a
            href="https://forms.gle/iG6LmZ1JufbFEPCx6"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition-colors duration-300"
          >
            Join the Club
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
