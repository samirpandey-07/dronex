import React from 'react';
import samirPic from '../assets/samirpic.jpg';
import sonuPic from '../assets/sonupic.jpg';
import shreshthPic from '../assets/shreshthpic.jpg';
import sauravPic from '../assets/sauravpic.jpg';
import tabassumPic from '../assets/tabassum.jpg';
import khushiPic from '../assets/khushipic.jpg';
import shubhankarPic from '../assets/shubhankarpic.jpg';
import shubhamPic from '../assets/shubhampic.jpg';

import abhishekJhaPic from '../assets/abhishekjha.jpg';
import ashishGuptaPic from '../assets/ashishgupta.jpg';
import abhinavNarainPic from '../assets/abhinavnarain.jpg';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sonu Kumar',
    role: 'President',
    bio: 'Leading the club with vision and energy.',
    image: sonuPic,
    email: 'Sonu9523287513@gmail.com',
    linkedin: 'https://www.linkedin.com/in/sonu-kumar-147881283/',
  },
  {
    name: 'Shreshth Upreti',
    role: 'Vice President',
    bio: 'Strategizing and assisting in operations.',
    image: shreshthPic,
    email: 'Upretishreshth@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shreshth-upreti4747/',
  },
  {
    name: 'Samir Pandey',
    role: 'Treasurer',
    bio: 'Manages club funds and resources.',
    image: samirPic,
    email: 'pamdeysamir@gmail.com',
    linkedin: 'https://www.linkedin.com/in/samirpandey201/',
  },
  {
    name: 'Saurav Kumar',
    role: 'PR & Media Head',
    bio: 'Handles outreach and public image.',
    image: sauravPic,
    email: 'sauravverma523@gmail.com',
    linkedin: 'https://www.linkedin.com/in/saurav-verma-809406329/',
  },
  {
    name: 'Shubham Raj',
    role: 'Technical Head',
    bio: 'Oversees technical development and projects.',
    image: shubhamPic,
    email: 'kundankumardga9097@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shubham-shudhanshu-72b926350/',
  },
  {
    name: 'Khushi Thapliyal',
    role: 'Event Coordinator',
    bio: 'Coordinates workshops and events.',
    image: khushiPic,
    email: 'thapliyalkhushi3@gmail.com',
    linkedin: 'https://linkedin.com/in/khushithapliyal',
  },
  {
    name: 'Tabassum Perveen',
    role: 'Event Coordinator',
    bio: 'Ensures smooth execution of all activities.',
    image: tabassumPic,
    email: 'perveentabassum21@gmail.com',
    linkedin: 'https://www.linkedin.com/in/tabassum-perveen-1b4795355/',
  },
  {
    name: 'Shubhankar Dhara',
    role: 'Mechanical Head',
    bio: 'Expert in drone mechanics and structures.',
    image: shubhankarPic,
    email: 'jh20354060604@gmail.com',
    linkedin: 'https://www.linkedin.com/in/subhankar-dhara-a760a4350/',
  },
];

const mentors: TeamMember[] = [
  {
    name: 'Dr. Abhishek Jha',
    role: 'Club Coordinator',
    bio: 'Guiding and supervising club operations.',
    image: abhishekJhaPic,
    email: 'abhishek.jha@shivalikcollege.edu.in',
  },
  {
    name: 'Mr. Ashish Kumar Gupta',
    role: 'Mentor (Electronics dept.)',
    bio: 'Mentoring drone development and innovation.',
    image: ashishGuptaPic,
    email: 'ashish.gupta@shivalikcollege.edu.in',
  },
  {
    name: 'Mr. Abhinav Narain',
    role: 'Mentor',
    bio: 'Supports with technical and management expertise.',
    image: abhinavNarainPic,
    email: 'Abhinav.srivastava@shivalikcollege.edu.in',
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
              className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-xl transition-transform hover:scale-105 duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2 text-center">{member.bio}</p>
              <div className="mt-2 space-y-1 text-sm text-gray-600">
                {member.email && (
                  <p>
                    📧{' '}
                    <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">
                      {member.email}
                    </a>
                  </p>
                )}
                {member.linkedin && (
                  <p>
                    🔗{' '}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      LinkedIn
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mentors Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Coordinators & Mentors</h3>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {mentors.map((mentor, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {mentor.image && (
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
                  />
                )}
                <h4 className="text-xl font-semibold text-gray-800">{mentor.name}</h4>
                <p className="text-sm text-blue-600 font-medium">{mentor.role}</p>
                <p className="text-gray-500 mt-2 text-sm text-center">{mentor.bio}</p>
                {mentor.email && (
                  <p className="mt-2 text-sm text-gray-600">
                    📧{' '}
                    <a href={`mailto:${mentor.email}`} className="text-blue-500 hover:underline">
                      {mentor.email}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
