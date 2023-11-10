import React from 'react'
import CardList1 from './cardLists/CardList1'
import CardList2 from './cardLists/CardList2'
import Cardlist3 from './cardLists/Cardlist3'
import GetApp from './GetApp'
import CardList4 from './cardLists/CardList4'

const Section1 = () => {
  return (
    <div className='mt-[25rem] h-[170rem] absolute w-full'>
     <div className='div1 m-[5rem] h-[10rem] flex flex-row justify-center items-center'>
        <CardList1 />
     </div>
     <div className='div2 border-2 border-black m-[2rem] ml-[2rem] mt-[10rem] h-[30rem] border-none'>
        <div>
            <h1 className='text-4xl m-[1rem] ml-[3rem]'>Collections</h1>
        </div>
        <div className='flex'>
            <p className='mr-[24rem] ml-[3rem]'>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
            <a href="/" className='text-red-a400'>All collections in Delhi NCR </a>
        </div>
        <div className='flex flex-row justify-center items-center'>
        <CardList2 />
        </div>
     </div>
     <div className='div3 m-[rem] h-[30rem] w-full'>
      <p className='text-4xl ml-[5rem] flex flex-row'>Popular localities in and around <p className='font-bold ml-[1rem]'> Delhi NCR</p></p>
      <div>
        <Cardlist3 />
      </div>
     </div>
     <div className="div4">
      <GetApp />
     </div>
     <div className='div5 border-2 border-black h-[53rem] w-[full]'>
      <h1 className='text-4xl m-[2rem] ml-[4rem]'>Explore options near me</h1>
    <CardList4 />
     </div>
    </div>
  )
}

export default Section1