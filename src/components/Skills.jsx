// // import React from 'react';
// // import C from '../assets/skills/c.png';
// // import JavaScript from '../assets/skills/javascript.png';
// // import Sql from '../assets/skills/sql.png';
// // import ReactImg from '../assets/skills/react.png';
// // import Git from '../assets/skills/git.png';
// // import UBoot from '../assets/skills/UBoot.png';
// // import Mongo from '../assets/skills/mongo.png';
// // import Node from '../assets/skills/node.png';
// // import Express from '../assets/skills/express.png';
// // import Unix from '../assets/skills/unix.png';
// // import CPP from '../assets/skills/c++.png';
// // import freeRTOS from '../assets/skills/freeRTOS.png'

// // const Skills = () => {
// //   return (
// //     <div name='skills' className='pt-24 relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>

// //     {/* Content Container */}
// //     <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
// //       <div>
// //         <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
// //         <p className='py-4'>The technologies I've worked with are:</p>
// //       </div>

// //       {/* Skills Grid */}
// //       <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={C} alt="C icon" />
// //           <p className='my-4'>C Programming</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={CPP} alt="CPP icon" />
// //           <p className='my-4'>C++</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={JavaScript} alt="JavaScript icon" />
// //           <p className='my-4'>JAVASCRIPT</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Sql} alt="SQL icon" />
// //           <p className='my-4'>SQL</p>
// //         </div>

// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={ReactImg} alt="React icon" />
// //           <p className='my-4'>REACT JS</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Node} alt="Node icon" />
// //           <p className='my-4'>NODE JS</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Express} alt="Express icon" />
// //           <p className='my-4'>EXPRESS JS</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Mongo} alt="MongoDB icon" />
// //           <p className='my-4'>MONGO DB</p>
// //         </div>

// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Unix} alt="Unix icon" />
// //           <p className='my-4'>LINUX</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={freeRTOS} alt="Tailwind icon" />
// //           <p className='my-4'>FreeRTOS</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={Git} alt="GitHub icon" />
// //           <p className='my-4'>GIT</p>
// //         </div>
// //         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4'>
// //           <img className='w-10 mx-auto' src={UBoot} alt="UBoot icon" />
// //           <p className='my-4'>U-BOOT</p>
// //         </div>
// //       </div>
// //     </div>
// //     </div>
// // )
// // }

// // export default Skills;


// import React from 'react';
// import C from '../assets/skills/c.png';
// import JavaScript from '../assets/skills/javascript.png';
// import Sql from '../assets/skills/sql.png';
// import ReactImg from '../assets/skills/react.png';
// import Git from '../assets/skills/git.png';
// import UBoot from '../assets/skills/UBoot.png';
// import Mongo from '../assets/skills/mongo.png';
// import Node from '../assets/skills/node.png';
// import Express from '../assets/skills/express.png';
// import Unix from '../assets/skills/unix.png';
// import CPP from '../assets/skills/c++.png';
// import freeRTOS from '../assets/skills/freeRTOS.png';

// const Skills = () => {
//   return (
//     <div name='skills' className='pt-24 relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>
//       <div className='relative max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
//         <div>
//           <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
//           <p className='py-4'>The technologies I've worked with are:</p>
//         </div>

//         <div className='w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
//           {[
//             { src: C, label: 'C Programming' },
//             { src: CPP, label: 'C++' },
//             { src: JavaScript, label: 'JavaScript' },
//             { src: Sql, label: 'SQL' },
//             { src: ReactImg, label: 'React JS' },
//             { src: Node, label: 'Node JS' },
//             { src: Express, label: 'Express JS' },
//             { src: Mongo, label: 'Mongo DB' },
//             { src: Unix, label: 'Linux' },
//             { src: freeRTOS, label: 'FreeRTOS' },
//             { src: Git, label: 'Git' },
//             { src: UBoot, label: 'U-Boot' },
//           ].map((skill, index) => (
//             <div
//               key={index}
//               className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4 rounded-md'
//             >
//               <img className='w-10 mx-auto' src={skill.src} alt={`${skill.label} icon`} />
//               <p className='my-4 text-sm sm:text-base'>{skill.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;

import React from 'react';
import C from '../assets/skills/c.png';
import JavaScript from '../assets/skills/javascript.png';
import Sql from '../assets/skills/sql.png';
import ReactImg from '../assets/skills/react.png';
import Git from '../assets/skills/git.png';
import UBoot from '../assets/skills/UBoot.png';
import Mongo from '../assets/skills/mongo.png';
import Node from '../assets/skills/node.png';
import Express from '../assets/skills/express.png';
import Unix from '../assets/skills/unix.png';
import CPP from '../assets/skills/c++.png';
import freeRTOS from '../assets/skills/freeRTOS.png';

const Skills = () => {
  return (
    <div name='skills' className='pt-24 relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden px-6'>
      <div className='relative max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full z-10'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>The technologies I've worked with are:</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8'>
          {[
            { src: C, label: 'C Programming' },
            { src: CPP, label: 'C++' },
            { src: JavaScript, label: 'JavaScript' },
            { src: Sql, label: 'SQL' },
            { src: ReactImg, label: 'React JS' },
            { src: Node, label: 'Node JS' },
            { src: Express, label: 'Express JS' },
            { src: Mongo, label: 'Mongo DB' },
            { src: Unix, label: 'Linux' },
            { src: freeRTOS, label: 'FreeRTOS' },
            { src: Git, label: 'Git' },
            { src: UBoot, label: 'U-Boot' },
          ].map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-black bg-opacity-50 pt-4 rounded-md'
            >
              <img className='w-10 mx-auto' src={skill.src} alt={`${skill.label} icon`} />
              <p className='my-4 text-sm sm:text-base'>{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
