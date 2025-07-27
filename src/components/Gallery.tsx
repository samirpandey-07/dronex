import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Precision Flight Training',
      description: 'Members practicing advanced maneuvers in our training facility',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Racing Competition',
      description: 'DroneX team competing in the regional drone racing championship',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Workshop Session',
      description: 'Hands-on drone assembly workshop for new members',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Autonomous Testing',
      description: 'Testing our latest autonomous navigation algorithms',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/1475730/pexels-photo-1475730.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Building',
      description: 'Annual team retreat and strategy planning session',
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Innovation Lab',
      description: 'Our state-of-the-art development and testing laboratory',
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
            Capturing moments of innovation, competition, and collaboration from our journey in advancing drone technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-2xl shadow-md cursor-pointer hover:shadow-xl transform transition duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.src}
                alt={item.title}
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
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-4xl w-full max-h-screen overflow-y-auto rounded-lg bg-gray-900 p-6 shadow-2xl">
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
                className="w-full max-h-[70vh] object-contain rounded-md mb-4"
              />
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
