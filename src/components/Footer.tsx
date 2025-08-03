import React from 'react';
import logo from './logo.jpg';
import { Instagram, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Logo + Club Name */}
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src={logo} // Ensure this file is in the public folder
              alt="DroneX Logo"
              className="w-10 h-10 object-contain rounded-md shadow-md"
            />
            <span className="text-2xl font-bold tracking-wide">DroneX</span>
          </div>

          {/* Club Tagline */}
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Explore the Future of Drone Technology. DroneX is the premier collegiate drone club based at Shivalik College, Dehradun — pushing the boundaries of aerial innovation.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://www.instagram.com/droneclubshivalik?igsh=MWkwaDVsdXBoeTJ3ag=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:drones@shivalivakcollege.edu.in"
              className="hover:text-red-400 transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Heart + Credits */}
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the DroneX Team</span>
          </div>

          {/* Contact Info */}
          <p className="text-gray-500 text-sm mt-2">📍 Shivalik College, Dehradun</p>
          <p className="text-gray-500 text-sm">📞 +91 8102492197</p>

          {/* Copyright */}
          <p className="text-gray-600 text-xs mt-4">© 2025 DroneX Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
