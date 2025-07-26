import React from 'react';
import { Target, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About the Drones Club
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Founded by passionate students who believe the future is autonomous, 
            the Drones Club is more than a club—it's a launchpad for tomorrow's innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              The Drones Club was born in 2023 when a group of engineering students realized 
              that traditional education wasn't keeping pace with the rapid evolution 
              of drone technology. We set out to create a space where theory meets 
              practice, where ideas take flight.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, we're a thriving community of over 150 members from diverse 
              disciplines—engineering, computer science, business, and design—all 
              united by our passion for unmanned aerial systems and their potential 
              to revolutionize industries.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Drone technology"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl flex items-center justify-center">
              <span className="text-white text-2xl font-bold">150+</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To advance drone technology through hands-on learning, innovative 
              research, and competitive excellence while fostering the next 
              generation of aerospace leaders.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To be the premier collegiate drone program, known for producing 
              industry-ready professionals and groundbreaking innovations in 
              autonomous systems.
            </p>
          </div>

          <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Innovation, collaboration, excellence, and safety guide everything 
              we do. We believe in pushing boundaries while maintaining the 
              highest standards of responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;