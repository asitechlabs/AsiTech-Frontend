import React from "react";
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
  return (
    <>
      {/* ✅ Animation CSS inside component */}
      <style>
        {`
          @keyframes fadeUpCard {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.95);
              filter: blur(6px);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }

          .feature-card {
            opacity: 0;
            animation: fadeUpCard 0.6s ease forwards;
          }

          .feature-card:hover {
            transform: translateY(-8px) scale(1.02);
          }
        `}
      </style>

      <section id="features" className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* Badge */}
          <span className="inline-flex items-center py-1.5 px-4 mb-6 text-xs font-bold tracking-widest text-blue-600 bg-blue-50 border border-blue-100 rounded-full uppercase">
            What We Offer
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Features</span>
          </h2>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-16">
            We provide cutting-edge solutions designed to help your business grow,
            scale, and innovate in today's fast-paced digital world.
          </p>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.15}s` }}
                className="feature-card group p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 bg-white text-left cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;