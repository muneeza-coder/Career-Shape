// import React from 'react'

// const CompanycardHero = () => {
//     return (
//         <div className='bg-[#ffffff] xl:h-[43vh] sm:h-[39vh] h-full px-5 py-4 w-[35vh] lg:w-[50vh] sm:w-[90vh] xl:w-[120vh] rounded-xl xl:ml-15 sm:ml-15  border-2 border-gray-200 mt-6 sm:mt-0 lg:ml-0 lg:mr-10 '>
//             <h3 className='text-lg text-[#1B2340] font-bold'>Try the AI match</h3>
//             < h4 className='text-[30] text-[#6B7391] ' > Job: Frontend Developer Type a candidate's skills</h4>
//             < div className='flex gap-2 mt-4 flex-wrap xl:flex-nowrap sm:flex-wrap' >
//                 <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>react</h6>
//                 <h6 className='rounded px-2 py-1  bg-[#81f6d785] text-[#16B890] text-sm'>css</h6>
//                 <h6 className='rounded px-2 py-1 bg-[#E8ECFF]  text-[#3D5AFE] text-sm'>typescript</h6>
//                 <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>javascript</h6>
//             </div >
//             <p className='text-[#1B2340] font-bold mt-4 text-sm'>Candidate Skills</p>
//             <p className='w-full bg-gray-100 px-3 py-3 mt-2 rounded-xl text-[#1B2340]'>react,css</p>
//             <div className='w-[30vh] sm:w-full  bg-gray-100  h-[1vh] xl:h-[2vh] mt-4 rounded-full mr-5 sm:mr-0'>
//                 <div className='w-1/2 h-full bg-[#16B890] rounded-l-full'></div>
//             </div>
//             <div className='flex items-center mt-4 leading-none'>
//                 <h4 className='text-[#1B2340] font-bold  xl:text-lg sm:text-sm'>50% skill match </h4>
//                 <h4 className='text-sm text-[#6B7391] sm:ml-2 ml-1.5 '> 2 of 4 required skills</h4>
//             </div>
//         </div >
//     )
// }

// export default CompanycardHero
// import React from 'react'
// import companypic from "../assets/companypic.jfif"
// const CompanycardHero = () => {
//     return (
//         <div className='w-full md:w-1/2 mt-3 flex flex-col justify-center relative '>
//             <div id="floatdiv" className='w-13 h-13 rounded-full  absolute  bg-[#16B890]/[60%] blur-[3px]  top-0 left-110'></div>
//             <div id="floatdiv2" className='w-10 h-10 rounded-full bg-[#3D5AFE]/[60%] blur-[3px] absolute top-80 right-125'></div>


//             {/* <img src={jobseekerpic} className='rounded-3xl w-150 cover h-80 absolute top-0'></img> */}
//             <div
//                 style={{ backgroundImage: `url(${companypic})` }}
//                 className="bg-cover  md:w-[90%] h-60 absolute top-7 right-13 rounded-xl"
//             >
//             </div>
//             <div></div>
//             <div className='bg-[#ffffff]  h-[76%] blur-[0.3px] shadow-2xl shadow-gray-200  px-5 py-4 max-w-5xl absolute left-3 top-60  w-[80%]  md:w-[87%] rounded-xl  border-2 border-gray-200 lg:py-6 flex flex-col gap-3'>

//                 <h3 className='text-lg text-[#1B2340] font-bold'>Try the AI match</h3>
//                 < h4 className=' text-[#6B7391] ' > Job: Frontend Developer Type a candidate's skills</h4>
//                 < div className='flex gap-2  flex-wrap xl:flex-nowrap sm:flex-wrap' >
//                     <h6 className='rounded px-2 py-1   bg-[#16B890]/20  text-[#16B890] text-sm'>react</h6>
//                     <h6 className='rounded px-2 py-1   bg-[#16B890]/20  text-[#16B890] text-sm'>css</h6>
//                     <h6 className='rounded px-2 py-1 bg-[#E8ECFF]  text-[#3D5AFE] text-sm'>typescript</h6>
//                     <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>javascript</h6>
//                 </div >
//                 <p className='text-[#1B2340] font-bold  text-sm'>Candidate Skills</p>
//                 <p className='w-full bg-gray-100 px-3 py-3  rounded-xl text-[#1B2340]'>react,css</p>
//                 <div className='max-w-xl  bg-gray-100  h-[2vh]   rounded-full '>
//                     {/* <div className='w-1/2 h-full bg-[#16B890] rounded-l-full'></div> */}
//                     <div style={{ background: "linear-gradient(to right,#3D5AFE, #16B890)" }} className='shadow-[0_0_1px_#3D5AFE] w-1/2 h-full rounded-l-full'></div>

//                 </div>
//                 <div className='flex items-center leading-none'>
//                     <h4 className='text-[#1B2340] font-bold text-lg '>50% skill match </h4>
//                     <h4 className='text-sm text-[#6B7391] sm:ml-2 ml-1.5 '> 2 of 4 required skills</h4>
//                 </div>
//             </div >
//         </div>
//     )
// }

// export default CompanycardHero
import React from 'react'
import companypic from "../assets/companypic.jfif"
const CompanycardHero = () => {
    return (
        <div id="companycard" className='w-full md:w-1/2 mt-3 flex flex-col justify-center relative '>
            <div id="floatdiv" className='w-13 h-13 rounded-full  absolute  bg-[#16B890]/[60%] blur-[3px]  top-0 right-0.5 md:right-5 lg:r'></div>
            <div id="floatdiv2" className='sm:w-10 sm:h-10 h-7 w-7 rounded-full bg-[#3D5AFE]/[60%] blur-[3px] absolute top-80 md:top-80 sm:top-100 left-0 sm:left-1 md:-left-5 '></div>


            {/* <img src={jobseekerpic} className='rounded-3xl w-150 cover h-80 absolute top-0'></img> */}
            <div
                style={{ backgroundImage: `url(${companypic})` }}
                className="bg-cover w-full xl:w-[90%] h-60 sm:h-80 md:h-60 absolute top-7 md:right-5 xl:right-13 rounded-xl"
            >
            </div>

            <div className='bg-[#ffffff] md:h-[92%] lg:h-[76%] blur-[0.3px] md:shadow-2xl shadow-gray-200  px-5 py-4 max-w-5xl absolute left-5 sm:left-8 md:left-3 lg:left-4 xl:left-3 top-55 sm:top-80 md:top-50 lg:top-60  w-[93%] md:w-[87%] lg:w-[92%] xl:w-[87%] rounded-xl  border-2 border-gray-200 lg:py-6 flex flex-col gap-3'>

                <h3 className='text-lg text-[#1B2340] font-bold'>Try the AI match</h3>
                < h4 className=' text-[#6B7391] ' > Job: Frontend Developer Type a candidate's skills</h4>
                < div className='flex gap-2  flex-wrap xl:flex-nowrap sm:flex-wrap' >
                    <h6 className='rounded px-2 py-1   bg-[#16B890]/20  text-[#16B890] text-sm'>react</h6>
                    <h6 className='rounded px-2 py-1   bg-[#16B890]/20  text-[#16B890] text-sm'>css</h6>
                    <h6 className='rounded px-2 py-1 bg-[#E8ECFF]  text-[#3D5AFE] text-sm'>typescript</h6>
                    <h6 className='rounded px-2 py-1 bg-[#E8ECFF]   text-[#3D5AFE] text-sm'>javascript</h6>
                </div >
                <p className='text-[#1B2340] font-bold  text-sm'>Candidate Skills</p>
                <p className='w-full bg-gray-100 px-3 py-3  rounded-xl text-[#1B2340]'>react,css</p>
                <div className='max-w-xl  bg-gray-100  h-[2vh]   rounded-full '>
                    {/* <div className='w-1/2 h-full bg-[#16B890] rounded-l-full'></div> */}
                    <div style={{ background: "linear-gradient(to right,#3D5AFE, #16B890)" }} className='shadow-[0_0_1px_#3D5AFE] w-1/2 h-full rounded-l-full'></div>

                </div>
                <div className='flex items-center leading-none'>
                    <h4 className='text-[#1B2340] font-bold text-lg '>50% skill match </h4>
                    <h4 className='text-sm text-[#6B7391] sm:ml-2 ml-1.5 '> 2 of 4 required skills</h4>
                </div>
            </div >
        </div>
    )
}

export default CompanycardHero