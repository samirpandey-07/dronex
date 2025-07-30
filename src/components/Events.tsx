// src/components/Events.tsx
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: 1,
    title: 'Drone Basics Bootcamp',
    date: '',
    location: 'Innovation Hub, Block C',
    description: 'Beginner-friendly session on drone fundamentals: design, components, and safety. Perfect for curious minds!',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Line Tracking Drone Challenge',
    date: '',
    location: 'College Auditorium',
    description: 'Test your drone’s precision by navigating through a custom-built track using line-following logic. Teams encouraged!',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Talk: Future in Drone Tech & Robotics',
    date: '',
    location: 'Seminar Hall, Block A',
    description: 'An exclusive interaction with drone and robotics experts exploring real-world career opportunities and innovations.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Tech Fest DroneX Showcase',
    date: '',
    location: 'Main Ground - Shivalik Campus',
    description: 'Witness DroneX projects in action: stunning flight demos, models, and exciting innovation exhibits at Tech Fest.',
    registrationLink: '#',
    image: 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const formatDate = (dateStr: string) => {
  if (!dateStr) return 'Date to be announced';
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateStr));
};

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Upcoming Events & Workshops
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our curated lineup of technical workshops, challenges, and talks designed to elevate your drone innovation journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={`Event: ${event.title}`}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {event.description}
                </p>
                <a
                  href={event.registrationLink}
                  aria-label={`Register for ${event.title}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  <span>Registration Opening Soon</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to stay informed about DroneX events?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <button
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
              aria-label="Subscribe to email updates"
            >
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
