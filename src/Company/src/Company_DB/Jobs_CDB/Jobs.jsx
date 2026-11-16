import React from 'react'
import JobList from './Joblist.jsx'
const Job=()=>{
    return(
        <div  className=' w-full px-10 pt-14 pb-25 flex flex-col gap-5  '>
            <div className="bg-transparent w-full flex flex-col sm:flex-row justify-between gap-2 sm:gap-0"> 
                 <div  className='  flex flex-col justify-start gap-2  '>
                    <h1 className='text-3xl text-[#1B2340] font-bold'>Jobs</h1>
                    <h4 className=' text-[#6B7391]'>Role you are hiring for.</h4>
                 </div>
                 <div className=' flex flex-col justify-center'>
                    <button className=" w-fit bg-[#3D5AFE] text-white  px-4 py-3 rounded-xl  text-sm font-semibold  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95">Post a job</button>
                 </div>
            </div>
            <div className="bg-white w-full rounded-xl border border-gray-200 flex flex-col ">
                <JobList/>
            </div>
        </div>
    )
}
export default Job