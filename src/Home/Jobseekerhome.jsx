import React from 'react'
import CompanycardHero from './CompanycardHero'
import JobseekerCardHero from './JobseekerCardHero'

const Jobseekerhome = () => {
    return (

        <div className='sm:flex sm:justify-between  xl:w-[125vh]  '>
            < div className='  flex flex-col w-[130vh]' >
                <h6 className='bg-[#E8ECFF]  text-[#3D5AFE] w-[18vh] text-sm px-2 py-1 rounded-full flex justify-center font-semibold mb-5'>For Jobseeker</h6>
                <h1 className='text-2xl sm:w-[30vh] xl:w-full w-[37vh] mr-5 sm:mr-0 font-extrabold sm:text-3xl xl:text-5xl sm:font-extrabold text-[#1B2340] xl:leading-14 sm:leading-10 flex flex-wrap'>Find a jobs that fits your skills</h1>

                <p className='text-[#6B7391] mt-5 sm:text-lg  mr-5 xl:w-full sm:w-[30vh] sm:mr-0 w-[36vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p>
                {/* <p className='text-[#6B7391] mt-5 sm:text-lg  mr-3 sm:w-full sm:mr-0 w-[38vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p> */}
                <div className='mt-7 flex gap-2'>
                    <button className='bg-[#E8ECFF]  text-[#3D5AFE] xl:px-6 xl:py-3 px-3 py-1.5 rounded-xl sm:text-40 text-30 font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Browse jobs</button>
                    <button className=' bg-[#E8ECFF]  text-[#3D5AFE] xl:px-6 xl:py-3 px-3 py-1.5 rounded-xl sm:text-40 text-30  font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
                </div>
            </div >
            <JobseekerCardHero />
        </div >
    )
}
//at a time aik button blue raha ga signup or login ma

export default Jobseekerhome