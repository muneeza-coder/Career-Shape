import React from 'react'

const Pipcard4 = () => {
    return (
        <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 py-5 items-center bg-white px-10 p-5' >
                <span className='flex justify-center items-center w-4 h-4 p-4 font-bold rounded-full bg-[#3D5AFE] text-white text-lg '>1</span>
                <h3 className='text-xl text-[#1B2340] font-bold'>Add a job</h3>
                <p className='text-center  text-[#6B7391]'>List the role and the skills it need</p>
            </div >
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 py-5 items-center bg-white px-10 p-5' >
                <span className='flex justify-center items-center w-4 h-4 p-4 font-bold rounded-full bg-[#3D5AFE] text-white text-lg '>2</span>
                <h3 className='text-xl text-[#1B2340] font-bold'>Add candidates</h3>
                <p className='text-center  text-[#6B7391]'>Enter their skills and experience</p>
            </div >
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 py-5 items-center bg-white px-10 p-5' >
                <span className='flex justify-center items-center w-4 h-4 p-4 font-bold rounded-full bg-[#3D5AFE] text-white text-lg '>3</span>
                <h3 className='text-xl text-[#1B2340] font-bold text-center'>Hire with confidence</h3>
                <p className='text-center  text-[#6B7391]'>Follow the scores and move people forward</p>
            </div >

        </div >
    )
}

export default Pipcard4