import React from 'react'
import CompanycardHero from './CompanycardHero'
import JobseekerCardHero from './JobseekerCardHero'

const Jobseekerhome = () => {
    return (
        //for mobiles  ml-48 mr-48
        <div className='flex justify-between  h-[65vh] w-[125vh] ml-60 mt-35'>
            < div className=' h-full flex flex-col w-[130vh]' >
                <h6 className='bg-[#DBD8FF] text-[#3D5AFE] w-[15vh] text-sm px-2 py-1 rounded-full flex justify-center font-semibold mb-5'>For companies</h6>
                <h1 className='text-5xl font-extrabold text-[#1B2340] linespace-1.5 leading-12'>Shape your team around the right people</h1>
                <p className='text-[#6B7391] mt-5 text-lg'>Career Shape helps small teams post jobs, track candidates and see who fits best, uisng AI skill matching</p>
                <div className='mt-7 flex gap-2'>
                    <button className='bg-[#DBD8FF] text-[#3D5AFE] px-6 py-3 rounded-xl text-40 font-semibold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Start hiring</button>
                    <button className=' bg-[#DBD8FF] text-[#3D5AFE] px-6 py-3 rounded-xl text-40 font-semibold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
                </div>
            </div >
            <CompanycardHero />
        </div >
    )
}

export default Jobseekerhome