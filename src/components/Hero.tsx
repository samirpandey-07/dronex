import React from "react";
import heroImg from "../assets/hero-bg.jpg"; // change path as per your project

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroImg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
          DroneX Club
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium max-w-2xl text-gray-200">
          Empowering Future with Drones. Explore, build, and fly with us.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Explore More
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
            Join the Club
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400 italic">
          Registration not started yet
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
