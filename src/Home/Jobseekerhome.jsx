// import React from 'react'
// import CompanycardHero from './CompanycardHero'
// import JobseekerCardHero from './JobseekerCardHero'

// const Jobseekerhome = () => {
//     return (

//         <div className='sm:flex sm:justify-between  xl:w-[125vh]  '>
//             < div className='  flex flex-col w-[130vh]' >
//                 <h6 className='bg-[#E8ECFF]  text-[#3D5AFE] w-[18vh] text-sm px-2 py-1 rounded-full flex justify-center font-semibold mb-5'>For Jobseeker</h6>
//                 <h1 className='text-2xl sm:w-[30vh] xl:w-full w-[37vh] mr-5 sm:mr-0 font-extrabold sm:text-3xl xl:text-5xl sm:font-extrabold text-[#1B2340] xl:leading-14 sm:leading-10 flex flex-wrap'>Find a jobs that fits your skills</h1>

//                 <p className='text-[#6B7391] mt-5 sm:text-lg  mr-5 xl:w-full sm:w-[30vh] sm:mr-0 w-[36vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p>
//                 {/* <p className='text-[#6B7391] mt-5 sm:text-lg  mr-3 sm:w-full sm:mr-0 w-[38vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p> */}
//                 <div className='mt-7 flex gap-2'>
//                     <button className='bg-[#E8ECFF]  text-[#3D5AFE] xl:px-6 xl:py-3 px-3 py-1.5 rounded-xl sm:text-40 text-30 font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Browse jobs</button>
//                     <button className=' bg-[#E8ECFF]  text-[#3D5AFE] xl:px-6 xl:py-3 px-3 py-1.5 rounded-xl sm:text-40 text-30  font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
//                 </div>
//             </div >
//             <JobseekerCardHero />
//         </div >
//     )
// }
// //at a time aik button blue raha ga signup or login ma

// export default Jobseekerhome
// import React from 'react'
// import CompanycardHero from './CompanycardHero'
// import JobseekerCardHero from './JobseekerCardHero'

// const Jobseekerhome = () => {
//     return (

//         <div className='w-[full] lg:flex'>
//             < div className='  flex flex-col lg:mr-10' >
//                 <h6 className='bg-[#E8ECFF]  min-[393px]:w-[16vh]  text-[#3D5AFE] w-[19vh]  text-sm px-2 py-1 rounded-full flex justify-center font-semibold mb-5'>For Jobseeker</h6>
//                 {/* <h1 className='  min-[375px]:w-[44vh] w-[45vh] min-[360px]:w-[37vh] md:w-full font-extrabold text-5xl  min-[393px]:w-[38vh] lg:w-[34vh]   text-[#1B2340] flex flex-wrap'>Find a jobs that fits your skills</h1> */}
//                 <h1 className=" min-[375px]:w-[44vh] w-[45vh] min-[360px]:w-[37vh] md:w-full font-extrabold text-5xl  min-[393px]:w-[38vh] lg:w-[34vh]   text-[#1B2340] flex flex-wrap xl:w-[60vh] 2xl:text-6xl 2xl:w-[70vh]">Shape your career around the right role.</h1>
//                 {/* <p className='text-[#6B7391] mt-5 min-[412px]:w-[35vh] min-[375px]:w-[44vh] w-[45vh] lg:w-[30vh]  flex flex-wrap min-[393px]:w-[38vh]  min-[360px]:w-[37vh] md:w-[55vh] md:text-xl'>Browse open roles, apply in under a minute and see your match score and skill gaps straight away.</p> */}
//                 <p className='text-[#6B7391] mt-5  min-[412px]:w-[35vh] min-[375px]:w-[44vh] md:w-[55vh] min-[360px]:w-[37vh] w-[45vh] lg:w-[30vh]   min-[393px]:w-[38vh] flex flex-wrap md:text-xl xl:w-[60vh] 2xl:w-[70vh]'>Browse open roles, apply in under a minute and see your match score and skill gaps straight away.</p>

//                 {/* <p className='text-[#6B7391] mt-5 sm:text-lg  mr-3 sm:w-full sm:mr-0 w-[38vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p> */}
//                 <div className='mt-7 flex gap-2'>
//                     <button className='bg-[#E8ECFF]  text-[#3D5AFE] px-6 py-3  min-[360px]:px-3  rounded-xl font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Browse jobs</button>
//                     <button className=' bg-[#E8ECFF]  text-[#3D5AFE] px-6 py-3 min-[360px]:px-3  rounded-xl   font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
//                 </div>
//             </div >
//             <JobseekerCardHero />
//         </div >
//     )
// }
// //at a time aik button blue raha ga signup or login ma

// export default Jobseekerhome
import React from 'react'
import CompanycardHero from './CompanycardHero'
import JobseekerCardHero from './JobseekerCardHero'

const Jobseekerhome = () => {
    return (

        <div className='w-[full]  flex flex-col justify-center md:flex-row md:justify-between ' >
            < div className='flex flex-col lg:mr-10 xl:mr-10 md:mr-5' >
                <h6 className='bg-[#E8ECFF]  text-[#3D5AFE] text-sm px-2 py-1 rounded-full max-w-32 font-semibold mb-5 flex justify-center '>For Jobseeker</h6>
                <h1 className="font-extrabold text-5xl  text-[#1B2340] flex flex-wrap sm:max-w-4xl md:max-w-2xl  md:text-6xl">Shape your career around the right role.</h1>
                <p className='text-[#6B7391] sm:max-w-4xl md:max-w-xl mt-5 flex flex-wrap'>Browse open roles, apply in under a minute and see your match score and skill gaps straight away.</p>

                {/* <p className='text-[#6B7391] mt-5 sm:text-lg  mr-3 sm:w-full sm:mr-0 w-[38vh] flex flex-wrap'>Browse open roles, apply under a minute and see your match score straight away</p> */}
                <div className='mt-7 flex gap-2'>
                    <button className='bg-[#E8ECFF]  text-[#3D5AFE] px-5 py-3   rounded-xl font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Browse jobs</button>
                    <button className=' bg-[#E8ECFF]  text-[#3D5AFE] px-5 py-3   rounded-xl   font-bold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
                </div>
            </div >
            <JobseekerCardHero />
        </div >
    )
}
//at a time aik button blue raha ga signup or login ma

export default Jobseekerhome