import React from 'react';
import samirPic from '../assets/samirpic.jpg';
import sonuPic from '../assets/sonupic.jpg';
import shreshthPic from '../assets/shreshthpic.jpg';
import sauravPic from '../assets/sauravpic.jpg';
import tabassumPic from '../assets/tabassum.jpg';
import khushiPic from '../assets/khushipic.jpg';
import shubhankarPic from '../assets/shubhankarpic.jpg';
import shubhamPic from '../assets/shubhampic.jpg';
import riteshPic from '../assets/riteshpic.jpg';
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
  },{
    name: 'Ritesh Kumar',
    role: 'PR & Media Head',
    bio: 'Handles outreach, branding, and public communications.',
    image: riteshPic,
    email: 'riteshk2kushwaha@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ritesh-kumar-7b85681b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    name: 'Saurav Kumar',
    role: 'Training & Workshop Head',
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
    <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 tracking-tight">Meet the Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mt-2 text-center">{member.bio}</p>
              <div className="mt-4 flex gap-4">
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    title="Email"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                )}
                {member.linkedin && (
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 transition-colors"
                    title="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mentors Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Coordinators & Mentors</h3>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {mentors.map((mentor, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
                  loading="lazy"
                />
                <h4 className="text-xl font-semibold text-gray-800">{mentor.name}</h4>
                <p className="text-sm font-medium bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
                  {mentor.role}
                </p>
                <p className="text-gray-600 text-sm mt-2 text-center">{mentor.bio}</p>
                {mentor.email && (
                  <a 
                    href={`mailto:${mentor.email}`} 
                    className="mt-4 text-sm text-blue-600 hover:underline flex items-center justify-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {mentor.email}
                  </a>
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