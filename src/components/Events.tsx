// src/components/Events.tsx
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types';

const events: Event[] = [
  {
    id: 1,
    title: 'Beginner Drone Assembly Workshop',
    date: '2024-08-15',
    location: 'Innovation Hub, Block C',
    description: 'Kickstart your drone journey with our hands-on workshop covering basic assembly, components, and safety protocols. No prior experience needed!',
    registrationLink: '#register',
    image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Line Follower Drone Challenge',
    date: '2024-09-05',
    location: 'College Auditorium',
    description: 'Put your drone skills to the test in a fun competition focused on line following and basic autonomous navigation.',
    registrationLink: '#register',
    image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Talk Session: Careers in Drones & Robotics',
    date: '2024-09-18',
    location: 'Seminar Hall, Block A',
    description: 'Join us for an interactive talk with industry professionals exploring career paths in drone technology, AI, and robotics.',
    registrationLink: '#register',
    image: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 4,
    title: 'Tech Fest Drone Demo & Display',
    date: '2024-10-10',
    location: 'Main Ground - Shivalik Campus',
    description: 'Experience our drones in action as the DroneX Club showcases flight demos, tech models, and innovations during the college tech fest.',
    registrationLink: '#register',
    image: 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const formatDate = (dateStr: string) => {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateStr));
};

const Events: React.FC = () => {
  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Events & Workshops
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Participate in hands-on workshops, fun challenges, and expert sessions designed to grow your drone knowledge step by step.
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
                  <span>Register Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to stay updated on all our events?
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
