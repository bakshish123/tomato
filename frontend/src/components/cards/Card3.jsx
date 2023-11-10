import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-row flex-wrap ml-2'>
        <div className='border-2 border-slate-200 shadow-sm rounded-lg p-2 pl-6 text-xl h-[6rem] w-[25rem] my-2 flex flex-col justify-center items-start hover:shadow-lg'>
        <p>{props.name}</p>
        <p className='text-slate-700 text-lg'>{props.sub}</p>
        </div>
    </div>
  )
}

export default Card