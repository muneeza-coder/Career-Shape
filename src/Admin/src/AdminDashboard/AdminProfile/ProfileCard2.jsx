import React from 'react'

const ProfileCard2 = () => {
    return (
        // <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 '>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 '>

            {/* // <div className='w-full flex flex-wrap gap-3 sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 '> */}
            <div className='border border-gray-300 p-5  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>128</h3>
                <p className='text-[#6B7391] text-xs'>Companies verified</p>
            </div>
            <div className='border border-gray-300 p-5  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>342</h3>
                <p className='text-[#6B7391] text-xs'>Posting reviewed</p>
            </div>
            <div className='border border-gray-300 p-5  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>57</h3>
                <p className='text-[#6B7391] text-xs'>Flags resolved</p>
            </div>
            <div className='border border-gray-300 p-5  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
                <h3 className='font-extrabold text-3xl text-[#1B2340]'>3</h3>
                <p className='text-[#6B7391] text-xs'>Open requests</p>
            </div>

        </div>
    )
}

export default ProfileCard2