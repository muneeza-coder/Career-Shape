import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from "../assets/logo1.svg"
import { X, Menu } from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
    const navigate = useNavigate()

    const [activebtn, setactivebtn] = useState('signup')
    const [menuopen, setmenuopen] = useState(false)
    return (
        //backdrop-blur-md bg-[#F5F6FA]/[99%] that home content move upward but not show in back of navbar
        // <nav className='px-2 2xl:pl-50 2xl:pr-60 xl:pl-41 xl:pr-36 py-3 backdrop-blur-md bg-[#F5F6FA]/[90%] items-center flex justify-between border-b-2 border-gray-200 fixed left-0 top-0 w-full z-50 lg:pl-8 lg:pr-10 md:pl-10 md:pr-10.5'>
        <nav className='px-2 2xl:pl-50 2xl:pr-60 xl:pl-41 xl:pr-36 py-3 backdrop-blur-md bg-[#F5F6FA]/[90%] items-center flex justify-between border-b-2 border-gray-200 fixed left-0 top-0 w-full z-50 lg:pl-8 lg:pr-10 md:pl-10 md:pr-10.5'>
            <img src={logo} className='w-33 h-17  block'></img>
            <div className='hidden ml-2 w-full justify-center items-center sm:flex sm:gap-10 sm:w-full sm:justify-center '>
                <NavLink className='text-[#6B7391] font-bold text-40' to='/'>Home</NavLink>
                <NavLink className='text-[#6B7391] font-bold text-40 ' to='/company'>Company</NavLink>
                <NavLink className='text-[#6B7391] font-bold text-40 ' to='/jobseeker'>Job seeker</NavLink>
            </div>
            <div className=' flex gap-1 sm:flex sm:gap-3 '>
                <button onClick={() => {
                    navigate("/login")
                    setactivebtn('login')
                }} className={`  rounded-xl font-semibold text-20 px-3 py-1.5 active:scale-95 sm:py-2.5 sm:px-5 sm:text-40 ${activebtn === 'login' ? 'bg-[#3D5AFE] text-[#ffff]' : 'text-[#3D5AFE] bg-[#E8ECFF]'}  active:scale-95`}>Login</button>
                <button onClick={() => {
                    setactivebtn('signup')
                    navigate('/Signup')

                }} className={` rounded-xl font-semibold text-20 px-3 py-1.5 active:scale-95 sm:py-2.5 sm:px-5 sm:text-40 ${activebtn === 'signup' ? 'bg-[#3D5AFE] text-[#ffff]' : 'text-[#3D5AFE] bg-[#E8ECFF]'}`}>Signup</button>
                <button onClick={() => setmenuopen(!menuopen)} className=' sm:hidden flex  justify-center items-center rounded-xl px-3 py-1 active:scale-95 bg-white'>{menuopen ? <X size={16} strokeWidth={1.5} /> : <Menu size={16} strokeWidth={1.5} />}</button>
            </div>
            {menuopen && (
                <div className="absolute top-full left-0 w-full  p-5 flex flex-col gap-4 sm:hidden bg-[#F5F6FA] text-[#6B7391]">
                    <a href="/" className='border-b-1 border-gray-300 font-bold text-40 py-2 flex justify-start items-center'>Home</a>
                    <a href="/company" className='border-b-1 border-gray-300 font-bold text-40 py-2  flex justify-start items-center'>Company</a>
                    <a href="/jobseeker" className='font-bold text-40 py-2  flex justify-start items-center'>Job Seeker</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar