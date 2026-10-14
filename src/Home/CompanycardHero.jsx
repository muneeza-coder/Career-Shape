import React from 'react'

const CompanycardHero = () => {
    return (
        <div className='bg-[#ffffff] xl:h-[43vh] sm:h-[39vh] h-full px-5 py-4 w-[35vh] lg:w-[50vh] sm:w-[90vh] xl:w-[120vh] rounded-xl xl:ml-15 sm:ml-15  border-2 border-gray-200 mt-6 sm:mt-0 lg:ml-0 lg:mr-10 '>
            <h3 className='text-lg text-[#1B2340] font-bold'>Try the AI match</h3>
            < h4 className='text-[30] text-[#6B7391] ' > Job: Frontend Developer Type a candidate's skills</h4>
            < div className='flex gap-2 mt-4 flex-wrap xl:flex-nowrap sm:flex-wrap' >
                <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>react</h6>
                <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>css</h6>
                <h6 className='rounded px-2 py-1 bg-[#E8ECFF]  text-[#3D5AFE] text-sm'>typescript</h6>
                <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>javascript</h6>
            </div >
            <p className='text-[#1B2340] font-bold mt-4 text-sm'>Candidate Skills</p>
            <p className='w-full bg-gray-100 px-3 py-3 mt-2 rounded-xl text-[#1B2340]'>react,css</p>
            <div className='w-[30vh] sm:w-full  bg-gray-100  h-[1vh] xl:h-[2vh] mt-4 rounded-full mr-5 sm:mr-0'>
                <div className='w-1/2 h-full bg-[#16B890] rounded-l-full'></div>
            </div>
            <div className='flex items-center mt-4 leading-none'>
                <h4 className='text-[#1B2340] font-bold  xl:text-lg sm:text-sm'>50% skill match </h4>
                <h4 className='text-sm text-[#6B7391] sm:ml-2 ml-1.5 '> 2 of 4 required skills</h4>
            </div>
        </div >
    )
}

export default CompanycardHero