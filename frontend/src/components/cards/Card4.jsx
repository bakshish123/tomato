import React, { useState } from 'react'

const Card4 = (props) => {
    const [clicked,setClicked] = useState(false);

    const handleChange = () => {
        setClicked(!clicked);
      };
    
  return (
    <div onClick={handleChange} className={clicked?'h-[10rem] w-[80rem] border-2 border-slate-600  m-[2rem] ml-[4rem] rounded-md':'border-2 border-slate-600 h-[5rem] w-[80rem] m-[2rem] ml-[4rem] rounded-md'}>
       <p className='text-2xl m-[1rem] ml-[2rem]'>{props.title}</p>
        <p className={clicked?'flex m-[2rem] text-md':'hidden'}>{props.list}</p>
    </div>
  )
}

export default Card4