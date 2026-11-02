import React from 'react'
import Pipcard4 from './Pipcard4'
import { useContext } from 'react'
import { HomeContextSection } from './HomeContext/HomeContext'

const Pip4 = () => {
    const { sections } = useContext(HomeContextSection)
    return (
        <div ref={sections.work} className=' scroll-mt-24 w-full flex justify-center items-center flex-col gap-5 px-4 sm:px-6 2xl:pl-50  2xl:pr-60 xl:pl-41  xl:pr-37 lg:px-10 md:px-10'>
            <h1 className='text-3xl font-bold text-[#1B2340] text-center'>How it works</h1>
            <span className='text-[16.5px] text-[#6B7391] font-extralight'>From open role to signed offer in three steps </span>
            <Pipcard4 />
        </div>
    )
}

export default Pip4