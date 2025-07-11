import React from 'react';
import VISTEON from "../assets/Companies/Visteon_Logo.jpg";
import IBM from "../assets/Companies/ibm.jpg";

function Experiences() {
  return (
<div name='experience' className='relative w-full min-h-screen text-gray-300 bg-black bg-opacity-60 overflow-hidden'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 max-sm:px-6 z-10'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 z-10'>
            Experience
          </p>
          <p className='pt-6'>Following are the places I've gained experience in the industry:</p>
        </div>
        <div className="relative container mx-auto px-6 flex flex-col space-y-8 overflow-hidden">
          <div className="absolute w-2 h-full bg-gray-400 shadow-md inset-0 left-1/2 transform -translate-x-1/2"></div>

          <div className="flex flex-col sm:flex-row items-center z-10 p-2 w-full shadow-xl shadow-black ">
            <img src={VISTEON} alt="IBM" className="max-w-40 p-5 mr-2 duration-500 md:mr-6" />
            <div className="text-left w-full">
              <div className="bg-white text-[#EA9635] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-left" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>SWE Intern - Visteon Corporation</div>
                <p className='max-sm:text-xs text-sm text-[#3F5656]'>
                  <strong>Jan 2025 - June 2025</strong><br />
                  • Synthesised the Bao hypervisor and configured a dual-guest OS setup on Raspberry Pi, creating an automated ecosystem that eliminated manual data input for Linux-based applications.<br />                 
                  • Developed a FreeRTOS application to interface with a Battery Management System (BMS), enabling real-time updates and live monitoring between the BMS and Linux guest. <br />
                  • Deployed the application within a Linux guest OS, establishing efficient inter-process communication (IPC) for reliable, low-latency data exchange between dual OS guests.<br />
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center w-full z-10 p-2 pb-6 shadow-xl shadow-black">
            <img src={IBM} alt="Softapper" className="max-w-40 p-5 pb-6 m-2 duration-500 md:order-2 md:ml-6" />
            <div className="text-left md:order-1 w-full">
              <div className="bg-white text-[#145EFF] p-6 rounded-md shadow-md mx-auto w-full"
                data-aos="fade-right" data-aos-duration="800" data-aos-once="false">
                <div className='font-bold text-lg'>AI / ML Intern - IBM</div>
                <p className='max-sm:text-xs text-sm text-[#3F5656]'>
                  <strong>June 2024 - July 2024</strong><br />
                  • Developed and integrated AI chatbots using IBM Watsonx.ai across multiple client websites, reducing average response times by 50%.<br />
                  • Trained, tested, and deployed machine learning models, contributing to scalable AI-driven solutions in the agriculture and food delivery sectors.<br />
                  • Collaborated with cross-functional teams to optimize AI deployments, improving customer interaction rates and operational efficiency.<br />
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
