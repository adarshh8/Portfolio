import React, { useMemo, useState } from "react";
import {
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaHeart,
} from "react-icons/fa";

function Resume() {
  const [activeSection, setActiveSection] = useState("education");
  const [direction, setDirection] = useState(1); // 1 = down/next, -1 = up/prev

  const items = [
    { id: "education", label: "Education", icon: <FaUserGraduate /> },
    { id: "work", label: "Work History", icon: <FaBriefcase /> },
    { id: "skills", label: "Programming Skills", icon: <FaCode /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "interests", label: "Interests", icon: <FaHeart /> },
  ];

  const activeIndex = useMemo(() => {
    return items.findIndex((item) => item.id === activeSection);
  }, [items, activeSection]);

  const ITEM_HEIGHT = 48;

  const handleSectionChange = (id) => {
    if (id === activeSection) return;

    const currentIndex = items.findIndex((item) => item.id === activeSection);
    const nextIndex = items.findIndex((item) => item.id === id);

    setDirection(nextIndex > currentIndex ? 1 : -1);
    setActiveSection(id);
  };

  return (
    <div className="w-full">

      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl text-black">Resume</h1>
        <p className="mt-2 text-gray-800">My formal Bio Details</p>
        <div className="relative mt-3 w-48 h-[2px] bg-black/80">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-14 h-[10px] bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <style>
        {`
          @keyframes sectionEnterRight {
            from {
              opacity: 0;
              transform: translateX(28px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }

          @keyframes sectionEnterLeft {
            from {
              opacity: 0;
              transform: translateX(-28px) scale(0.98);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
        `}
      </style>

      <div className="mt-10 flex max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-[0_18px_45px_rgba(15,23,42,0.35)] bg-white">

        <div className="w-14 bg-[#0f172a] flex flex-col items-center py-6 gap-8">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSectionChange(item.id)}
              className={`text-lg transition-colors duration-300 focus:outline-none ${
                activeSection === item.id ? "text-orange-400 scale-110"
      : "text-white hover:text-orange-400 hover:scale-110"
              }`}
            >
              {item.icon}
            </button>
          ))}
        </div>


        <div className="relative w-64 bg-white py-6 overflow-hidden">

          <div
            className="absolute left-0 top-6 w-full h-12 bg-[#1e293b] rounded-r-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              transform: `translateY(${activeIndex * ITEM_HEIGHT}px)`,
            }}
          />

          <div className="relative z-10">
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleSectionChange(item.id)}
                className="w-full h-12 px-6 flex items-center cursor-pointer text-left text-sm font-medium transition-colors duration-300"
              >
                <span
                  className={
                    activeSection === item.id ? "text-white" : "text-black"
                  }
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>

 
        <div className="w-[2px] bg-white shadow-[10px_0_30px_rgba(0,0,0,0.18)]" />

        <div className="flex-1 bg-white p-8 overflow-hidden">
          <div
            key={activeSection}
            className={
              direction === 1
                ? "w-full h-full animate-[sectionEnterRight_0.5s_ease-out_forwards]"
                : "w-full h-full animate-[sectionEnterLeft_0.5s_ease-out_forwards]"
            }
          >
            {activeSection === "education" && <Education />}
            {activeSection === "work" && <Work />}
            {activeSection === "skills" && <Skills />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "interests" && <Interests />}
          </div>
        </div>

      </div>
    </div>
  );
}



function Education() {
  return (
    <>
    <div className="max-h-[250px] overflow-hidden">
      <h2 className="text-xl mb-4">Education</h2>
      <p className="text-gray-700 text-sm">
        <ul className="mt-4 space-y-6 text-[14px] text-gray-700">


  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          Lovely Professional University, Punjab
        </p>
        <p className="text-gray-600 text-sm">
          Bachelor of Technology
        </p>
      </div>
    </div>

    <span className="text-white bg-orange-500 px-3 py-1 text-xs rounded-full">
      2023–Present
    </span>
  </li>


  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          B.K.D. Aldrich Public School Orai, Uttar Pradesh
        </p>
        <p className="text-gray-600 text-sm">
          Senior Secondary Education (Class XII) – Science
        </p>
      </div>
    </div>

    <span className="text-white bg-orange-500 px-3 py-1 text-xs rounded-full">
      2021–2022
    </span>
  </li>

 
  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          B.K.D. Aldrich Public School Orai, Uttar Pradesh
        </p>
        <p className="text-gray-600 text-sm">
          Secondary Education (Class X)
        </p>
      </div>
    </div>

    <span className="text-white bg-orange-500 px-3 py-1 text-xs rounded-full">
      2019–2020
    </span>
  </li>

</ul>

      </p>
      </div>
    </>
  );
}

function Work() {
  return (
    <>
    <div className="max-h-[250px] overflow-y-auto">
      <h2 className="text-xl mb-4">Work History</h2>

      <div className=" ">
        <ul className="mt-4 space-y-6 text-[14px] text-gray-700">

          <li className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
              <div>
                <p className="text-orange-500 text-lg">
                  Full-Stack Web Developer – Farmer Companion Project
                </p>
                <p className="text-gray-600 text-sm">
                  - Built an AI-powered farmer companion platform to simplify farm management and<br/>
                  <span className="ml-3">real-time decision-making.</span><br/>  
                  - Developed a full-stack web application using React, Tailwind CSS, Node.js, Express,<br/> 
                  <span className="ml-3">MongoDB, JWT, and Socket.IO with real-time features.</span><br/>
                  - Enabled farmers to manage operations efficiently through instant updates and improved productivity.
                </p>
              </div>
            </div>

            <span className="text-white bg-orange-500 px-3 py-1 text-xs rounded-full">
              Dec 2025
            </span>
          </li>

          <li className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
              <div>
                <p className="text-orange-500 text-lg">
                  Frontend Developer – Currency Converter
                </p>
                <p className="text-gray-600 text-sm">
                  - Created a user-friendly currency converter using real-time exchange rates.<br />
                  - Built a responsive application integrated with a live currency exchange API.<br />
                  - Delivered accurate conversions with a smooth and intuitive user experience.
                  
                </p>
              </div>
            </div>

            <span className="text-white bg-orange-500 px-3 py-1 text-xs rounded-full">
              Nov 2025
            </span>
          </li>

        </ul>
      </div>
      </div>
    </>
  );
}

function Skills() {
  const skills = [
    { name: "JavaScript", percentage: 85 },
    { name: "C language", percentage: 80 },
    { name: "Node JS", percentage: 85 },
    { name: "Core Java", percentage: 75 },
    { name: "CSS", percentage: 90 },
    { name: "React JS", percentage: 85 },
    { name: "Express JS", percentage: 80 },
    { name: "Mongo Db", percentage: 75 },
    { name: "HTML", percentage: 90 },
    { name: "CPP", percentage: 85},
    { name: "Python", percentage: 90},
  ];

  const SkillItem = ({ skill }) => (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
        <span className="text-gray-700 text-lg">{skill.name}</span>
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: `${skill.percentage}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="text-xl mb-4">Programming Skills</h2>

      <div className="mt-4 max-h-[200px] overflow-y-auto pr-[200px]">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <h2 className="text-xl mb-1">Projects</h2>
      <div className="flex gap-14">
        <div className="">
            <p className="font-serif">Currency Convertor</p>
            <img src='/assets/proj2.png' alt="project" className="rounded-lg w-40 h-40" />
            <div className="flex gap-[74px] mt-2 rounded-full shadow shadow-xl shadow-red-300">
                <button 
                  className="text-white font-serif bg-[#2F4156] rounded-full px-1 hover:bg-[#1a2a3a] transition-colors cursor-pointer"
                  onClick={() => {
                    window.open('https://currency-converter-nine-puce.vercel.app/', '_blank');
                  }}
                >
                  View
                </button>
                <button 
                  className="text-white font-serif bg-orange-500 rounded-full px-1 py-1 hover:bg-orange-600 transition-colors cursor-pointer"
                  onClick={() => {
                    window.open('https://github.com/adarshh8/currencyConverter', '_blank');
                  }}
                >
                  Code
                </button>
            </div>
        </div>
        <div className="">
            <p className="font-serif">Password Generator</p>
            <img src='/assets/proj3.png' alt="project" className="rounded-lg w-40 h-40" />
            <div className="flex gap-[74px] mt-2 rounded-full shadow shadow-xl shadow-red-300">
                <button 
                  className="text-white font-serif bg-[#2F4156] rounded-full px-1 hover:bg-[#1a2a3a] transition-colors cursor-pointer"
                  onClick={() => {
                    window.open('https://password-generator-iota-ebon-74.vercel.app/', '_blank');
                  }}
                >
                  View
                </button>
                <button 
                  className="text-white font-serif bg-orange-500 rounded-full px-1 py-1 hover:bg-orange-600 transition-colors cursor-pointer"
                  onClick={() => {
                    window.open('https://github.com/adarshh8/password_generator', '_blank');
                  }}
                >
                  Code
                </button>
            </div>
        </div>
      </div>
     
    </>
  );
}

function Interests() {
  return (
    <>
      <h2 className="text-xl mb-4">Interests</h2>
      <ul className="mt-4 space-y-6 text-[14px] text-gray-700">
      <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          UI/UX Design
        </p>
        <p className="text-gray-600 text-sm">
          Designing intuitive interfaces with a focus on usability and performance.
        </p>
      </div>
    </div>
  </li>
  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          AI-Powered Systems
        </p>
        <p className="text-gray-600 text-sm">
         Exploring AI-driven features to solve real-world problems.
        </p>
      </div>
    </div>
  </li>
  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
            Cricket
        </p>
        <p className="text-gray-600 text-sm">
          Playing and following cricket as a source of relaxation, focus, and mental refreshment.
        </p>
      </div>
    </div>
  </li>
  <li className="flex items-start justify-between">
    <div className="flex items-start gap-3">
      <span className="mt-1 w-3 h-3 bg-orange-500 rounded-full"></span>
      <div>
        <p className="text-orange-500">
          Continuous Learning
        </p>
        <p className="text-gray-600 text-sm">
         Staying updated with emerging technologies and industry best practices.
        </p>
      </div>
    </div>
  </li>
  </ul>
    </>
  );
}

export default Resume;
