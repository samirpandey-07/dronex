import React from 'react';
import { Target, Lightbulb, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-blue-600">Dronex Club</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of aerial robotics through hands-on innovation, collaboration, and a drive to lead.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Origin
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Dronex Club was born in 2025 at Shivalik College of Engineering by a group of passionate technophiles determined to create a dedicated ecosystem for drone innovation on campus.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Starting with a vision to build programmable quadcopters and compete at national levels, the club quickly grew into a dynamic platform for students from multiple disciplines — CSE, Mechanical, Electronics — working together on real-world UAV systems.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Drone in flight"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-600 text-white text-2xl font-bold rounded-2xl flex items-center justify-center shadow-md">
              150+
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Mission
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To empower students in building and programming drones, solving real-world challenges through interdisciplinary teamwork and competitive exposure.
            </p>
          </div>

          {/* Vision */}
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Vision
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              To become a nationally recognized student drone club, known for innovative hardware, aerial intelligence, and preparing the next generation of UAV engineers.
            </p>
          </div>

          {/* Values */}
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition duration-300">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Our Values
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Curiosity. Precision. Teamwork. Safety. A culture of hands-on learning and ethical innovation fuels our growth and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
