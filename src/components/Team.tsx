import React from 'react';
import { Linkedin } from 'lucide-react';
import { TeamMember } from '../types';

const Team: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Alex Chen',
      role: 'President & Lead Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/alexchen',
      bio: 'Aerospace Engineering senior with expertise in flight control systems and autonomous navigation.',
    },
    {
      id: 2,
      name: 'Sarah Kim',
      role: 'VP Technology',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/sarahkim',
      bio: 'Computer Science major specializing in AI/ML applications for drone swarm coordination.',
    },
    {
      id: 3,
      name: 'Marcus Rodriguez',
      role: 'Competition Team Lead',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/marcusrodriguez',
      bio: 'Mechanical Engineering student with a passion for drone racing and precision flight maneuvers.',
    },
    {
      id: 4,
      name: 'Emily Watson',
      role: 'VP Operations',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/emilywatson',
      bio: 'Business Administration major focused on drone industry applications and club logistics.',
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Hardware Director',
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/davidpark',
      bio: 'Electrical Engineering student with expertise in PCB design and sensor integration.',
    },
    {
      id: 6,
      name: 'Jessica Liu',
      role: 'Media & Outreach',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://linkedin.com/in/jessicaliu',
      bio: 'Communications major handling social media, events, and partnership development.',
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The passionate leaders driving DroneX forward, combining diverse expertise 
            to push the boundaries of what's possible with drone technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;