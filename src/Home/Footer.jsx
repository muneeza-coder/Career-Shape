import React from 'react'
import logo from '../assets/logo1.svg'

const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center border-t-1 border-gray-200 py-10'>
            <img src={logo} className='w-40 h-20  block'></img>
            <p className='text-[#6B7391]'>© 2026 Career Shape. Hire with clarity.</p>
        </div>
    )
}

export default Footer