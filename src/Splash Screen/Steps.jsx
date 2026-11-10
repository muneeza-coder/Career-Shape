import React, { useContext } from 'react'
import { stepsContext } from "./SplashContext.jsx"
const Steps = () => {
    const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skill Gap"]
    const { steps, setsteps } = useContext(stepsContext)
    console.log(steps)
    return (
        <div className='flex relative flex-col'>
            <div className='ml-3 w-[97%] h-1 bg-gray-200 absolute top-4'></div>
            <div className='flex relative  gap-21'>
                {steplist.map((el, indx) => {
                    return <div key={indx} className='flex flex-col gap-2 justify-center items-center'>
                        <div className='p-1 bg-gray-200 rounded-full'>
                            <button onClick={() => {
                                setsteps(el)
                            }

                            } className='w-6 h-6 text-[#6B7391] bg-white flex justify-center items-center rounded-full text-[11px]  font-bold '>{indx + 1}</button>
                        </div>
                        <p className='text-[11px] text-[#1B2340] font-bold'>{el}</p>
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