import React, { useState } from 'react';

const GetApp = () => {
  const [email, setEmail] = useState(true);
  const [number, setNumber] = useState(false);

  const handleClick = (type) => {
    if (type === 'email') {
      setEmail(true);
      setNumber(false);
    } else if (type === 'number') {
      setEmail(false);
      setNumber(true);
    }
  };

  return (
    <div className='h-[35rem] w-full bg-[#fffbf7] flex justify-center items-center'>
      <div>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
          alt=""
          className='h-[20rem] w-[18rem]'
        />
      </div>
      <div className='flex flex-col h-[30rem] m-[3rem]'>
        <h1 className='text-5xl mt-[2rem]'>Get the Zomato app</h1>
        <p className='text-2xl mt-[2rem] mb-[2rem]'>We will send you a link, open it on your phone to download <br /> the app</p>
        <div className='flex flex-row text-xl'>
          <div className='mr-[1rem] mt-3'>
            <input
              type='radio'
              name='contactMethod'
              onClick={() => handleClick('email')}
              checked={email}
            />
            Email
          </div>
          <div className='ml-[3rem] mt-3'>
            <input
              type='radio'
              name='contactMethod'
              onClick={() => handleClick('number')}
              checked={number}
            />
            Phone
          </div>
        </div>
        <div className='flex flex-row mt-[1rem] mb-[1rem]'>
          <input
            type='email'
            className={email ? 'flex h-[3rem] w-[20rem] bg-slate-200 p-2 rounded-md' : 'hidden'}
            placeholder='Email'
          />
          <input
            type='number'
            className={number ? 'flex h-[3rem] w-[20rem] bg-slate-200 p-2 rounded-md' : 'hidden'}
            placeholder='Phone Number'
          />
          <button className='bg-red-400 text-white hover:bg-red-600 ml-[1rem] rounded-md p-2'>Share App Link</button>
        </div>
        <p className='text-lg'>Download app from</p>
        <div className='flex flex-row p-0'>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className='w-[200px] h-[85px] hover:opacity-80 transition-opacity'
            />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="Download on the App Store"
              className='w-[200px] h-[60px] ml-2 mt-3 hover:opacity-80 transition-opacity'
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetApp;
