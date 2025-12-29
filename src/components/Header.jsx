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
      <div className="flex items-center justify-between px-5 py-5 text-white">

        <div className="flex-1">
          <h1
            className="ml-[350px] text-3xl cursor-pointer select-none"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-[#17A9E5]">POR</span>
            <span className="text-[#6263D9]">TFO</span>
            <span className="text-[#E53D92]">LIO</span>
          </h1>
        </div>

        <nav className="flex-1 flex justify-center gap-6 mr-[350px] text-xl">
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
