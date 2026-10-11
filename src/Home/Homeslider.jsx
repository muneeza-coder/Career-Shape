import React, { useState, useEffect } from 'react'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'

const Homeslider = () => {
    const [slide, setslide] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setslide((prev) => (prev === 0 ? 1 : 0))
        }, 3000)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className='overflow-hidden '>
            <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${slide * 100}%)` }}>
                <div className='min-w-full'><ComanyHome /></div>
                <div className='min-w-full'><Jobseekerhome /></div>
            </div>
            <div className='flex justify-center gap-2 mt-4'>
                <button onClick={() => {
                    setslide(0)
                }} className={`h-3 w-3 rounded-full ${slide == 0 ? 'bg-[#3D5AFE]' : 'bg-gray-300'
                    }`}></button>
                <button onClick={() => {
                    setslide(1)
                }} className={`h-3 w-3 rounded-full ${slide == 1 ? 'bg-[#3D5AFE]' : 'bg-gray-300'
                    }`}></button>
            </div>

        </div>
    )
}

export default Homeslider
