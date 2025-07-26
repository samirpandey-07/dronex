import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"  // ✅ Added ID for anchor navigation
      className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We'd love to hear from you! Reach out to us with any questions or collaboration ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <Mail className="mx-auto mb-4 h-10 w-10 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
            <a
              href="mailto:info@dronex.club"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              aria-label="Email DroneX"
            >
              info@dronex.club
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <Phone className="mx-auto mb-4 h-10 w-10 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Phone</h3>
            <a
              href="tel:+918102492197"
              className="text-green-600 dark:text-green-400 hover:underline"
              aria-label="Call DroneX"
            >
              +91 81024 92197
            </a>
          </div>

          {/* Address */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
            <MapPin className="mx-auto mb-4 h-10 w-10 text-red-600" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Shivalik College of Engineering, Shimla Bypass Road, Dehradun, Uttarakhand – 248197, India
            </p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="mb-12">
          <iframe
            title="DroneX Club Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.973987107173!2d77.95205521543829!3d30.290844810794396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929b4ed3b7b89%3A0x293a6e4220c7f1f6!2sShivalik%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1656251234567"
            width="100%"
            height="450"
            className="rounded-2xl border-none shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        {/* Socials */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/dronexclub"
            aria-label="Instagram"
            className="text-gray-500 hover:text-pink-600 dark:hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://twitter.com/dronexclub"
            aria-label="Twitter"
            className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com/company/dronexclub"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-blue-800 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
