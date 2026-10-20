import React from 'react'
import Pipcard3 from './Pipcard3'
export const Pip3 = () => {
    return (
        <div className='w-full flex justify-center items-center flex-col gap-5 px-4 sm:px-6 2xl:pl-50  2xl:pr-60 xl:pl-41  xl:pr-37 lg:px-10 md:px-10'>
            <h1 className='text-3xl font-bold text-[#1B2340] text-center'>Looking for a job?</h1>
            <span className='text-[16.5px] text-[#6B7391] font-extralight text-center'>Browse open roles and apply under a minute. You see how well skills match straight away</span>
            <Pipcard3 />
        </div>

    )
}
export default Pip3