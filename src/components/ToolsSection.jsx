import React from 'react';
import { toolUsed } from '../data/Tool';
import { motion } from 'framer-motion';

const ToolsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="tools"
      className="py-2 bg-linear-to-b from-white to-gray-300 overflow-hidden pb-6"
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          A modern tech stack powering scalable applications, intelligent
          systems, and seamless user experiences.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {toolUsed.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group p-4 sm:p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden wrap-break-word cursor-default"
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
