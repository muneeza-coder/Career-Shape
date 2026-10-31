import React from 'react'

const Pipcard5 = () => {
    return (
        <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 justify-center items-center bg-white p-5 ' >
                <span className='flex justify-center items-center w-full  bg-[#E8ECFF] text-5xl py-10 rounded-xl mb-2'>🚀</span>
                <h3 className='text-xl text-[#1B2340] font-bold'>Startups</h3>
                <h3 className="text-[#6B7391]">Fill your first role fast</h3>
            </div >
            < div className='hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 justify-center items-center bg-white p-5 ' >
                <span className='flex justify-center items-center w-full  bg-[#DDF7EF] text-5xl py-10 rounded-xl mb-2'>🏢</span>
                <h3 className='text-xl text-[#1B2340] font-bold'>Agencies</h3>
                <h3 className="text-[#6B7391]">Track many roles and people</h3>
            </div >
            < div className='hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 justify-center items-center bg-white p-5 ' >
                <span className='flex justify-center items-center w-full  bg-[#FFF1D6] text-5xl py-10 rounded-xl mb-2'>🤝</span>
                <h3 className='text-xl text-[#1B2340] font-bold'>HR teams</h3>
                <h3 className="text-[#6B7391]">Keep every stage organized</h3>
            </div >


        </div >
    )
}

export default Pipcard5