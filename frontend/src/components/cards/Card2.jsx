import React from 'react';

const Card2 = (props) => {
  return (
    <div className='relative border-2 border-slate-200 h-[22rem] w-[19rem] ml-[1rem] mt-[1rem] bg-cover text-white bg-center rounded-lg hover:shadow-2xl transform transition-transform hover:scale-105 duration-300' style={{ backgroundImage: `url(${props.url})` }}>
      <div className='absolute inset-0 bg-black bg-opacity-30'></div>
      <div className='flex flex-col h-[20rem] justify-end p-2 relative z-10'>
        <p className='text-xl'>{props.text1}</p>
        <p>{props.text2}</p>
      </div>
    </div>
  );
}

export default Card2;
