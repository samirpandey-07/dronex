import React from 'react';
import samirPic from '../assets/samirpic.jpg';
import sonuPic from '../assets/sonupic.jpg';
import shreshthPic from '../assets/shreshthpic.jpg';
import sauravPic from '../assets/sauravpic.jpg';
import tabassumPic from '../assets/tabassum.jpg';
import khushiPic from '../assets/khushipic.jpg';
import shubhankarPic from '../assets/shubhankarpic.jpg';
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sonu Kumar',
    role: 'President',
    bio: 'Leading the club with vision and energy.',
    image: sonuPic,
  },
  {
    name: 'Shreshth Upreti',
    role: 'Vice President',
    bio: 'Strategizing and assisting in operations.',
    image: shreshthPic,
  },
  {
    name: 'Samir Pandey',
    role: 'Treasurer',
    bio: 'Manages club funds and resources.',
    image: samirPic, // Your uploaded passport image
  },
  {
    name: 'Saurav Kumar',
    role: 'PR & Media Head',
    bio: 'Handles outreach and public image.',
    image: sauravPic,
  },
  {
    name: 'Shubham Kumar',
    role: 'Technical Head',
    bio: 'Oversees technical development and projects.',
    image: '/images/shubham.jpg',
  },
  {
    name: 'Khushi Thapliyal',
    role: 'Event Coordinator',
    bio: 'Coordinates workshops and events.',
    image: '/images/khushi.jpg',
  },
  {
    name: 'Tabassum Latif',
    role: 'Event Coordinator',
    bio: 'Ensures smooth execution of all activities.',
    image: tabassumPic,
  },
  {
    name: 'Shubhankar Dhara',
    role: 'Mechanical Head',
    bio: 'Expert in drone mechanics and structures.',
    image: shubhankarPic,
  },
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet the Team</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-xl transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
