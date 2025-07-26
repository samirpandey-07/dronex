import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Event } from '../types';

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Drone Racing Workshop',
      date: 'March 15, 2024',
      location: 'Engineering Building, Room 204',
      description: 'Learn the fundamentals of FPV drone racing, from building to flying. All skill levels welcome!',
      registrationLink: '#register',
      image: 'https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      title: 'Regional Competition Qualifier',
      date: 'March 28, 2024',
      location: 'University Sports Complex',
      description: 'Compete for a spot on our championship team. Categories for both beginners and advanced pilots.',
      registrationLink: '#register',
      image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      title: 'AI & Autonomous Systems Seminar',
      date: 'April 10, 2024',
      location: 'Virtual Event',
      description: 'Industry experts discuss the latest in autonomous drone technology and career opportunities.',
      registrationLink: '#register',
      image: 'https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      title: 'National Collegiate Championship',
      date: 'May 18-20, 2024',
      location: 'Las Vegas, Nevada',
      description: 'The premier collegiate drone competition featuring racing, freestyle, and technical challenges.',
      registrationLink: '#register',
      image: 'https://images.pexels.com/photos/724994/pexels-photo-724994.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Events & Competitions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for workshops, competitions, and networking events that will 
            take your drone skills to the next level.
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
                  alt={event.title}
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
                    <span>{event.date}</span>
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
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;