import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from 'framer-motion'

const Home = () => {
  const [text] = useTypewriter({
    words: [
      'Software Engineer @ Visteon',
      '2025 IT Graduate @ CUSAT',
      'Web & Embedded Systems Developer',
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
  })

  return (
    <div
      name='home'
      className='w-full min-h-screen text-gray-300 flex items-center justify-center relative px-6'
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
  
      {/* Content Container */}
      <div className='relative z-10 max-w-[1000px] w-full'>
  
        <motion.p
          className='text-pink-600 text-lg'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, my name is
        </motion.p>
  
        <motion.h1
          className='text-4xl sm:text-5xl lg:text-7xl font-bold text-white'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Harsh Neelabh
        </motion.h1>
  
        <motion.h2
          className='text-2xl sm:text-3xl lg:text-5xl font-semibold text-gray-300 mt-2'
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a <span>{text}</span>
          <Cursor />
        </motion.h2>
  
        <motion.p
          className='py-4 max-w-[700px] text-gray-400 text-base sm:text-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I specialize in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on real-time systems that bridge software with hardware.
        </motion.p>
  
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Link to="work" smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 rounded-xl'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </motion.div>
  
      </div>
    </div>
  )  
}

export default Home
