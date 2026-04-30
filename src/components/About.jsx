import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  LightBulbIcon, 
  ShieldCheckIcon 
} from '@heroicons/react/24/outline';

const cards = [
  {
    icon: ChartBarIcon,
    bg: 'from-blue-50 to-blue-100',
    title: 'Our Mission',
    desc: 'To provide robust, scalable, and secure tech infrastructure for global enterprises built with the latest industry standards.',
  },
  {
    icon: LightBulbIcon,
    bg: 'from-indigo-50 to-indigo-100',
    title: 'Our Vision',
    desc: 'Setting the gold standard for AI-driven automation and user-centric design across the global IT ecosystem.',
  },
  {
    icon: ShieldCheckIcon,
    bg: 'from-purple-50 to-purple-100',
    title: 'Our Values',
    desc: 'Transparency, continuous innovation, and an unwavering commitment to clean code and client success.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About AsiTech
            </span>
          </h2>

<<<<<<< HEAD
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between complex problems and innovative digital
            solutions. We specialize in{' '}
            <span className="text-blue-600 font-semibold">
              cutting-edge software development
            </span>{' '}
            and{' '}
            <span className="text-indigo-600 font-semibold">
              AI integration
            </span>
            , empowering businesses to scale globally.
=======
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between complex problems and innovative digital solutions.
            We specialize in{' '}
            <span className="text-blue-600 font-semibold">cutting-edge software development</span>
            {' '}and{' '}
            <span className="text-indigo-600 font-semibold">AI integration</span>,
            empowering businesses to scale globally.
>>>>>>> 76a30178d732f09251300d5828c70c8583b257a6
          </p>
        </motion.div>

        {/* Cards */}
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Glow background */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br ${card.bg} rounded-2xl`}
              />
=======
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 overflow-hidden"
              >
                {/* Glow background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br ${card.bg} rounded-2xl`} />
>>>>>>> 76a30178d732f09251300d5828c70c8583b257a6

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 p-4 bg-white/80 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10 group-hover:scale-110">
                  <IconComponent className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center relative z-10">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed text-center relative z-10 px-2">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
