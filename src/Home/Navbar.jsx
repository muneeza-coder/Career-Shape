import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.svg'
const Navbar = () => {
    return (
        <div className=' py-4 items-center flex justify-between ml-64 mr-64'>
            <img src={logo} className='w-30 h-14  block'></img>
            <div className='flex gap-14'>
                <NavLink className='text-[#6B7391] font-semibold text-40' to='/'>Home</NavLink>
                <NavLink className='text-[#6B7391] font-semibold text-40 ' to='/company'>Company</NavLink>
                <NavLink className='text-[#6B7391] font-semibold text-40 ' to='/jobseeker'>Job seeker</NavLink>
            </div>
            <div className='flex gap-5'>
                {/* <button className='  rounded text-[#19354D] px-4 py-2 bg-[#76BEE9] font-semibold'>Login</button>
                <button className='  rounded text-[#19354D] px-4 py-2 bg-[#76BEE9] font-semibold'>Signup</button> */}
                <button className="bg-[#3D5AFE] text-white rounded-xl font-semibold text-40 px-5 py-2.5 active:scale-95">Login</button>
                <button className="bg-[#3D5AFE] text-white rounded-xl font-semibold text-40 px-5 py-2.5 active:scale-95">Signup</button>
            </div>

        </div>
    )
}

export default Navbar