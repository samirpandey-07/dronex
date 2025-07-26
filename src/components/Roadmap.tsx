import React from 'react';
import { Calendar, Wrench, Trophy, Users } from 'lucide-react';
import { RoadmapItem } from '../types';

const Roadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      title: 'Initiation of DroneX Club',
      description: 'Formation of the core team and registration of DroneX as a tech society at Shivalik College of Engineering.',
      date: 'July 2025',
      status: 'completed',
      category: 'development',
    },
    {
      id: 2,
      title: 'Beginner Drone Workshop',
      description: 'Hands-on training session for newcomers to learn the basics of drone assembly and flight control.',
      date: 'August 2025',
      status: 'ongoing',
      category: 'workshop',
    },
    {
      id: 3,
      title: 'DroneX Launch Event',
      description: 'Official launch of DroneX with drone demos, club introduction, and project showcase.',
      date: 'September 2025',
      status: 'planned',
      category: 'event',
    },
    {
      id: 4,
      title: 'Programmable Drone Build',
      description: 'Build a programmable quadcopter from scratch under the mentorship of Er. Ashish Kumar Gupta (ERP HOD).',
      date: 'October 2025',
      status: 'planned',
      category: 'development',
    },
    {
      id: 5,
      title: 'Swarm Flight Demo',
      description: 'Showcase synchronized flying drones in an aerial formation using swarm algorithms.',
      date: 'November 2025',
      status: 'planned',
      category: 'development',
    },
    {
      id: 6,
      title: 'Inter-College Drone Challenge',
      description: 'Host a competition inviting nearby colleges to showcase their drone builds and pilot skills.',
      date: 'December 2025',
      status: 'planned',
      category: 'competition',
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'development': return <Wrench className="w-5 h-5" />;
      case 'workshop': return <Users className="w-5 h-5" />;
      case 'competition': return <Trophy className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'ongoing': return 'bg-blue-500';
      case 'planned': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case 'development':
        return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300';
      case 'workshop':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'competition':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      case 'event':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            DroneX Technical Roadmap
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A strategic blueprint of DroneX to foster innovation, learning, and real-world application of drone technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />

          <div className="space-y-10">
            {roadmapItems.map((item) => (
              <div key={item.id} className="relative flex items-start space-x-6 group">
                {/* Timeline Dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full ${getStatusColor(item.status)} flex-shrink-0 mt-6`}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transform transition group-hover:-translate-y-1">
                  <div className="flex flex-wrap justify-between items-center mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getCategoryStyle(item.category)}`}>
                        {getIcon(item.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase ${
                      item.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : item.status === 'ongoing'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
