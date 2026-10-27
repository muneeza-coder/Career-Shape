import React from 'react'

const ProfileCard2 = () => {
    return (
        <div className='grid grid-cols-4 gap-3'>
            <div className='border border-gray-300 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-[#1B2340]'>128</h3>
                <p className='text-[#6B7391] text-xs'>Companies verified</p>
            </div>
            <div className='border border-gray-300 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-[#1B2340]'>342</h3>
                <p className='text-[#6B7391] text-xs'>Posting reviewed</p>
            </div>
            <div className='border border-gray-300 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-[#1B2340]'>57</h3>
                <p className='text-[#6B7391] text-xs'>Flags resolved</p>
            </div>
            <div className='border border-gray-300 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-bold text-3xl text-[#1B2340]'>3</h3>
                <p className='text-[#6B7391] text-xs'>Open requests</p>
            </div>

        </div>
    )
}

export default ProfileCard2