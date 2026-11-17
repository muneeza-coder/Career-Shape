
// import React, { useContext } from 'react'
// import { stepsContext } from "./SplashContext.jsx"
// const Steps = () => {
//     const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skill Gap"]
//     const { steps, setsteps } = useContext(stepsContext)
//     console.log(steps)
//     return (
//         <div className='flex  flex-col'>
//             <div className='flex'>
//                 {steplist.map((el, indx) => {
//                     return <div key={indx} className='flex flex-col  justify-center items-center'>
//                         <div className='flex justify-center items-center'>
//                             <div className='p-1 bg-gray-200 rounded-full'>
//                                 <button onClick={() => {
//                                     setsteps(el)
//                                 }

//                                 } className='w-6 h-6 text-[#6B7391] bg-white flex justify-center items-center rounded-full text-[11px]  font-bold '>{indx + 1}</button>
//                             </div>
//                             <div className={`w-30  h-1 ${indx === 5 ? "bg-transparent" : "bg-gray-200"}`}></div>

//                         </div>
//                         <p className='text-[11px] text-[#1B2340] font-bold'>{el}</p>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Steps
// import React, { useContext, useEffect, useState } from 'react'
// import { stepsContext } from "./SplashContext.jsx"
// const Steps = () => {
//     const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skill Gap"]
//     const { steps, setsteps } = useContext(stepsContext)
//     const { numb, setnumb } = useState(0)
//     useEffect(() => {

//     }, [])
//     console.log(steps)
//     return (
//         // <div className='w-full items-center  flex relative flex-col'>
//         <div className='flex flex-col relative items-center w-full sm:w-[90%] md:w-[72%] lg:w-[57%] xl:w-[43%]'>

//             <div className=' w-[90%] md:w-[92%] lg:w-[90%] xl:w-[90%] h-1 bg-gray-200 absolute top-4'></div>
//             <div className='w-full flex relative items-center justify-between'>
//                 {steplist.map((el, indx) => {
//                     return <div key={indx} className='flex flex-col gap-2 justify-center items-center'>
//                         <div className={`p-1  rounded-full ${steps === el ? "bg-green-200" : "bg-gray-300"}`}>

//                             <button onClick={() => {
//                                 setsteps(el)

//                             }

//                             } className={`w-6 h-6 text-[#6B7391]  flex justify-center items-center rounded-full text-[11px]  font-bold ${indx > numb ? "bg-blue-300" : "bg-white"}`}>{indx + 1}</button>
//                         </div>
//                         <p className='whitespace-nowrap text-[11px] text-[#1B2340] font-bold'>{el}</p>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Steps
import React, { useContext, useEffect, useState } from 'react'
import { stepsContext } from "./SplashContext.jsx"
const Steps = () => {

    const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skill Gap"]
    const { steps, setsteps } = useContext(stepsContext)
    // const [numb, setnumb] = useState(-1)

    // if (steps === steplist[0]) {
    //     setnumb(numb + 1)
    // }
    const currentIndex = steplist.indexOf(steps)
    return (
        // <div className='w-full items-center  flex relative flex-col'>
        <div className='flex flex-col relative items-center w-full sm:w-[90%] md:w-[72%] lg:w-[57%] xl:w-[43%]'>

            <div className=' w-[90%] md:w-[92%] lg:w-[90%] xl:w-[90%] h-1 bg-gray-200 absolute top-3'></div>
            {/* top-3 – Aligns both lines vertically.
// left-[5%] – Starts the line at the first circle's center (approximately).
// transition-all duration-500 – Makes the color progress smoothly.
// style={{ width: ... }} – Dynamically changes the width. */}
            <div

                className='h-1  absolute top-3 left-[5%] transition-all duration-500'
                style={{
                    background: "linear-gradient(to right,#3D5AFE,#16B890)",

                    width: `${currentIndex < 0 ? 0 : (currentIndex / (steplist.length - 1)) * 90}%`
                }}
            ></div>
            <div className='w-full flex relative items-center justify-between'>
                {steplist.map((el, indx) => {
                    return <div key={indx} className='flex flex-col gap-2 justify-center items-center'>
                        <button
                            onClick={() => setsteps(el)}
                            className={`w-7 h-7 text-[#6B7391] border-3  flex justify-center items-center rounded-full text-[11px] font-bold
    ${indx < currentIndex
                                    ? "bg-[#3D5AFE] border-[#3D5AFE] text-white"
                                    : indx === currentIndex
                                        ? "border-[#16B890] shadow-[0_0_10px_1px_rgba(22,184,144)] bg-white text-gray-500"
                                        : "border-gray-300 bg-white text-gray-500"
                                }`}
                        >
                            {indx + 1}
                        </button>
                        <p className='whitespace-nowrap text-[11px] text-[#1B2340] font-bold'>{el}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Steps
// import React, { useContext } from 'react'
// import { stepsContext } from "./SplashContext.jsx"
// const Steps = () => {
//     const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skillgap"]
//     const { steps, setsteps } = useContext(stepsContext)
//     console.log(steps)
//     return (
//         <div className='flex flex-col  border border-gray-200 w-full sm:w-[90%] md:w-[72%] lg:w-[57%] xl:w-[43%] rounded-xl bg-white h-[30%] shadow-xl shadow-[#4A3AFF]/20'>

//             {/* // <div className='w-full  flex  flex-col'> */}
//             <div className='w-full flex  justify-between '>
//                 {steplist.map((el, indx) => {
//                     return <div key={indx} className='flex-1 flex flex-col  gap-2 '>
//                         <div className='flex  justify-center items-center'>
//                             <div className='p-1 bg-gray-200 rounded-full'>
//                                 <button onClick={() => {
//                                     setsteps(el)
//                                 }

//                                 } className='w-6 h-6 text-[#6B7391] bg-white flex justify-center items-center rounded-full text-[11px]  font-bold '>{indx + 1}</button>
//                             </div>
//                             <div className={`h-1 w-24 bg-red-300 ${indx < steplist.length - 1 ? "flex" : "hidden"}`}></div>
//                         </div>
//                         <p className='text-[11px]  text-[#1B2340] font-bold'>{el}</p>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Steps
// import React, { useContext } from 'react'
// import { stepsContext } from "./SplashContext.jsx"
// const Steps = () => {
//     const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skillgap"]
//     const { steps, setsteps } = useContext(stepsContext)
//     console.log(steps)
//     return (
//         <div className='flex flex-col  border border-gray-200 w-full sm:w-[90%] md:w-[72%] lg:w-[57%] xl:w-[43%] rounded-xl bg-white h-[30%] shadow-xl shadow-[#4A3AFF]/20'>
//             <div className='w-full flex'>
//                 {steplist.map((el, indx) => {
//                     return <div key={indx} className=' flex  '>
//                         <div className='flex  justify-center items-center'>
//                             <div className='p-1 bg-gray-200 rounded-full'>
//                                 <button onClick={() => {
//                                     setsteps(el)
//                                 }

//                                 } className='w-6 h-6 text-[#6B7391] bg-white flex justify-center items-center rounded-full text-[11px]  font-bold '>{indx + 1}</button>
//                             </div>
//                             <div className={`h-1 w-23 bg-red-300 ${indx < steplist.length - 1 ? "flex" : "hidden"}`}></div>
//                         </div>
//                     </div>
//                 })}
//             </div>
//             <div className=' flex justify-between items-center mt-2'>
//                 {steplist.map((el, indx) => {
//                     return <p className='whitespace-nowrap text-[11px]  text-[#1B2340] font-bold'>{el}</p>

//                 })}
//             </div>
//         </div>
//     )
// }

// export default Steps
// import React, { useContext } from 'react'
// import { stepsContext } from "./SplashContext.jsx"
// const Steps = () => {
//     const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skillgap"]
//     const { steps, setsteps } = useContext(stepsContext)
//     console.log(steps)
//     return (
//         <div className='flex flex-col  border border-gray-200 w-full sm:w-[90%] md:w-[72%] lg:w-[57%] xl:w-[43%] rounded-xl bg-white h-[30%] shadow-xl shadow-[#4A3AFF]/20'>

//             {/* // <div className='w-full  flex  flex-col'> */}
//             <div className='w-full flex  justify-between '>
//                 {steplist.map((el, indx) => {
//                     return <div key={indx} className='flex-1 flex flex-col  gap-2 '>
//                         <div className='flex  justify-center items-center'>
//                             <div className='p-1 bg-gray-200 rounded-full'>
//                                 <button onClick={() => {
//                                     setsteps(el)
//                                 }

//                                 } className='w-6 h-6 text-[#6B7391] bg-white flex justify-center items-center rounded-full text-[11px]  font-bold '>{indx + 1}</button>
//                             </div>
//                             <div className={`h-1 w-24 bg-red-300 ${indx < steplist.length - 1 ? "flex" : "hidden"}`}></div>
//                         </div>
//                         <p className='text-[11px]  text-[#1B2340] font-bold'>{el}</p>
//                     </div>
//                 })}
//             </div>
//         </div>
//     )
// }

// export default Steps