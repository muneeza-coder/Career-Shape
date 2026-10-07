import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/fm.svg'
const Navbar = () => {
    return (
        <div className=' px-10 py-4 items-center flex justify-between'>
            <img src={logo} className='w-30 h-14  block'></img>
            <div className='flex gap-14'>
                <NavLink className='text-[#19354D] font-bold ' to='/'>Home</NavLink>
                <NavLink className='text-[#19354D] font-bold ' to='/company'>Company</NavLink>
                <NavLink className='text-[#19354D] font-bold ' to='/jobseeker'>Job seeker</NavLink>
            </div>
            <div className='flex gap-5'>
                <button className='  rounded text-[#19354D] px-4 py-2 bg-[#76BEE9] font-semibold'>Login</button>
                <button className='  rounded text-[#19354D] px-4 py-2 bg-[#76BEE9] font-semibold'>Signup</button>


            </div>

        </div>
    )
}

export default Navbar