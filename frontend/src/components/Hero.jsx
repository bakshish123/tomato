import React from 'react'
import bgImg from '../assets/zom-bg.png'; 


const Hero = () => {
  return (
    <div className='h-[30rem] w-full top-0 left-0'  
    style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: '',
        // backgroundPosition: 'center',
       backgroundRepeat:'no-repeat',
        position: 'absolute',
        zIndex:-1, // Set a higher zIndex than your Navbar component
      }}>
        
    <div className='flex justify-center items-center relative mt-[7rem]'>
    <div className='flex flex-col justify-center items-center'>
            <p className='text-white text-7xl font-extrabold font'>TOMATO</p>
            <div className='text-white m-[2%] text-4xl text-center'>Find the best restaurants, cafés and bars in Delhi</div>
            <div className='m-5'>
              
              <input className='h-[3rem] rounded-l-lg w-[15rem]' type="text" />
              <input className='h-[3rem] rounded-r-lg w-[35rem]' type="text" />
            </div>
        </div>
        </div>  
    </div>
  )
}

export default Hero