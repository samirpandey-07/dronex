import React from 'react';
import { Calendar, Wrench, Trophy, Users } from 'lucide-react';
import { RoadmapItem } from '../types';

const Roadmap: React.FC = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      id: 1,
      title: 'Autonomous Navigation System',
      description: 'Develop advanced AI-powered navigation algorithms for complex environments',
      date: 'Q1 2024',
      status: 'completed',
      category: 'development',
    },
    {
      id: 2,
      title: 'Winter Workshop Series',
      description: 'Weekly hands-on workshops covering drone assembly, programming, and flight training',
      date: 'Feb 2024',
      status: 'ongoing',
      category: 'workshop',
    },
    {
      id: 3,
      title: 'Regional Drone Racing Championship',
      description: 'Compete in the annual collegiate drone racing competition',
      date: 'Mar 2024',
      status: 'planned',
      category: 'competition',
    },
    {
      id: 4,
      title: 'Swarm Intelligence Project',
      description: 'Multi-drone coordination system for synchronized flight patterns',
      date: 'Q2 2024',
      status: 'planned',
      category: 'development',
    },
    {
      id: 5,
      title: 'Industry Partnership Program',
      description: 'Collaborate with leading drone manufacturers on real-world projects',
      date: 'Apr 2024',
      status: 'planned',
      category: 'workshop',
    },
    {
      id: 6,
      title: 'National Collegiate Drone Competition',
      description: 'Represent our university at the premier national drone competition',
      date: 'May 2024',
      status: 'planned',
      category: 'competition',
    },
  ];

  const getIcon = (category: string) => {
    switch (category) {
      case 'development':
        return <Wrench className="w-5 h-5" />;
      case 'workshop':
        return <Users className="w-5 h-5" />;
      case 'competition':
        return <Trophy className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'ongoing':
        return 'bg-blue-500';
      case 'planned':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development':
        return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300';
      case 'workshop':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'competition':
        return 'text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our strategic plan for advancing drone technology through development projects, 
            educational workshops, and competitive challenges.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600" />

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex items-start space-x-8 group"
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full ${getStatusColor(item.status)} flex-shrink-0 mt-6`}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`p-2 rounded-lg ${getCategoryColor(item.category)}`}>
                        {getIcon(item.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.date}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
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