import React from 'react'
import Profilecard4 from '../AdminProfile/Profilecard4'

const OverviewCard2 = () => {
    return (
        <div className='w-full flex flex-col gap-3 lg:flex-row'>
            <div className='w-full lg:w-1/2  bg-white rounded-xl border border-gray-300 px-4 py-6'>
                <h3 className='text-[#1B2340] text-[16px] font-bold mb-2'>Applications this week</h3>
            </div>
            <div className='w-full lg:w-1/2'>
                <Profilecard4 />
            </div>
        </div>
    )
}

export default OverviewCard2