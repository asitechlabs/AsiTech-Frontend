import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, ShieldCheck, BarChart3, Cloud, Zap } from "lucide-react";

const features = [
  {
    icon: <Cpu size={28} />,
    title: "AI Integration",
    desc: "Leverage intelligent systems to automate processes and deliver smarter user experiences.",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    desc: "Responsive, scalable, and high-performance web applications tailored to your business.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Security First",
    desc: "We implement industry-grade security practices to protect your data and infrastructure.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data Analytics",
    desc: "Transform data into actionable insights with powerful analytics and visualization tools.",
  },
  {
    icon: <Cloud size={28} />,
    title: "Cloud Solutions",
    desc: "Deploy and scale your applications seamlessly using modern cloud technologies.",
  },
  {
    icon: <Zap size={28} />,
    title: "Fast Performance",
    desc: "Optimized systems ensuring lightning-fast load times and smooth user experiences.",
  },
];

const Features = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="bg-linear-to-b from-white to-gray-300 py-2 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-4 mb-3 text-xs font-bold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full uppercase"
        >
          What We Offer
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          Our <span className="text-blue-600">Features</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-500 text-lg mb-16"
        >
          We provide cutting-edge solutions designed to help your business grow,
          scale, and innovate in today's fast-paced digital world.
        </motion.p>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white text-left cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
