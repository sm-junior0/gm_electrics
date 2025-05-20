import React from "react";
import { motion } from "framer-motion";
import Image1 from "../assets/images/team/chairman.png";
import Image2 from "../assets/images/team/managingDirector.png";
import Image3 from "../assets/images/team/marketingDirector.png";

const teamMembers = [
  {
    name: "MASTERJERB BIRUNGI PAUL",
    role: "CHAIRMAN- GM Electrics ",
    image: Image1,
    description: "Leading our team with expertise in sustainable energy solutions.",
  },
  {
    name: "ENG. MABANO GEORGE JOACHIM",
    role: "MANAGING Director- GM Electrics ",
    image: Image2,
    description: "Specializing in large-scale electrical installations and team coordination.",
  },
  {         
    name: "ROSEMARY MUKAMWIZA",
    role: "MARKETING Director- GM Electrics ",
    image: Image3,
    description: "Expert in electrical engineering and sustainable design practices.",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-gray-50">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 