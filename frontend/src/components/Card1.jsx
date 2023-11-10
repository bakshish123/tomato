import React from 'react'

const Card1 = (props) => {
  return (
   
      <div className='border-2 border-slate-200 h-[16rem] w-[25rem] m-[1rem] bg-cover bg-center rounded-xl hover:shadow-2xl transform transition-transform hover:scale-105 duration-300' style={{ backgroundImage: `url(${props.url})` }}>            
      <div className='h-[16rem] flex items-end justify-center'>
      <div className='bg-white w-[25rem] rounded-b-xl border-b-slate-200'>
            <p className='text-2xl p-2'>{props.title}</p>
        <p className='p-2 border-b-gray-700 rounded-b-lg'>{props.description}</p>
        </div>
        </div>
        </div>
        
  
  )
}

export default Card1