import React from 'react';

const cards = [
  {
    emoji: '🚀',
    bg: 'from-blue-50 to-blue-100',
    title: 'Our Mission',
    desc: 'To provide robust, scalable, and secure tech infrastructure for global enterprises built with the latest industry standards.',
  },
  {
    emoji: '🎯',
    bg: 'from-indigo-50 to-indigo-100',
    title: 'Our Vision',
    desc: 'Setting the gold standard for AI-driven automation and user-centric design across the global IT ecosystem.',
  },
  {
    emoji: '💎',
    bg: 'from-purple-50 to-purple-100',
    title: 'Our Values',
    desc: 'Transparency, continuous innovation, and an unwavering commitment to clean code and client success.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-b from-white to-gray-100 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              About AsiTech
            </span>
          </h2>

          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Bridging the gap between complex problems and innovative digital solutions.
            We specialize in{' '}
            <span className="text-blue-600 font-semibold">cutting-edge software development</span>
            {' '}and{' '}
            <span className="text-indigo-600 font-semibold">AI integration</span>,
            empowering businesses to scale globally.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >

              {/* Glow background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br ${card.bg} rounded-2xl`} />

              {/* Emoji */}
              <div className="text-4xl mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {card.emoji}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                {card.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;