import React from "react";
import {
  FaSearch,
  FaPencilAlt,
  FaLink,
  FaPalette,
  FaBoxOpen,
  FaSearchPlus,
} from "react-icons/fa";

const data = [
  {
    title: "Strategy",
    icon: <FaSearch className="text-xl" />,
    items: [
      "Research & Insights",
      "Stakeholder Workshops",
      "Product Platform Strategy",
      "IA Development",
      "Content Planning",
    ],
  },
  {
    title: "UX",
    icon: <FaPencilAlt className="text-xl" />,
    items: [
      "User Research",
      "Persona Development",
      "User Journey Mapping",
      "IA Validation",
      "Wireframing",
    ],
  },
  {
    title: "Design",
    icon: <FaLink className="text-xl" />,
    items: [
      "User Interface Design",
      "Responsive design",
      "Digital Brand Development",
      "Rapid Prototyping",
      "Design Systems",
    ],
  },
  {
    title: "Development",
    icon: <FaPalette className="text-xl" />,
    items: [
      "System Architecture",
      "Product Development",
      "CMS Integration",
      "3rd Party Integration",
      "API Design & Implementation",
    ],
  },
  {
    title: "Delivery",
    icon: <FaBoxOpen className="text-xl" />,
    items: [
      "CI/CD Integration",
      "Sprint wise delivery",
      "Multiple stages of deployment",
      "Performance Management",
    ],
  },
  {
    title: "Support",
    icon: <FaSearchPlus className="text-xl" />,
    items: [
      "Review deliverables",
      "Assess budget/timescales",
      "Initiate ongoing support",
      "Discuss next steps",
    ],
  },
];

const HowWeWork = () => {
  return (
    <div>
      <section className="py-12 px-4 sm:px-4 lg:px-4 bg-white text-center containerMax">
        <h2 className="text-4xl font-bold mb-2 brand-heading">How we work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We listen your requirement, we promise to deliver exactly what you want—
          a wonderful thing on the internet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {data.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#063B8F] hover:via-[#0B4DB8] hover:to-[#8EBEFF] "
            >
              {/* Gradient border effect */}
              
              {/* Card content */}
              <div className="relative m-[2px] min-h-72 bg-white rounded-xl p-6 border border-blue-100 ">
                {/* Title with icon */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-[#0B4DB8] group-hover:text-[#063B8F] transition-colors duration-300">
                    {card.icon}
                  </div>
                  <span className="font-bold text-[#031735] text-xl lg:text-2xl bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#063B8F] group-hover:to-[#2F80ED] transition-all duration-300">
                    {card.title}
                  </span>
                </div>

                {/* Divider line with gradient */}
                <div className="w-16 h-1 bg-gradient-to-r from-[#063B8F] to-[#2F80ED] rounded mb-5 group-hover:w-24 transition-all duration-300"></div>
                
                {/* List items */}
                <ul className="text-left space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0B4DB8] mt-2 mr-2"></span>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
            
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
