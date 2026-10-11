// import React from 'react'
// import bgimg from '../assets/bluw.jpg'
// import img from "../assets/Group 2.jpg"
// const SliderContent = () => {
//     return (
//         // <div className='  flex flex-col justify-end items-end  w-full h-[80vh]'>
//         // <div className="flex ">
//         <div className="hero"
//             style={{ backgroundImage: `url(${img})` }}>
//             {/* className='min-h-50 w-full flex flex-col h-[70vh]' */}
//             <div className='w-150 ml-10 flex  flex-col justify-center items-start h-full'>
//                 {/* <h3 className='text-lg text-white font-semibold text-transform-captilize'>Shape Your Career Build Better Team</h3>
//                 <h1 className='text-5xl text-white font-bold '>EMPOWERING BETTER CAREERS &
//                     <span className='text-5xl text-white font-bold ml-4'>BETTER TEAM</span>
//                 </h1>
//                 <p className='text-white '>Connecting the right people, fostering collaboration, and creating opportunities for mutual growth
//                 </p> */}
//                 <h3 className='text-lg text-white font-semibold '>Make Your Vision A REALITY</h3>
//                 <h1 className='text-5xl text-white font-bold  leading-14 mb-4'>Empowering Better Careers <span className='text-white '>&</span>
//                     <span className='text-5xl text-white  font-bold ml-4'>Better Team</span>
//                 </h1>
//                 <p className='text-white '>Connecting talented people with the right opportunities through smarter recruitment.
//                 </p>
//             </div>
//             {/* </div> */}
//             {/* </div> */}
//         </div>
//     )
// }

// export default SliderContent
// import React from 'react'
// import bgimg from '../assets/bluw.jpg'
// import img from "../assets/Group 2.jpg"
// import img2 from "../assets/bluw1.png"
// import img3 from "../assets/main2.png"
// const SliderContent = () => {
//     return (
//         <div className="flex w-full h-[90vh] justify-between text-black">
//             <div className='w-150 ml-10 flex  flex-col justify-center items-start h-full'>
//                 <h3 className='text-lg  font-semibold '>Make Your Vision A REALITY</h3>
//                 <h1 className='text-5xl  font-bold  leading-14 mb-4'>Empowering Better Careers <span className='text-black '>&</span>
//                     <span className='text-5xl font-bold ml-4'>Better Team</span>
//                 </h1>
//                 <p className='text-black '>Connecting talented people with the right opportunities through smarter recruitment.
//                 </p>
//             </div>
//             <img className="h-[80vh] w-[100vh] mr-10 rounded" src={img3}></img>
//             {/* </div> */}
//             {/* </div> */}
//         </div>
//     )
// }

// export default SliderContent
import React from 'react'
import CompanycardHero from './CompanycardHero'
import JobseekerCardHero from './JobseekerCardHero'

const ComanyHome = () => {
    return (
        //for mobiles  ml-48 mr-48
        <div className='flex justify-between  h-[65vh] w-[125vh] ml-60 mt-35'>
            <div className=' h-full flex flex-col w-[130vh]'>
                <h6 className='bg-[#DBD8FF] text-[#3D5AFE] w-[15vh] text-sm px-2 py-1 rounded-full flex justify-center font-semibold mb-5'>For companies</h6>
                <h1 className='text-5xl font-extrabold text-[#1B2340] linespace-1.5 leading-12'>Shape your team around the right people</h1>
                <p className='text-[#6B7391] mt-5 text-lg'>Career Shape helps small teams post jobs, track candidates and see who fits best, uisng AI skill matching</p>
                <div className='mt-7 flex gap-2'>
                    <button className='bg-[#DBD8FF] text-[#3D5AFE] px-6 py-3 rounded-xl text-40 font-semibold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>Start hiring</button>
                    <button className=' bg-[#DBD8FF] text-[#3D5AFE] px-6 py-3 rounded-xl text-40 font-semibold hover:bg-[#3D5AFE] hover:text-white active:scale-95'>See how it works</button>
                </div>
            </div>
            <CompanycardHero />
        </div>
    )
}

export default ComanyHome