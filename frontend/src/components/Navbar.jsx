import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-end text-white'>
        <ul className='flex flex-row'>
            <li className='m-4 p-4 text-bold'>Add restaurant</li>
            <li className='m-4 p-4 text-bold'>Login</li>
            <li className='m-4 p-4 text-bold'>Sign Up</li>
        </ul>

    </div>
  )
}

export default Navbar