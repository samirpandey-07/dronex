import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {/* Card */}
          {[
            {
              icon: <Mail className="text-white w-6 h-6" />,
              title: "Email",
              content: (
                <a
                  href="mailto:drones@shivalikcollege.edu.in"
                  className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  drones@shivalikcollege.edu.in
                </a>
              ),
              bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
            },
            {
              icon: <Phone className="text-white w-6 h-6" />,
              title: "Phone",
              content: (
                <a
                  href="tel:+918102492197"
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  +91 81024 92197
                </a>
              ),
              bg: "bg-gradient-to-br from-green-500 to-emerald-600",
            },
            {
              icon: <MapPin className="text-white w-6 h-6" />,
              title: "Address",
              content: (
                <p className="text-gray-700 dark:text-gray-300">
                  Shivalik College of Engineering,<br />
                  Shimla Bypass Road, Dehradun,<br />
                  Uttarakhand – 248197, India
                </p>
              ),
              bg: "bg-gradient-to-br from-red-500 to-pink-600",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-3xl shadow-xl p-6 text-center transition hover:scale-[1.02]"
            >
              <div
                className={`${card.bg} rounded-full p-3 mx-auto mb-4 w-12 h-12 flex items-center justify-center shadow-md`}
              >
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {card.title}
              </h3>
              <div className="text-base">{card.content}</div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-16">
          <iframe
            title="DroneX Club Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1005461746915!2d77.86815819999999!3d30.336507899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2a7095b0a67b%3A0xc2f54efbde26299!2sShivalik%20College%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1722249592216!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-0 w-full"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

        {/* Social Links */}
<div className="flex justify-center gap-6">
  {[
    {
      href: "https://www.instagram.com/droneclubshivalik?igsh=MWkwaDVsdXBoeTJ3ag==",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:text-pink-500",
    },
    {
      href: "mailto:drones@shivalikcollege.edu.in",
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-red-600",
    },
    {
      href: "https://linkedin.com/company/dronexclub",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:text-blue-700",
    },
  ].map((social, i) => (
    <a
      key={i}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-500 transition ${social.color}`}
    >
      {social.icon}
    </a>
  ))}
</div>

      </div>
    </section>
  );
};

export default Contact;

