import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "MASTERJERB BIRUNGI PAUL",
    role: "CHAIRMAN- Gm Electrics ",
    image: "/team/chairman.png",
    description: "With over 15 years of experience in electrical engineering, Masterjerb leads our team with expertise in sustainable energy solutions.",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "ENG. MABANO GEORGE JOACHIM",
    role: "MANAGING Director- Gm Electrics ",
    image: "/team/managingDirector.png",
    description: "10+ years of project management experience, specializing in large-scale electrical installations and team coordination.",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "ROSEMARY MUKAMWIZA",
    role: "MARKETING Director- Gm Electrics ",
    image: "/team/marketingDirector.png",
    description: "technical expert with a background in both electrical engineering and sustainable design practices.",
    linkedin: "https://linkedin.com/",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gm-darkblue via-blue-500 to-cyan-500 text-transparent bg-clip-text">
          GM ELECTRICS LEADERSHIP TEAM
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gm-darkblue to-blue-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Our team of experienced professionals is dedicated to delivering exceptional electrical solutions
            with a focus on innovation and sustainability.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                  style={{ maxHeight: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-gm-darkblue font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gm-darkblue hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 