import React from 'react'
import Pipcard2 from './Pipcard2'

const Pip2 = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col gap-5 px-4 sm:px-6 2xl:pl-50  2xl:pr-60 xl:pl-41  xl:pr-37 lg:px-10 md:px-10'>
            <h1 className='text-3xl font-bold text-[#1B2340] text-center'>Everything you need to hire well</h1>
            <span className='text-[16.5px] text-[#6B7391] font-extralight'>Simple tools, no training required </span>
            <Pipcard2 />
        </div>
    )
}

export default Pip2