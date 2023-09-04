// import React from 'react'
import logo from './../assets/Images/benner.jpg'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate();
  return (
    <div className='flex justify-between items-center'>
        <img src={logo} className='w-[180px]' />
        <ul className='hidden md:flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer' onClick={()=>navigate('/')}>Home</li>
            <li className='hover:font-bold cursor-pointer'>About Us</li>
            <li className='hover:font-bold cursor-pointer'>Contact Us</li>
        </ul>
        
    </div>
  )
}

export default Header