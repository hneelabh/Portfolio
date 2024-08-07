import React from 'react';
import CFCS2R from "../assets/Companies/cfcs2r.png";
import IBM from "../assets/Companies/ibm.jpg";
import SOFTAPPER from "../assets/Companies/softapper.png";

function Experiences() {
  return (
    <div name='experience' className='bg-gradient-to-r from-[#0F0C29] to-[#302B63] text-gray-300 w-full min-h-screen py-8 pt-20 md:px-10'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 max-sm:px-6'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>
            Experience
          </p>
          <p className='pt-6'>Following are the places I've gained work experience:</p>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
          <div className="absolute w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col md:flex-row items-center p-2 z-10 w-full shadow-xl shadow-black ">
            <img src={CFCS2R} alt="CFCS2R" className="max-w-40 p-5 duration-500 md:order-2 md:ml-6" />
            <div className="text-center md:text-left md:order-1 w-full">
              <div className="bg-white text-[#0E67B4] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>Cyber Security Intern - CFCS2R</div>
                <p className='max-sm:text-xs text-sm text-left'>
                  <strong>July 2024 - Present</strong><br />
                  • Implemented security measures to protect Windows systems from vulnerabilities and threats.<br/>
                  • Acquired understanding of networking principles to build secure communication channels.<br/>
                  • Investigated digital evidence to combat cybercrimes and developed skills to manage them efficiently.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
            <img src={IBM} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
            <div className="text-left w-full">
              <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>AI Research Intern - IBM Skillsbuild</div>
                <p className='max-sm:text-xs text-sm'>
                  <strong>June 2024 - July 2024</strong><br />
                  • Built and integrated chat bots using watsonx.ai in multiple websites, reducing response times by 50%.<br />
                  • Trained, tested and deployed machine learning models for various industries.<br />
                  • Collaborated with cross-functional teams to deliver AI solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full z-10 p-2 pb-6 shadow-xl shadow-black">
            <img src={SOFTAPPER} alt="Softapper" className="max-w-40 p-5 pb-6 m-2 duration-500 md:order-2 md:ml-6" />
            <div className="text-left md:order-1 w-full">
              <div className="bg-[#E6E6E6] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg text-[#3F5656]'>Full Stack Developer - Softapper Tech Solutions</div>
                <p className='text-[#bb4343] max-sm:text-xs text-sm'>
                  <strong className='text-[#3F5656]'>May 2024 - June 2024</strong><br />
                  • Built a fullstack blogging web-app using MERN Stack, ensured robustness by encrypting sensitive data.<br />
                  • Integrated a rich text-editor using react-quill for blog post customization.<br />
                  • Optimized homepage to display the 20 most recent posts, improving UX by preventing endless scrolling.
                </p>
              </div>
            </div>
          </div>
          <div></div>

        </div>
      </div>
    </div>
  );
}

export default Experiences;
