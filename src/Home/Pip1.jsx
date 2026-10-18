import React from 'react'
import Pipcard1 from './Pipcard1'

export const Pip1 = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-5 '>
            <h1 className='text-3xl font-bold text-[#1B2340] text-center'>See your pipeline at a glance</h1>
            <span className='text-[15px] text-[#6B7391] font-extralight'>Every candidate, one board </span>
            <Pipcard1 />
        </div>

    )
}
export default Pip1