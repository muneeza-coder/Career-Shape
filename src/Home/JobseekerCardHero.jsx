// import React from 'react'

// const JobseekerCardHero = () => {
//     return (

//         <div className='bg-[#ffffff] sm:h-[39vh] xl:h-[43vh] h-full px-5 py-4 w-[35vh] sm:w-[90vh] xl:w-[120vh] rounded-xl xl:ml-15 border-2 border-gray-200 mt-6 sm:mt-0 '>
//             <h6 className='bg-[#E8ECFF]  text-[#3D5AFE] w-[17vh] text-sm px-2 py-1 rounded-full flex justify-center mb-5 font-semibold'>Sample match</h6>
//             <h4 className='text-[30] text-[#1B2340] font-semibold '>Frontend Developer</h4>

//             <h4 className='sm:text-[30] text-[#6B7391] sm:w-full text-[20] flex '>Your skills vs what the job need</h4>
//             <div className='flex gap-2 mt-4 xl:flex-nowrap flex-wrap sm:flex-wrap'>
//                 <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>react</h6>
//                 <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>css</h6>
//                 <h6 className='rounded px-2 py-1 bg-[#81f6d785] text-[#16B890]  text-sm'>typescript</h6>
//                 <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>testing</h6>
//             </div>
//             <div className='w-[30vh] xl:w-full sm:w-full bg-gray-100 h-[1vh] xl:h-[2vh] mt-4 rounded-full mr-5 sm:mr-0'>
//                 <div className='w-[20vh] xl:w-[40vh] sm:w-[13vh] h-full bg-[#16B890] rounded-l-full'></div>
//             </div>
//             <div className='flex items-center mt-4'>
//                 <h4 className='text-[#1B2340] font-bold  text-lg'>75% match </h4>
//                 <h4 className='text-sm text-[#6B7391] ml-2'>Skill to build:testing</h4>
//             </div>
//             <button className=' text-[#fff] px-6 py-3 rounded-xl text-40 font-semibold bg-[#3D5AFE] active:scale-95 mt-3'>Apply Now</button>

//         </div>
//     )
// }

// export default JobseekerCardHero


import React from 'react'

const JobseekerCardHero = () => {
    return (

        // <div className='bg-[#ffffff] lg:h-[25vh] min-[375px]:w-[46vh] min-[412px]:w-[36vh] h-full px-5 py-4 w-[46vh] min-[393px]:w-[38vh] md:w-[53vh] min-[360px]:w-[37vh] rounded-xl  border-2 border-gray-200 mt-6 lg:py-6'>
        <div className='bg-[#ffffff]  h-full px-5 py-4 max-w-5xl w-full md:w-1/2  rounded-xl  border-2 border-gray-200 mt-6 lg:py-6 flex flex-col gap-3'>
            <h6 className='bg-[#E8ECFF]  text-[#3D5AFE] max-w-32 text-sm px-2 py-1 rounded-full flex justify-center font-semibold '>Sample match</h6>
            <h4 className=' text-[#1B2340] font-semibold '>Frontend Developer</h4>

            <h4 className=' text-[#6B7391] sm:w-full  flex '>Your skills vs what the job need</h4>
            <div className='flex gap-2  xl:flex-nowrap flex-wrap sm:flex-wrap'>
                <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>react</h6>
                <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>css</h6>
                <h6 className='rounded px-2 py-1 bg-[#81f6d785] text-[#16B890]  text-sm'>typescript</h6>
                <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>javascript</h6>
            </div>
            <div className='max-w-xl  bg-gray-100  h-[2vh]   rounded-full '>
                <div className='w-3/4 h-full bg-[#16B890] rounded-l-full'></div>
            </div>
            <div className='flex items-center '>
                <h4 className='text-[#1B2340] font-bold  text-lg'>75% match </h4>
                <h4 className='text-sm text-[#6B7391] ml-2'>Skill to build:javascript</h4>
            </div>
            <button className=' text-[#fff] w-fit px-6 py-3 rounded-xl text-40 font-semibold bg-[#3D5AFE] active:scale-95 mt-3'>Apply Now</button>

        </div>
    )
}

export default JobseekerCardHero