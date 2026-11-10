import React from 'react'
import CardUpload from './CardUpload'

const SplashCard = () => {
    return (
        <div className='flex flex-col border border-gray-200 w-[72%] rounded-xl bg-white h-[30%] shadow-xl shadow-[#4A3AFF]/20'>
            <div className='border-b border-gray-200 p-4 flex gap-5 items-center'>
                <div className='flex gap-2  '>
                    <div className='h-2.5 w-2.5 bg-red-500 rounded-full ' ></div>
                    <div className='h-2.5 w-2.5 bg-yellow-500 rounded-full '></div>
                    <div className='h-2.5 w-2.5 bg-green-500 rounded-full '></div>
                </div>
                <p className='text-[#6B7391] text-xs font-bold'>One CV, one smart flow</p>
            </div>
            <div className='w-full flex justify-center items-center h-full'>
                <CardUpload />
            </div>

        </div>
    )
}

export default SplashCard