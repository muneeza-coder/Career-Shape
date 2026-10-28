import React from 'react'

const Profilecard4 = () => {
    return (
        <div className='flex flex-col gap-3 border border-gray-300 px-4 py-6 bg-white rounded-xl'>
            <h3 className='text-[#1B2340] text-[16px] font-bold mb-2'>My recent activities</h3>
            <div className='flex justify-between pb-3 border-b border-gray-300 items-center'>
                <h3 className='text-[16px] text-[#1B2340]'>Approved Nova Studio</h3>
                <p className='text-[#6B7391] text-xs'>2 hours ago</p>
            </div>
            <div className='flex pb-3 justify-between border-b border-gray-300 items-center'>
                <h3 className='text-[16px] text-[#1B2340]'>Removed a flagged job posting</h3>
                <p className='text-[#6B7391] text-xs'>Yesterday</p>
            </div>
            <div className='flex pb-3 justify-between border-b border-gray-300 items-center'>
                <h3 className='text-[16px] text-[#1B2340]'>Reviewd a flagged job posting</h3>
                <p className='text-[#6B7391] text-xs'>2 days ago</p>
            </div>
            <div className='flex pb-3 justify-between  items-center'>
                <h3 className='text-[16px] text-[#1B2340]'>Rejected a company with missing documents</h3>
                <p className='text-[#6B7391] text-xs'>Last week</p>
            </div>
        </div>
    )
}

export default Profilecard4