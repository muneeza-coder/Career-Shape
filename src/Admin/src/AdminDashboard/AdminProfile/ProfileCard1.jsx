import React from 'react'

const ProfileCard1 = () => {
    return (
        <div className='border  border-gray-300 rounded-xl p-5 flex flex-wrap sm:flex-nowrap justify-between items-center bg-white mt-3 '>

            <div className='flex items-center gap-4 '>
                <span className='rounded-full flex items-center justify-center font-bold text-3xl text-[#432277] bg-[#DBC9F7] p-10 h-10 w-10'>J</span>
                <div className='flex flex-col flex-wrap sm:flex-nowrap'>
                    <h4 className='font-bold text-lg text-[#1B2340]'>Muneeza Zia</h4>
                    <p className='text-[#6B7391] text-[15px] flex flex-wrap'>Platform Administrator Operations</p>
                    <span className='flex gap-1 mt-2 flex-wrap sm:flex-nowrap'>
                        <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-xs'>Administrator</h6>
                        <h6 className='rounded px-2 py-1  bg-[#16B890]/20  text-[#16B890]  text-xs'>Active</h6>
                    </span>
                </div>

            </div>
            <button className=' mt-3 sm:mt-0 ml-23 sm:ml-0 bg-[#3D5AFE] whitespace-nowrap text-[#ffff] active:scale-95 py-3 px-4 text-sm font-semibold rounded-xl'>Edit Profile</button>
        </div>
    )
}

export default ProfileCard1