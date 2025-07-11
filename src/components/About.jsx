import React from 'react'
import { FaTools } from 'react-icons/fa'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen text-gray-300 bg-black bg-opacity-60 flex items-center justify-center px-6'>

      <div className='max-w-[1000px] w-full'>

        {/* Heading */}
        <div className='mb-6'>
          <h2 className='text-3xl sm:text-4xl font-bold inline border-b-4 border-pink-600'>About Me</h2>
        </div>

        {/* Intro */}
        <p className='text-2xl sm:text-3xl font-semibold mb-4 text-gray-300'>
          Hi, I'm Harsh — great to have you here!
        </p>

        {/* Bio */}
        <p className='text-base sm:text-lg mb-6 leading-relaxed text-white'>
          I’m a passionate developer and engineer focused on crafting innovative, scalable solutions at the intersection of <span className='text-pink-500'>web, embedded systems, and AI</span>. My work involves building responsive full-stack applications, real-time embedded systems, and AI-driven tools to solve real-world challenges.
        </p>

        {/* Highlights */}
        <div className='mt-8'>
          <h3 className='text-xl sm:text-2xl font-bold flex items-center gap-2 mb-4'>
            <FaTools className='text-pink-500' /> Recent Highlights
          </h3>

          <ul className='space-y-3 text-base sm:text-lg text-white'>
            <li>⚡ Developed a <strong>FreeRTOS + Linux dual-guest OS ecosystem</strong> on Raspberry Pi at <strong>Visteon</strong>.</li>
            <li>⚡ Created <strong>Charge IT</strong>, a real-time EV slot booking platform reducing wait times by 95%.</li>
            <li>⚡ Integrated AI-powered chatbots using <strong>IBM Watsonx.ai</strong>, improving customer response times by 50%.</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default About
