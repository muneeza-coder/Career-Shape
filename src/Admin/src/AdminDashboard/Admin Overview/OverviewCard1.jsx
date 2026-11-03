import React from 'react'

const OverviewCard1 = () => {
    return (
        <div className=' grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mt-3'>

            {/* // <div className='w-full flex flex-wrap gap-3 sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '> */}
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>1248</h3>
                <p className='text-[#6B7391] text-xs'>Total Users</p>
            </div>
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>1020</h3>
                <p className='text-[#6B7391] text-xs'>Job Seekers</p>
            </div>
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>228</h3>
                <p className='text-[#6B7391] text-xs'>Companies</p>
            </div>
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>57</h3>
                <p className='text-[#6B7391] text-xs'>Jobs</p>
            </div>
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>817</h3>
                <p className='text-[#6B7391] text-xs'>Applicants</p>
            </div>
            <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>412</h3>
                <p className='text-[#6B7391] text-xs'>Assessments</p>
            </div>

        </div>
    )
}

export default OverviewCard1