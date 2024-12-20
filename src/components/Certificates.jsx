// import React from 'react';
// import JS from '../assets/Certificates/HackerRankJS.png'
// import PS from '../assets/Certificates/HackerRankPS.png'
// import IBMAI from '../assets/Certificates/IBMAI.jpg'
// import TCS from '../assets/Certificates/TCSiON.jpg'
// import ReactJS from '../assets/Certificates/UdemyReactJS.jpg'
// import IBMAI2 from '../assets/Certificates/AIFundamentals.jpg'

// const Certificates = () => {
//   return (
//     <div name='certificates' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] max-md:px-10 text-gray-300 w-full min-h-screen py-8 pt-20 md:px-10'>
//       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
//         <div className='pb-8'>
//           <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
//             Certifications
//           </p>
//           <p className='py-6'>These are some of the certifications I've recieved : </p>
//         </div>

//         <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
          
//           <div style={{backgroundImage: `url(${ReactJS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <div className='text-xl font-bold text-white tracking-wider text-center'>
//                 Course Completion : React JS
//               </div>
//               <div className='text-xl text-center'>
//                 <i>(Udemy)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href="https://www.udemy.com/certificate/UC-d2e99ccb-4ea2-42b4-b44c-a232bf3412bc/" target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>Verify</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={{backgroundImage: `url(${IBMAI2})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <span className='text-xl font-bold text-white'>
//                 Badge : Artificial Intelligence Fundamentals
//               </span>
//               <div className='text-xl text-center'>
//                 <i>(IBM)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href=" " target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>Verify</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={{backgroundImage: `url(${IBMAI})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <span className='text-xl font-bold text-white tracking-wider text-center'>
//                 Badge : Getting Started with Artificial Intelligence
//               </span>
//               <div className='text-xl text-center'>
//                 <i>(IBM)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href="https://www.credly.com/go/8EdWLh4f" target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>Verify</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={{backgroundImage: `url(${PS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <div className='text-xl font-bold text-white tracking-wider text-center'>
//                 Assessment : Problem Solving
//               </div>
//               <div className='text-xl text-center'>
//                 <i>(HackerRank)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href="https://www.hackerrank.com/certificates/770a3c68cecb" target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>Verify</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={{backgroundImage: `url(${JS})`}} className='shadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <div className='text-xl font-bold text-white tracking-wider text-center'>
//               Assessment : JavaScript
//               </div>
//               <div className='text-xl text-center'>
//                 <i>(HackerRank)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href="https://www.hackerrank.com/certificates/68f5eadcaa81" target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>Verify</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div style={{backgroundImage: `url(${TCS})`}} className='sshadow-xl shadow-black hover:scale-105 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div'>
//             <div className='opacity-0 group-hover:opacity-100 text-center'>
//               <div className='text-xl font-bold text-white tracking-wider text-center'>
//                 Course Completion : Young Professional
//               </div>
//               <div className='text-xl text-center'>
//                 <i>(TCS iON)</i>
//               </div>
//               <div className='pt-8 text-center'>
//                 <a href="https://drive.google.com/file/d/1w4VObVKVfSlycDelJuDwBWjY5RI6BzNF/view" target='new'>
//                   <button className='text-center rounded-xl px-3 py-2 m-2 bg-white text-gray-700 font-bold text-lg hover:scale-95 duration-300'>View</button>
//                 </a>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Certificates;

import React from 'react';
import JS from '../assets/Certificates/HackerRankJS.png';
import PS from '../assets/Certificates/HackerRankPS.png';
import IBMAI from '../assets/Certificates/IBMAI.jpg';
import TCS from '../assets/Certificates/TCSiON.jpg';
import ReactJS from '../assets/Certificates/UdemyReactJS.jpg';
import IBMAI2 from '../assets/Certificates/AIFundamentals.jpg';

const Certificates = () => {
  return (    
    <div name='certificates' className='relative w-full min-h-screen text-gray-300 overflow-hidden'>
    <div className="relative min-h-screen w-full bg-black"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
    {/* Background Floating Blobs
    <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float-slow z-0"></div>
    <div className="absolute top-[10%] right-[10%] w-[35vw] h-[35vw] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float-fast z-0"></div>
    <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-slow z-0"></div>
    <div className="absolute top-[20%] right-[15%] w-[25vw] h-[25vw] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-float-fast z-0"></div>
    <div className="absolute bottom-[5%] left-[20%] w-[20vw] h-[20vw] bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow z-0"></div> */}

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full z-10'>
        <div className='z-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Certifications</p>
          <p className='py-4'>These are some of the certifications I've received:</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 z-10'>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={ReactJS} alt="ReactJS Certificate" />
            <p className='my-4 font-semibold'>React JS (Udemy)</p>
            <a href="https://www.udemy.com/certificate/UC-d2e99ccb-4ea2-42b4-b44c-a232bf3412bc/" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
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
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={PS} alt="Problem Solving Certificate" />
            <p className='my-4 font-semibold'>Problem Solving (HackerRank)</p>
            <a href="https://www.hackerrank.com/certificates/770a3c68cecb" target='new'>
              <button className='text-gray-700 bg-white rounded-md px-4 py-2 mb-2 font-bold hover:scale-95 duration-300'>Verify</button>
            </a>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-105 duration-500 rounded-xl'>
            <img className='w-full h-40 object-cover mx-auto rounded-md' src={JS} alt="JavaScript Certificate" />
            <p className='my-4 font-semibold'>JavaScript (HackerRank)</p>
            <a href="https://www.hackerrank.com/certificates/68f5eadcaa81" target='new'>
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
        </div>
      </div>
      </div>
    </div>
  );
};

export default Certificates;

