import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ use React Router
import hybridpic from "../assets/hybrid.jpg";
type ProjectProps = {
  title: string;
  description: string;
  extra?: string;
  image: string;
  alt: string;
  link: string;
};

function ProjectCard({ title, description, extra, image, alt, link }: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      id="project"
      className="group bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-xl mb-5 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 rounded-xl"></div>
        <img
          src={image}
          alt={alt}
          className="rounded-xl w-full h-52 object-cover transform transition duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-3 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20">
          <span className="text-xs font-medium text-white bg-blue-600/90 px-2 py-1 rounded-full">
            View Project
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-3 flex-grow">{description}</p>

      {extra && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">{extra}</p>
        </div>
      )}

      {/* ✅ Use React Router Link instead of <a> */}
      <Link
        to={link}
        className={`mt-6 inline-flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
          isHovered
            ? "bg-blue-600 text-white shadow-md"
            : "bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400"
        }`}
      >
        <span>Learn More</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www..org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </Link>
    </div>
  );
}

export default function Project() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: "Drone Drishti",
      description:
        "An AI-powered drone system designed for rapid search and rescue in crowded environments. Uses vision algorithms to instantly locate missing individuals and lost items.",
      extra:
        "Equipped with robust long-range telemetry for real-time data exchange at massive events.",
      image:
        "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1170&q=80",
      alt: "Drone Drishti demo",
      link: "/projects/drishti", // ✅ route path
    },
    {
      title: "Hybrid Drone",
      description:
        "A quadcopter drone engineered to operate in the air, on water, and underwater for rescue and exploration.",
      extra: "Perfect for flood zones, aquatic surveys, and dynamic rescue scenarios.",
       image: hybridpic,
      alt: "Hybrid Drone demo",
      link: "/projects/hybrid", // ✅ route path
    },
  ];

  return (
    <section
      id="project"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-700 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our <span className="text-blue-600 dark:text-blue-400">Innovative</span> Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            Explore the groundbreaking innovations we are developing at DroneX to revolutionize aerial technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-700 delay-${index * 100} transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
