import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo1.svg'
import { Menu } from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
    const [activebtn, setactivebtn] = useState('signup')
    return (
        //backdrop-blur-md bg-[#F5F6FA]/[99%] that home content move upward but not show in back of navbar
        <nav className='px-2 xl:pl-60 xl:pr-70 py-3 backdrop-blur-md bg-[#F5F6FA]/[99%] items-center flex justify-between border-b-2 border-gray-200 fixed left-0 top-0 w-full z-50 lg:pl-30 lg:pr-35 md:pl-15 md:pr-17.5'>
            <img src={logo} className='w-33 h-17  block'></img>
            <div className='  hidden ml-2 w-full justify-center items-center sm:flex sm:gap-10 sm:w-full sm:justify-center '>
                <NavLink className='text-[#6B7391] font-semibold text-40' to='/'>Home</NavLink>
                <NavLink className='text-[#6B7391] font-semibold text-40 ' to='/company'>Company</NavLink>
                <NavLink className='text-[#6B7391] font-semibold text-40 ' to='/jobseeker'>Job seeker</NavLink>
            </div>
            <div className=' flex gap-1 sm:flex sm:gap-3 '>
                <button onClick={() => {
                    setactivebtn('login')
                }} className={`  rounded-xl font-semibold text-20 px-3 py-1.5 active:scale-95 sm:py-2.5 sm:px-5 sm:text-40 ${activebtn === 'login' ? 'bg-[#3D5AFE] text-[#ffff]' : 'text-[#3D5AFE] bg-[#E8ECFF]'}  active:scale-95`}>Login</button>
                <button onClick={() => {
                    setactivebtn('signup')
                }} className={` rounded-xl font-semibold text-20 px-3 py-1.5 active:scale-95 sm:py-2.5 sm:px-5 sm:text-40 ${activebtn === 'signup' ? 'bg-[#3D5AFE] text-[#ffff]' : 'text-[#3D5AFE] bg-[#E8ECFF]'}`}>Signup</button>
                <button className=' sm:hidden flex  justify-center items-center rounded-xl px-3 py-1 active:scale-95 bg-white'><Menu size={16} strokeWidth={1.5} /></button>
            </div>


        </nav>
    )
}

export default Navbar