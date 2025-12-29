import { useState, useEffect } from 'react'
import Image from '../assets/prof2.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';

function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Mern Stack Dev';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150); // Typing speed - adjust as needed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Function to render text with proper styling
  const renderTypedText = () => {
    const parts = displayedText.split(' ');
    return parts.map((part, index) => {
      const isLast = index === parts.length - 1;
      const isStack = part === 'Stack' || part.startsWith('Stack');

      if (isStack) {
        return <span key={index} className='text-red-500'>{part}{!isLast && ' '}</span>;
      } else {
        return <span key={index}>{part}{!isLast && ' '}</span>;
      }
    });
  };

  return (
    <div>
      <div className=''>
        <div id="home" className='bg-[#2F4156] pb-10 scroll-mt-20'>
          <div className='text-white text-xl flex gap-5 ml-[600px]'>
            <a href='https://www.instagram.com/adarshh_010/?next=%2F&hl=en' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='mt-[100px] rounded-full transition duration-300 hover:bg-pink-500/20 hover:shadow-[0_0_15px_#ec4899]' />
            </a>
            <a href='https://github.com/adarshh8' target='_blank' rel='noopener noreferrer'>
              <FaGithub className='mt-[100px] rounded-full transition duration-300 hover:bg-gray-400/20 hover:shadow-[0_0_15px_#9ca3af]' />
            </a>
            <a href='mailto:adarshdwivedi9598@gmail.com'>
              <BiLogoGmail className='mt-[100px] rounded-full transition duration-300 hover:bg-red-500/20 hover:shadow-[0_0_15px_#ef4444]' />
            </a>
            <a href='https://www.linkedin.com/in/adarsh8/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn className='mt-[100px]  transition duration-300 hover:bg-blue-500/20 hover:shadow-[0_0_15px_#3b82f6]' />
            </a>
          </div>
          <div className='text-white text-4xl ml-[550px]'>
            <h1 className='mt-4'>Hello, I'm <span className='text-blue-400 font-bold'>Adarsh</span></h1>
          </div>
          <div >
            <h1 className='mt-2 ml-[500px] text-4xl text-white font-serif text-6xl'>
              {renderTypedText()}
              {showCursor && <span className='animate-pulse'>|</span>}
            </h1>
            <p className='text-xl italic ml-[450px] text-white'>Creating efficient, scalable, and user-focused web applications</p>
          </div>
          <div className='ml-[600px] mt-2 flex gap-4'>
            <button
              className='rounded-xl font-serif text-white bg-transparent border border-white px-2 py-1 hover:bg-white hover:text-[#2F4156] transition-colors'
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
              className='rounded-xl font-serif text-white bg-orange-500 px-2 py-1 hover:bg-orange-600 transition-colors'
              onClick={() => {
                window.open('https://drive.google.com/file/d/1grW9APfY2QryfyVcqVJSl6JDmoUdUHB7/view?usp=sharing', '_blank');
              }}
            >
              Get Resume
            </button>
          </div>
          <div className='ml-[1150px] -mt-[260px]'>
            <img src={Image} alt='profile' className='w-64 h-64 rounded-full object-cover' />

          </div>
        </div>
        <div id="about-me" className='scroll-mt-20'>
          <AboutMe />
        </div>
        <div id="resume" className='scroll-mt-20'>
          <Resume />
        </div>
        <div id="contact" className='scroll-mt-20'>
          <Contact />
        </div>




      </div>
    </div>
  )
}

export default Home
