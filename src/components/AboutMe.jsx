import React from 'react'


function AboutMe() {
  return (
    <div>
      <div className="mt-2 flex flex-col items-center">
        <h1 className="text-3xl text-black">About Me</h1>
        <p className="mt-2 text-gray-800">Why Choose Me</p>
        <div className="relative mt-3 w-48 h-[2px] bg-black/80">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-14 h-[10px] bg-orange-500 rounded-full"></span>
        </div>



        <div className='flex flex-col md:flex-row shadow-2xl shadow max-w-4xl mx-auto mt-8 mx-4 md:mx-auto bg-white rounded-xl overflow-hidden'>
          <div className="w-full md:w-1/2">
            <img src='/assets/prof2.jpeg' alt="About" className="w-full h-64 md:h-full object-cover" />
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 font-sans">
            <p className="text-[14px] leading-[1.7] text-gray-700">
              Full-stack web developer with strong experience in MERN stack
              development. I enjoy building efficient, scalable, and
              user-focused web applications with clean architecture and
              modern design principles. Passionate about continuous learning
              and contributing to impactful, real-world projects.
            </p>
            <h2 className='mt-8'>Here are a Few Highlights</h2>
            <ul className="mt-3 space-y-2 text-[14px] text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Interactive front-end as per design
              </li>

              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
                Responsive and interactive frontend development
              </li>

              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
                State management using Redux
              </li>

              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
                Node.js and Express.js backend with REST APIs
              </li>

              <li className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-orange-500 rounded-full'></span>
                MongoDB database design and integration
              </li>
            </ul>

            <div className='mt-6 flex gap-4'>
              <button
                className='rounded-xl font-serif text-white bg-[#2F4156] border border-white px-3 py-1 hover:bg-[#1a2a3a] transition-colors'
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                Hire Me
              </button>
              <button
                className='rounded-xl font-serif text-white bg-orange-500 px-3 py-1 hover:bg-orange-600 transition-colors'
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1grW9APfY2QryfyVcqVJSl6JDmoUdUHB7/view?usp=sharing', '_blank');
                }}
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default AboutMe
