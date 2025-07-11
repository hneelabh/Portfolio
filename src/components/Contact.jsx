import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='relative w-full h-screen text-gray-300 overflow-hidden bg-black bg-opacity-60 px-10'>
      {/* Contact Form */}
      <div className='flex flex-col justify-center items-center w-full h-full z-10'>
      <form
        method='POST'
        action={import.meta.env.VITE_GETFORM_URL}
        className='flex flex-col max-w-[600px] w-full z-10'
      >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Contact
            </p>
            <p className='py-4'>
              Submit the form below or shoot me an email at hneelabh13@gmail.com
            </p>
          </div>
          <input
            className='bg-[#ccd6f6] text-gray-700 p-2 rounded-lg'
            type="text"
            placeholder='Name'
            name='name'
            required
          />
          <input
            className='bg-[#ccd6f6] text-gray-700 my-4 p-2 rounded-lg'
            type="email"
            placeholder='Email'
            name='email'
            required
          />
          <textarea
            className='bg-[#ccd6f6] text-gray-700 p-2 rounded-lg'
            name='message'
            rows="10"
            placeholder='Message'
            required
          ></textarea>
          <button className='border-y-2 hover:bg-pink-600 hover:border-pink-600 hover:opacity-85 hover:scale-95 duration-300 px-3 py-2 my-8 mx-auto items-center rounded-xl'>
            Let's Connect!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
