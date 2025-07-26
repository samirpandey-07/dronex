import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Precision Flight Training',
      description: 'Members practicing advanced maneuvers in our training facility',
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Racing Competition',
      description: 'DroneX team competing in the regional drone racing championship',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Workshop Session',
      description: 'Hands-on drone assembly workshop for new members',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1475730/pexels-photo-1475730.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Autonomous Testing',
      description: 'Testing our latest autonomous navigation algorithms',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
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
    <section id="gallery" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Capturing moments of innovation, competition, and collaboration 
            from our journey in advancing drone technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedItem(item)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'video' ? (
                  <Play className="w-12 h-12 text-white" />
                ) : (
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">+</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="opacity-90">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;