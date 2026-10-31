import React from 'react'

const Pipcard3 = () => {
    return (
        <div className='w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl max-w-full border-2 border-[#E4E7F1] flex  flex-col gap-2 justify-center items-center bg-white px-10 p-5' >
                <h3 className='text-xl text-[#1B2340] font-bold'>Frontend Developer</h3>
                <h3 className="text-[#6B7391]">Engineering</h3>
                <div className='flex flex-wrap gap-1'>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>react</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>css</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>typescript</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>testing</span>
                </div>
                <button className=' text-[#fff] w-fit px-6 py-3 rounded-xl text-40 font-semibold bg-[#3D5AFE] active:scale-95 mt-3'>Apply Now</button>
            </div >
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl border-2 border-[#E4E7F1] flex  flex-col gap-2 flex-wrap justify-center items-center bg-white px-10 p-5' >
                <h3 className='text-xl text-[#1B2340] font-bold'>Product Designer</h3>
                <h3 className="text-[#6B7391]">Design</h3>
                <div className='flex flex-wrap gap-1'>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>figma</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>research</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>prototyping</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>ux</span>
                </div>
                <button className=' text-[#fff] w-fit px-6 py-3 rounded-xl text-40 font-semibold bg-[#3D5AFE] active:scale-95 mt-3'>Apply Now</button>
            </div >
            < div className=' hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 rounded-xl border-2 border-[#E4E7F1] flex flex-col gap-2 flex-wrap justify-center items-center bg-white px-10 p-5' >
                <h3 className='text-xl text-[#1B2340] font-bold'>Sales Manager</h3>
                <h3 className="text-[#6B7391]">Sales</h3>
                <div className='flex flex-wrap gap-1'>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>negotiation</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>cm</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>leadership</span>
                    <span className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>b2b</span>
                </div>
                <button className=' text-[#fff] w-fit px-6 py-3 rounded-xl text-40 font-semibold bg-[#3D5AFE] active:scale-95 mt-3'>Apply Now</button>
            </div >
        </div >
    )
}

export default Pipcard3