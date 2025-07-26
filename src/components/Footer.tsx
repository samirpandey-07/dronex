import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DC</span>
            </div>
            <span className="text-xl font-bold">Drones Club</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Explore the Future of Drone Technology. The premier collegiate drone club 
            pushing the boundaries of aerial technology.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the Drones Club team</span>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            © 2024 Drones Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;