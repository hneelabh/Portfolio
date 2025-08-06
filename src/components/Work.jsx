import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import VotingSystem from '../assets/projects/votingsystem.png';
import Dictionary from '../assets/projects/dictionary.png';
import chargeit from '../assets/projects/chargeit.png';
import packnchew from '../assets/projects/packnchew.png';
import mycontacts from '../assets/projects/mycontacts.jpeg';
import diversediaries from '../assets/projects/diversediaries.jpg';
import taskmaster from '../assets/projects/taskmaster.png';
import minigolf from '../assets/projects/minigolf.png'
import { FaGithub } from "react-icons/fa";
import { GrDeploy } from "react-icons/gr";

const Work = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start('show');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const projects = [
    {
      img: chargeit,
      title: "Charge IT",
      tech: "(React.js, Tailwind, Firebase, Flutter, Google Maps API)",
      desc: "Complete EV Solutions - Book, Charge, Rent and Drive!",
      demo: "https://charge-i-ts.vercel.app/",
      code: "https://www.github.com/hneelabh/ChargeIT"
    },
    {
      img: packnchew,
      title: "PacknChew",
      tech: "(React.js, Tailwind, Firebase)",
      desc: "Official Website for Lucknow based restaurant PacknChew",
      demo: "https://packnchew.netlify.app/",
      code: "https://www.github.com/hneelabh/PacknChew"
    },
    {
      img: diversediaries,
      title: "Diverse Diaries",
      tech: "(React.js, Node.js, Express, MongoDB, JWT, Tailwind)",
      desc: "A blogging app where diverse ideas meet each other.",
      code: "https://www.github.com/hneelabh/DiverseDiaries"
    },
    {
      img: VotingSystem,
      title: "Election Portal",
      tech: "(HTML, CSS, JavaScript, PHP, MySQL)",
      desc: "A website for college to make elections easy, transparent and paper-free.",
      code: "https://www.github.com/hneelabh/Online_Voting_System"
    },
    {
      img: minigolf,
      title: "Mini Golf",
      tech: "(Python)",
      desc: "A small golf game built with python.",
      code: "https://www.github.com/hneelabh/SuperMiniGolf"
    },
    {
      img: taskmaster,
      title: "Task Master",
      tech: "(HTML, CSS, Flask, Sqlite)",
      desc: "A flask web-app for storing the tasks to be done.",
      code: "https://www.github.com/hneelabh/TaskMaster"
    },
    {
      img: mycontacts,
      title: "My Contacts",
      tech: "(Node.js, Express, MongoDB, JWT)",
      desc: "A backend specific app to perform CRUD operations for contacts.",
      code: "https://www.github.com/hneelabh/mycontacts"
    },
    {
      img: Dictionary,
      title: "Simple Dictionary",
      tech: "(React.js, Open Dictionary API, Tailwind)",
      desc: "An API-based app to show meanings, synonyms and antonyms of words.",
      demo: "https://hneelabh.github.io/English-Dictionary/",
      code: "https://www.github.com/hneelabh/English-Dictionary"
    }
  ];

  return (
    <div name='work' className='relative w-full min-h-screen text-gray-300 overflow-hidden bg-black bg-opacity-60 px-6'>
      <div className='max-w-[1000px] mx-auto px-4 py-8 flex flex-col justify-center w-full h-full z-10'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Below is a showcase of some of my most accomplished works:</p>
        </div>

        <motion.div
          ref={ref}
          className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 z-10'
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className='relative aspect-square shadow-xl shadow-black group container rounded-md flex justify-center items-center mx-auto overflow-hidden'
              style={{
                backgroundImage: `url(${project.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-3 sm:p-4'>
                <div className='text-sm sm:text-base md:text-lg font-bold text-white tracking-wider mb-1'>
                  {project.title}
                </div>
                <div className="text-[0.6rem] sm:text-xs md:text-sm pb-1">{project.tech}</div>
                <div className="text-[0.6rem] sm:text-xs italic">{project.desc}</div>

                <div className='pt-3 flex justify-center items-center flex-wrap'>
                  {project.demo && (
                    <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                      <button className='text-center rounded-xl px-2 py-1 m-1 bg-white text-gray-700 font-bold text-xs flex items-center hover:scale-95 duration-300'>
                        <GrDeploy className='mr-1' />Demo
                      </button>
                    </a>
                  )}
                  <a href={project.code} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-xl px-2 py-1 m-1 bg-white text-gray-700 font-bold text-xs flex items-center hover:scale-95 duration-300'>
                      <FaGithub className='mr-1' />Code
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
