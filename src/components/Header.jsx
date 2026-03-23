import React from "react";

function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2F4156]/95 backdrop-blur-md border-b border-gray-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-4 text-white gap-4 md:gap-0">

        <div className="flex-1 text-center md:text-left">
          <h1
            className="text-3xl cursor-pointer select-none"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-[#17A9E5]">POR</span>
            <span className="text-[#6263D9]">TFO</span>
            <span className="text-[#E53D92]">LIO</span>
          </h1>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
          <span
            className="cursor-pointer transition-all hover:text-red-400 hover:scale-105"
            onClick={() => scrollToSection("home")}
          >
            Home
          </span>

          <span
            className="cursor-pointer transition-all hover:text-red-400 hover:scale-105"
            onClick={() => scrollToSection("about-me")}
          >
            About Me
          </span>

          <span
            className="cursor-pointer transition-all hover:text-red-400 hover:scale-105"
            onClick={() => scrollToSection("resume")}
          >
            Resume
          </span>

          <span
            className="cursor-pointer transition-all hover:text-red-400 hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </span>
        </nav>

      </div>
    </header>
  );
}

export default Header;
