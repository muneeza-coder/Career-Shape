// import React from 'react'

// const Card3left = () => {
//     return (
//         <div className='w-1/2 flex flex-col px-4 py-5 gap-5 bg-white rounded-xl border  border-gray-300'>
//             <h3 className='text-[#1B2340]'>Personal Information</h3>
//             <div className='flex justify-between '>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>Full name</h6>
//                     <p className='text-[#6B7391]'>Muneeza Zia</p>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>Email</h6>
//                     <p className='text-[#6B7391]'>muneeza</p>
//                 </div>
//             </div>
//             <div className='flex justify-between '>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>Job title</h6>
//                     <p className='text-[#6B7391]'>Platform Administrator</p>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>Department</h6>
//                     <p className='text-[#6B7391]'>Operations</p>
//                 </div>
//             </div>
//             <div className='flex justify-between '>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>Phone</h6>
//                     <p className='text-[#6B7391]'>Not added</p>
//                 </div>
//                 <div className='flex flex-col gap-3'>
//                     <h6 className='text-[#1B2340]'>City</h6>
//                     <p className='text-[#6B7391]'>Not added</p>
//                 </div>
//             </div>
//             <div>
//                 <h6 className='text-[#1B2340]'>About</h6>
//                 <p className='text-[#6B7391]'>Reviews company verifications and keeps job posting safe</p>
//             </div>
//         </div>
//     )
// }

// export default Card3left
import React from 'react'

const Card3left = () => {
    return (
        <div className='w-full lg:w-1/2 flex flex-col px-4 py-6 gap-8 bg-white rounded-xl border  border-gray-300'>
            <h3 className='text-[#1B2340] text-lg font-bold '>Personal Information</h3>
            <div className='flex  justify-between xl:gap-50 xl:justify-start'>
                <div className='flex flex-col gap-12 '>
                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340]  text-sm font-bold'>Full name</h6>
                        <p className='text-[#1B2340] text-sm'>Muneeza Zia</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340] font-bold text-sm'>Job title</h6>
                        <p className='text-[#1B2340] text-sm'>Platform Administrator</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340] font-bold text-sm'>Phone</h6>
                        <p className='text-[#1B2340] text-sm'>Not added</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>

                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340] font-bold text-sm'>Email</h6>
                        <p className='text-[#1B2340] text-sm'>muneeza</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340] font-bold text-sm'>Department</h6>
                        <p className='text-[#1B2340] text-sm'>Operations</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className='text-[#1B2340] font-bold text-sm'>City</h6>
                        <p className='text-[#1B2340] text-sm'>Not added</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-3 mt-3'>
                <h6 className='text-[#1B2340] text-sm font-bold'>About</h6>
                <p className='text-[#1B2340] text-sm'>Reviews company verifications and keeps job posting safe</p>
            </div>
        </div>
    )
}

export default Card3left