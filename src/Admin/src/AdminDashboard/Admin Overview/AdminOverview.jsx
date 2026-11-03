import React from 'react'
import OverviewCard1 from './OverviewCard1'
import OverviewCard2 from './OverviewCard2'

const AdminOverview = () => {
    return (
        <div className='flex flex-col px-8 py-20 gap-4 mb-20 md:mb-0 md:ml-60 '>
            <h3 className='font-bold text-2xl text-[#1B2340]'>Platform Overview</h3>
            <OverviewCard1 />
            <OverviewCard2 />
        </div>
    )
}

export default AdminOverview