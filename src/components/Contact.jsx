import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic (e.g., send to backend)
    console.log('Form submitted:', formData);
    
    // Show success message (you can replace this with a toast notification)
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className='w-full min-h-screen'>
      <div className="mt-10 flex flex-col items-center">
        <h1 className="text-3xl text-black">Contact Me</h1>
        <p className="mt-2 text-gray-800">Let's Keep in Touch</p>
        <div className="relative mt-3 w-48 h-[2px] bg-black/80">
          <span className="absolute left-1/2 -translate-x-1/2 -top-[5px] w-14 h-[10px] bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <div className='flex justify-center mt-8 mb-12'>
        <div className='w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex'>
          {/* Left Column - Dark Blue Background */}
          <div className='w-1/2 bg-blue-900 p-8 flex flex-col relative overflow-hidden'>
            {/* Decorative bubbles background */}
            <div className='absolute inset-0 opacity-20'>
              <div className='grid grid-cols-4 gap-3 p-4'>
                {[...Array(12)].map((_, i) => (
                  <div key={i} className='w-10 h-10 rounded-full bg-blue-400'></div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className='relative z-10'>
              <div className='flex items-center gap-2 mb-6'>
                <h1 className='text-4xl font-bold text-white'>Get In Touch</h1>
              </div>
              
              <div className='flex gap-4 mb-8'>
                <a href='https://www.instagram.com/adarshh_010/?next=%2F&hl=en' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:opacity-80 transition'>
                  <FaInstagram />
                </a>
                <a href='https://github.com/adarshh8' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:opacity-80 transition'>
                  <FaGithub />
                </a>
                <a href='mailto:adarshdwivedi9598@gmail.com' className='text-white text-2xl hover:opacity-80 transition'>
                  <BiLogoGmail />
                </a>
                <a href='https://www.linkedin.com/in/adarsh8/' target='_blank' rel='noopener noreferrer' className='text-white text-2xl hover:opacity-80 transition'>
                  <FaLinkedinIn />
                </a>
              </div>

              <p className='text-white text-lg mt-auto'>Send Your Email Here!</p>
            </div>
          </div>

          {/* Right Column - Light Gray Background with Form */}
          <div className='w-1/2 bg-gray-200 p-8 flex flex-col'>
            <form onSubmit={handleSubmit} className='flex flex-col h-full'>
              <div className='mb-6'>
                <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your name'
                  required
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div className='mb-6 flex-grow'>
                <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='6'
                  className='w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none'
                  placeholder='Enter your message'
                  required
                />
              </div>

              <button
                type='submit'
                className='bg-black text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 border-2 border-red-500 hover:bg-gray-900 transition-colors'
              >
                <span>send</span>
                <IoPaperPlane className='text-white' />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
