import React from 'react'
import ModerateCard from './ModerateCard'

const AdminModerate = () => {
    return (
        <div className='flex flex-col px-8 py-20 gap-4 w-full mb-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-bold text-2xl text-[#1B2340]'>Moderate</h3>
                <p className='text-[#6B7391] text-[15px]'>AI recommends.You decide every action</p>
            </div>
            <ModerateCard />
        </div>
    )
}

export default AdminModerate