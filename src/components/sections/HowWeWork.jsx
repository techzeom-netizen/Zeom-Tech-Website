import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaMapSigns,
  FaPalette,
  FaCode,
  FaRocket,
  FaSync,
  FaStar,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaGift,
  FaHands,
  FaBullseye,
  FaChartLine,
  FaHeadset,
  FaShieldAlt,
  FaAward,
  FaLightbulb,
  FaGem,
  FaMagic,
  FaInfinity,
} from "react-icons/fa";

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);

  const data = [
    {
      id: 1,
      title: "Discovery",
      icon: <FaSearch />,
      iconAlt: <FaLightbulb />,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-orange-500",
      lightBg: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      description: "We get to know you and your ideas",
      simpleText: "We sit down and really listen to your vision, goals, and dreams.",
      items: [
        "Understanding your vision",
        "Learning about your audience",
        "Defining clear goals",
      ],
      number: "01",
      focus: "Clarity",
      timeline: "1-2 weeks",
      iconBg: "from-amber-100 to-orange-100",
    },
    {
      id: 2,
      title: "Planning",
      icon: <FaMapSigns />,
      iconAlt: <FaGem />,
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-500",
      lightBg: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
      description: "We create a simple roadmap together",
      simpleText: "We break everything down into clear, manageable steps.",
      items: [
        "Clear timeline created",
        "Transparent budget",
        "Milestones set",
      ],
      number: "02",
      focus: "Strategy",
      timeline: "2-3 weeks",
      iconBg: "from-blue-100 to-indigo-100",
    },
    {
      id: 3,
      title: "Design",
      icon: <FaPalette />,
      iconAlt: <FaMagic />,
      color: "from-purple-400 to-violet-600",
      bgColor: "bg-purple-500",
      lightBg: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
      description: "We make it beautiful and easy to use",
      simpleText: "Our creative team designs something you'll absolutely love.",
      items: [
        "Beautiful designs created",
        "User-friendly experience",
        "Works on all devices",
      ],
      number: "03",
      focus: "Creativity",
      timeline: "3-4 weeks",
      iconBg: "from-purple-100 to-violet-100",
    },
    {
      id: 4,
      title: "Development",
      icon: <FaCode />,
      iconAlt: <FaShieldAlt />,
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-emerald-500",
      lightBg: "bg-emerald-50",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      description: "We bring your idea to life",
      simpleText: "Our team builds your project with quality and care.",
      items: [
        "Regular updates shared",
        "Quality testing done",
        "Security prioritized",
      ],
      number: "04",
      focus: "Quality",
      timeline: "4-6 weeks",
      iconBg: "from-emerald-100 to-teal-100",
    },
    {
      id: 5,
      title: "Launch",
      icon: <FaRocket />,
      iconAlt: <FaAward />,
      color: "from-rose-400 to-red-600",
      bgColor: "bg-rose-500",
      lightBg: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
      description: "We help you go live successfully",
      simpleText: "We make sure everything works perfectly before launch.",
      items: [
        "Smooth launch process",
        "We're there to support",
        "Celebrate together",
      ],
      number: "05",
      focus: "Excellence",
      timeline: "1-2 weeks",
      iconBg: "from-rose-100 to-red-100",
    },
    {
      id: 6,
      title: "Growth",
      icon: <FaSync />,
      iconAlt: <FaInfinity />,
      color: "from-cyan-400 to-sky-600",
      bgColor: "bg-cyan-500",
      lightBg: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
      description: "We stay with you for the long run",
      simpleText: "We're your long-term partner for success and growth.",
      items: [
        "Always available",
        "Regular check-ins",
        "Continuous improvement",
      ],
      number: "06",
      focus: "Evolution",
      timeline: "Ongoing",
      iconBg: "from-cyan-100 to-sky-100",
    },
  ];

  const activeStepData = data[activeStep];
  const progress = ((activeStep) / (data.length - 1)) * 100;

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B4DB8]/10 text-[#0B4DB8] text-sm font-semibold mb-4 border border-[#0B4DB8]/20">
            <FaStar className="text-[#0B4DB8]" />
            <span>How We Work Together</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your Journey <br />
            <span className="bg-gradient-to-r from-[#0B4DB8] to-[#0B4DB8] bg-clip-text text-transparent">
              From Idea to Success
            </span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#0B4DB8] via-[#0B4DB8] to-[#0B4DB8] rounded-full"></div>
          </div>
          <p className="text-gray-600 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
            We guide you through every step with clarity, care, and expertise.
          </p>
        </div>

        {/* Step Navigation - Line connects dots perfectly */}
        <div className="relative mb-12 px-4">
          {/* Progress Line Container - Centers between dots */}
          <div className="absolute left-[4.5%] right-[4.5%] top-8 h-1 bg-gray-200 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-between items-center relative">
            {data.map((step, index) => {
              const isActive = index === activeStep;
              const isCompleted = index < activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center gap-2 transition-all duration-300 group relative z-10 flex-1"
                >
                  {/* Circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full flex items-center justify-center text-2xl text-white transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-r ${step.color} shadow-2xl scale-110 ring-4 ring-${step.color.split(' ')[1].replace('from-', '')}/30`
                        : isCompleted
                        ? `bg-gradient-to-r ${step.color} opacity-80`
                        : "bg-gray-200 group-hover:bg-gray-300"
                    }`}
                  >
                    {isActive ? step.iconAlt : step.icon}
                    
                    {/* Active Pulse Ring */}
                    {isActive && (
                      <span className="absolute -inset-1 rounded-full border-2 border-blue-400 animate-ping opacity-50"></span>
                    )}

                  </div>

                  {/* Label */}
                  <span
                    className={`text-xs font-semibold transition-all duration-300 ${
                      isActive ? step.textColor : isCompleted ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                  
                 
                
                </button>
              );
            })}
          </div>

  
        </div>

        {/* Active Step Detail */}
        <div
          className={`${activeStepData.lightBg} rounded-3xl p-8 md:p-10 border-2 ${activeStepData.borderColor} transition-all duration-500 shadow-xl hover:shadow-2xl`}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Step Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white bg-gradient-to-r ${activeStepData.color} shadow-lg`}
                >
                  {activeStepData.iconAlt}
                </div>
                <div>
                  <span className="text-sm font-mono text-gray-400">
                    Phase {activeStepData.number}
                  </span>
                  <h3
                    className={`text-3xl font-bold ${activeStepData.textColor}`}
                  >
                    {activeStepData.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-700 text-lg font-medium mb-2">
                {activeStepData.description}
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed">
                {activeStepData.simpleText}
              </p>

              {/* Items */}
              <div className="space-y-3">
                {activeStepData.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-0.5 ${activeStepData.textColor}`}>
                      <FaCheckCircle className="text-lg" />
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Stats Panel */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="grid grid-cols-2 gap-4">
                {/* Focus */}
                <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`text-3xl mb-1 ${activeStepData.textColor} flex justify-center`}>
                    <FaBullseye />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Focus</div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {activeStepData.focus}
                  </div>
                </div>

                {/* Support */}
                <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className={`text-3xl mb-1 ${activeStepData.textColor} flex justify-center`}>
                    <FaHeadset />
                  </div>
                  <div className="text-xs text-gray-500 font-medium">Support</div>
                  <div className="font-semibold text-gray-800 text-sm">24/7</div>
                </div>

                {/* Progress */}
                <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow col-span-2">
                  <div className={`text-3xl mb-1 ${activeStepData.textColor} flex justify-center`}>
                    <FaChartLine />
                  </div>
                  <div className="text-xs text-gray-500 font-medium mb-2">Progress</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${activeStepData.color} transition-all duration-700 relative`}
                      style={{ width: `${progress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mt-1.5">
                    {Math.round(progress)}% Complete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Trust Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 border border-blue-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
              <FaAward className="text-blue-500" />
              Why Work With Us?
            </h3>
            <p className="text-gray-600 text-sm">
              We make the complex simple and the journey enjoyable.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
              <div className="text-3xl text-blue-500 flex justify-center mb-1">
                <FaGift />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Clear Process
              </div>
              <div className="text-xs text-gray-500">No confusion, just clarity</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
              <div className="text-3xl text-purple-500 flex justify-center mb-1">
                <FaUsers />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Friendly Team
              </div>
              <div className="text-xs text-gray-500">We're nice and approachable</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
              <div className="text-3xl text-green-500 flex justify-center mb-1">
                <FaClock />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                On-Time Delivery
              </div>
              <div className="text-xs text-gray-500">We respect your time</div>
            </div>
            <div className="text-center p-4 bg-white/80 rounded-xl hover:bg-white transition-all shadow-sm hover:shadow-md">
              <div className="text-3xl text-orange-500 flex justify-center mb-1">
                <FaHands />
              </div>
              <div className="text-sm font-semibold text-gray-800">
                Dedicated Support
              </div>
              <div className="text-xs text-gray-500">We're always here for you</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#0B4DB8] to-[#0B4DB8] rounded-3xl p-8 md:p-12 text-white max-w-6xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0  h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0  h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <span>Ready to Begin?</span>
                  <FaStar className="text-yellow-300" />
                </h3>
                <p className="text-blue-100 max-w-xl">
                  Let's start your journey today. We're here to guide you every
                  step of the way.
                </p>
              </div>
              <button className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex-shrink-0">
                Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default HowWeWork;
