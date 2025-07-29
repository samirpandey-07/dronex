import React, { useState } from 'react';
import { X, Mail, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '../types';
import img1 from '../assets/gallery-1.webp';
import img2 from '../assets/gallery-2.webp';
import img3 from '../assets/gallery-3.webp';
import img4 from '../assets/gallery-4.jpg';
import img5 from '../assets/gallery-5.jpg';
import img6 from '../assets/gallery-6.jpg';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: img1,
      title: 'Drone Orientation',
      description: 'First club meetup discussing drone basics and team formation.',
    },
    {
      id: 2,
      type: 'image',
      src: img2,
      title: 'Intro to Components',
      description: 'Learning about ESCs, propellers, and flight controllers hands-on.',
    },
    {
      id: 3,
      type: 'image',
      src: img3,
      title: 'Soldering Workshop',
      description: 'First DIY soldering session for assembling basic drone circuits.',
    },
    {
      id: 4,
      type: 'image',
      src: img4,
      title: 'Flight Practice',
      description: 'Initial outdoor flight testing with basic drones.',
    },
    {
      id: 5,
      type: 'image',
      src: img5,
      title: 'Idea Discussion',
      description: 'Brainstorming sessions about hybrid drone possibilities.',
    },
    {
      id: 6,
      type: 'image',
      src: img6,
      title: 'Team Bonding',
      description: 'Enjoying the journey as a newly formed technical club.',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Glimpses of our DroneX Club’s initial steps — learning, exploring, and building together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-2xl">+</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-screen overflow-y-auto rounded-lg bg-gray-900 p-6 shadow-2xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-white hover:text-red-400"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  loading="lazy"
                  className="w-full max-h-[70vh] object-contain rounded-md mb-4"
                />
                <div className="text-white space-y-2">
                  <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                  <p className="text-gray-300">{selectedItem.description}</p>
                  <div className="flex gap-4 pt-4">
                    <a
                      href="mailto:pandeysamir@gmail.com"
                      className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                      <Mail className="w-5 h-5" /> pandeysamir@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/your-linkedin-id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                      <Linkedin className="w-5 h-5" /> LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
