import React from 'react'
import bgimg from '../assets/bluw.jpg'
import img from "../assets/Group 2.jpg"
const SliderContent = () => {
    return (
        // <div className='  flex flex-col justify-end items-end  w-full h-[80vh]'>
        // <div className="flex ">
        <div className="hero"
            style={{ backgroundImage: `url(${img})` }}>
            {/* className='min-h-50 w-full flex flex-col h-[70vh]' */}
            <div className='w-100 ml-15 flex  flex-col justify-center items-center h-full'>
                <h3 className='text-lg text-white font-semibold'>SHAPE YOUR CAREER BUILD BETTER TEAM</h3>
                <h1 className='text-5xl text-white font-bold '>EMPOWERING BETTER CAREERS &
                    <span className='text-5xl text-[#2080d3] font-bold ml-4'>BETTER TEAM</span>
                </h1>
                <p className='text-black '>Connecting the right people, fostering collaboration, and creating opportunities for mutual growth
                </p>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default SliderContent