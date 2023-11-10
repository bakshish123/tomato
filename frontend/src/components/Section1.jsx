import React from 'react'
import CardList1 from './CardList1'
import CardList2 from './CardList2'

const Section1 = () => {
  return (
    <div className='border-2 border-black mt-[25rem] h-[100rem] absolute w-full'>
     <div className='div1 m-[5rem] h-[10rem] flex flex-row justify-center items-center'>
        <CardList1 />
     </div>
     <div className='div2 border-2 border-black m-[2rem] ml-[2rem] mt-[10rem] h-[20rem] border-none'>
        <div>
            <h1 className='text-4xl m-[1rem] ml-[3rem]'>Collections</h1>
        </div>
        <div className='flex'>
            <p className='mr-[24rem] ml-[3rem]'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            <a href="/" className='text-red-400'>All collections in Delhi NCR </a>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <CardList2 />
        </div>
     </div>
     <div className='div3 border-2 border-black m-[5rem] h-[50rem]'>heyy</div>
    </div>
  )
}

export default Section1