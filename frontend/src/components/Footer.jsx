import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#f8f8f8] absolute mt-[200rem] h-[30rem] w-full border-2 border-black'>
        <div className=' m-[4rem] border-2 border-black h-[25rem]'>
        <div className='flex flex-row'>
        <p className='text-4xl font-extrabold'>TOMATO</p>
        <div className='flex flex-row justify-end border-2 border-black w-[80rem]'>
        <div className='border-2 border-slate-700 p-2 w-[8rem] ml-[3rem]'>India</div>
        <div className='border-2 border-slate-700 p-2 w-[8rem] ml-[3rem]'>English</div>
        </div>
        </div>
        <div className='flex flex-row mt-[4rem] ml-[2rem] items-center justify-center'>
        <div className='border-2 border-black m-[2rem] p-2'>hello</div>
        <div className='border-2 border-black m-[2rem] p-2'>hello</div>
        <div className='border-2 border-black m-[2rem] p-2'>hello</div>
        <div className='border-2 border-black m-[2rem] p-2'>hello</div>
        <div className='border-2 border-black m-[2rem] p-2'>hello</div>
        </div>
        </div>
        
    </div>
  )
}

export default Footer