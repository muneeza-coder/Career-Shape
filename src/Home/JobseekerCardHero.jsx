import React from 'react'

const JobseekerCardHero = () => {
    return (
        <div className='bg-[#ffffff] h-[40vh] px-5 py-4 w-[100vh] rounded-xl ml-10 border-2 border-gray-200'>
            <h3 className='text-lg text-[#1B2340] font-bold'>Try the AI match</h3>
            <h4 className='text-[30] text-[#6B7391] '>Job: Frontend Developer Type a candidate's skills</h4>
            <div className='flex gap-2 mt-4'>
                <h6 className='rounded px-2 py-1 h-[4vh] bg-[#81f6d785] text-[#16B890] text-sm'>react</h6>
                <h6 className='rounded px-2 py-1 h-[4vh] bg-[#81f6d785] text-[#16B890] text-sm'>css</h6>
                <h6 className='rounded px-2 py-1 bg-[#dbd8ff9c] text-[#3D5AFE] text-sm'>typescript</h6>
                <h6 className='rounded px-2 py-1 bg-[#dbd8ff9c]  text-[#3D5AFE] text-sm'>javascript</h6>
            </div>
            <p className='text-[#1B2340] font-bold mt-4 text-sm'>Candidate Skills</p>
            <p className='w-full bg-gray-100 px-3 py-3 mt-2 rounded-xl text-[#1B2340]'>react,css</p>
            <div className='w-full  bg-gray-100 h-[2vh] mt-4 rounded-full'>
                <div className='w-1/2 h-full bg-[#16B890] rounded-l-full'></div>
            </div>
            <div className='flex items-center mt-4'>
                <h4 className='text-[#1B2340] font-bold  text-lg'>50% skill match </h4>
                <h4 className='text-sm text-[#6B7391] ml-2'>2 of 4 required skills</h4>
            </div>
        </div>
    )
}

export default JobseekerCardHero