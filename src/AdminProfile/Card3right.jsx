import React from 'react'

const Card3right = () => {
    return (
        <div className='w-1/2 flex flex-col  justify-between' >
            <div className='px-4 py-6 flex flex-col gap-3  border border-gray-300 rounded-xl bg-white '>
                <h3 className='text-[#1B2340] text-lg font-bold mb-5'>Account and security</h3>
                <div className='flex justify-between items-center pb-3 border-b border-gray-300'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#1B2340] text-sm font-bold'>Role</h3>
                        <p className='text-[#6B7391] text-xs'>Full platform access</p>
                    </div>
                    <p className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-xs'>Adminsitrator</p>
                </div>
                <div className='border-b border-gray-300  pb-3 flex flex-col gap-1'>
                    <h3 className='text-[#1B2340] text-sm font-bold'>Last login</h3>
                    <p className='text-[#6B7391] text-xs'>28 Oct 2026,21:48</p>
                </div>
                <div className='flex items-center justify-between  pb-3'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-[#1B2340] text-sm font-bold'>Two-Factor Authentication</h3>
                        <p className='text-[#6B7391] text-xs'>Full platform access</p>
                    </div>
                    <input type="checkbox"></input>
                </div>
            </div >
            <div className='px-4 py-6 flex flex-col gap-3  border border-gray-300 rounded-xl bg-white '>
                <h3 className='text-[#1B2340] text-lg font-bold '>Permissions</h3>
                <div className='flex gap-1'>
                    <h6 className='rounded px-2 py-1 bg-[#16B890]/20   text-[#16B890] text-xs'>Verify companies</h6>
                    <h6 className='rounded px-2 py-1 bg-[#16B890]/20    text-[#16B890] text-xs'>Moderate job posting</h6>
                    <h6 className='rounded px-2 py-1 bg-[#16B890]/20  text-[#16B890]  text-xs'>View platform analytics</h6>
                    <h6 className='rounded px-2 py-1 bg-[#16B890]/20   text-[#16B890]  text-xs'>Use AI Agent</h6>

                </div>
            </div>

        </div >
    )
}
export default Card3right