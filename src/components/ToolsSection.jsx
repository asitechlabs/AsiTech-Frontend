import React from 'react';
import { toolUsed } from '../data/Tool';
import { motion } from 'framer-motion';

const ToolsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="tools"
      className="py-20 bg-linear-to-b from-white to-gray-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-4 text-gray-900"
        >
          Tools We Use
        </motion.h2>

        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          A modern tech stack powering scalable applications, intelligent systems, and seamless user experiences.
        </p>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {toolUsed.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 40px rgba(0,0,0,0.12)",
              }}
              className="relative group p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl transition-all duration-300 overflow-hidden"
            >

              {/* Glow background effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl" />

              {/* Icon */}
              <div className="text-4xl mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-900 relative z-10">
                {tool.name}
              </h3>

              {/* Category */}
              <span className="inline-block mt-2 text-[11px] font-semibold tracking-wide text-blue-600 bg-blue-50 px-3 py-1 rounded-full relative z-10">
                {tool.category}
              </span>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-4 leading-relaxed relative z-10">
                {tool.description}
              </p>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;