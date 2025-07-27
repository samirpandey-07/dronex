// src/components/FloatingJoinButton.tsx

import React from 'react';
import { Send } from 'lucide-react';

const FloatingJoinButton: React.FC = () => {
  return (
    <a
      href="https://forms.gle/iG6LmZ1JufbFEPCx6"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:bg-blue-700 transition duration-300 z-50"
    >
      <Send className="w-4 h-4" />
      Join DroneX
    </a>
  );
};

export default FloatingJoinButton;
