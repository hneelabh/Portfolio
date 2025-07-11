import C from '../assets/c.png';
import React from 'react';
import JavaScript from '../assets/javascript.png';
import Sql from '../assets/sql.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import Git from '../assets/git.png';
import UBoot from '../assets/UBoot.png';
import Mongo from '../assets/mongo.png';
import Node from '../assets/node.png';
import Express from '../assets/express.png';
import Unix from '../assets/unix.png';
import CPP from '../assets/c++.png';
import freeRTOS from '../assets/freeRTOS.png'

const Skills = () => {
  return (
    <div name='skills' className='pt-24 relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>

    {/* Content Container */}
    <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
        <p className='py-4'>The technologies I've worked with are:</p>
      </div>

      {/* Skills Grid */}
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={C} alt="C icon" />
          <p className='my-4'>C Programming</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={CPP} alt="CPP icon" />
          <p className='my-4'>C++</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
          <p className='my-4'>JAVASCRIPT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Sql} alt="SQL icon" />
          <p className='my-4'>SQL</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={ReactImg} alt="React icon" />
          <p className='my-4'>REACT JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Node} alt="Node icon" />
          <p className='my-4'>NODE JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Express} alt="Express icon" />
          <p className='my-4'>EXPRESS JS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Mongo} alt="MongoDB icon" />
          <p className='my-4'>MONGO DB</p>
        </div>

        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Unix} alt="Unix icon" />
          <p className='my-4'>LINUX</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={freeRTOS} alt="Tailwind icon" />
          <p className='my-4'>FreeRTOS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={Git} alt="GitHub icon" />
          <p className='my-4'>GIT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
          <img className='w-10 mx-auto' src={UBoot} alt="UBoot icon" />
          <p className='my-4'>U-BOOT</p>
        </div>
      </div>
    </div>
    </div>
)
}

export default Skills;

