import React from 'react';
import PS from '../assets/Certificates/HackerRankPS.png';
import IBMAI from '../assets/Certificates/IBMAI.jpg';
import TCS from '../assets/Certificates/TCSiON.jpg';
import ReactJS from '../assets/Certificates/UdemyReactJS.jpg';
import IBMAI2 from '../assets/Certificates/AIFundamentals.jpg';
import Visteon from '../assets/Certificates/Visteon.png'

const Certificates = () => {
  return (    
    <div name='certificates' className='relative px-10 w-full min-h-screen text-gray-300 overflow-hidden bg-black bg-opacity-60'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
        <div className='z-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certificates</p>
          <p className='py-4'>These are some of the certificates I've received:</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 z-10'>
        <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={Visteon} alt="ReactJS Certificate" />
            <p className='my-4 font-semibold'>Internship Completion (Visteon)</p>
            <a href="https://drive.google.com/file/d/15MQwnfu2PSDnOCgi1OyyOKasv7QufvR-/view?usp=sharing" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>View</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={IBMAI2} alt="AI Fundamentals Certificate" />
            <p className='my-4 font-semibold'>AI Fundamentals (IBM)</p>
            <a href="#" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={IBMAI} alt="Getting Started with AI Certificate" />
            <p className='my-4 font-semibold'>Getting Started with AI (IBM)</p>
            <a href="https://www.credly.com/go/8EdWLh4f" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={TCS} alt="TCS Young Professional Certificate" />
            <p className='my-4 font-semibold'>Young Professional (TCS iON)</p>
            <a href="https://drive.google.com/file/d/1w4VObVKVfSlycDelJuDwBWjY5RI6BzNF/view" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>View</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={ReactJS} alt="ReactJS Certificate" />
            <p className='my-4 font-semibold'>React JS (Udemy)</p>
            <a href="https://www.udemy.com/certificate/UC-d2e99ccb-4ea2-42b4-b44c-a232bf3412bc/" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={PS} alt="Problem Solving Certificate" />
            <p className='my-4 font-semibold'>Problem Solving (HackerRank)</p>
            <a href="https://www.hackerrank.com/certificates/770a3c68cecb" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;