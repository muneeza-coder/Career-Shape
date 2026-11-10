// import React, { useContext } from 'react'
// import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

// const Sidebar1 = () => {
//     const { choice, setchoice } = useContext(JobseekerProfileContext)
//     return (
//         <div className="w-[300px] h-full  bg-[#FFFFFF] border-slate-200 px-4 pt-8 pb-15 border-r flex flex-col ml-30 mt-10">
//             <div className=" flex flex-col font-bold gap-4">
//                 <div className='flex gap-4'>
//                     <h3 className="w-6 h-6  bg-[#3D5AFE]  text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">✓
//                     </h3>
//                     <h3 className="text-sm text-[#1B2340]">Create Account</h3>
//                 </div>

//                 {/* <div className='flex gap-2 bg-[#3D5AFE] text-white   py-2.5 px-3 rounded-xl '> */}
//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "About" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "About" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >2</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Education" ?
//                             "text-white  bg-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >✓</h1>
//                     <h1 className='text-sm  font-bold'>Education</h1>

//                 </div>
//                 {/* <div className={`${choice === "Experience" ? "flex" : "hidden"} gap-4  text-[#6B7391] bg-transparent py-2.5 px-3 rounded-xl `}>
//                     <h3 className={`w-6 h-6   bg-[#E8ECFF] text-[11px] font-bold rounded-full flex items-center justify-center ${choice === "Experience" ? "flex" : "hidden"}`}>2

//                     </h3>
//                     <h3 className="text-sm ">Experience</h3>
//                 </div>
//                 <div className={`${choice === "Experience" ? "hidden" : "flex"} gap-4  text-[#1B2340] bg-transparent py-2.5 px-3 rounded-xl `}>
//                     <h3 className={`w-6 h-6  text-white  bg-[#3D5AFE] text-[11px] font-bold rounded-full flex items-center justify-center `}>✓

//                     </h3>
//                     <h3 className="text-sm ">Experience</h3>
//                 </div> */}

//                 {/* <div className='flex gap-4 py-2.5 px-3'>
//             <h3 className="w-6 h-6 bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">3
//             </h3>
//             <h3 className="text-sm text-[#6B7391]">Education</h3>
//         </div> */}

//                 {/* <div className='flex gap-4 py-2.5 px-3'>
//             <h3 className="w-6 h-6   bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">4
//             </h3>
//             <h3 className="text-sm text-[#6B7391]">Experience</h3>
//         </div> */}
//                 {/* <div className={`${choice==="Education"?"flex":"hidden"} gap-4  text-[#6B7391] bg-transparent py-2.5 px-3 rounded-xl `}>
//             <h3 className={`w-6 h-6   bg-[#E8ECFF] text-[11px] font-bold rounded-full flex items-center justify-center `}>3

//             </h3>
//             <h3 className="text-sm ">Education</h3>
//         </div>     
//         <div className={`${choice==="Education"?"hidden":"flex"} gap-4  text-[#1B2340] bg-transparent py-2.5 px-3 rounded-xl `}>
//             <h3 className={`w-6 h-6  text-white  bg-[#3D5AFE] text-[11px] font-bold rounded-full flex items-center justify-center `}>✓

//             </h3>
//             <h3 className="text-sm ">Education</h3>
//         </div>   
//         <div className={`${choice==="Experience"?"flex":"hidden"} gap-4  text-[#6B7391] bg-transparent py-2.5 px-3 rounded-xl `}>
//             <h3 className={`w-6 h-6   bg-[#E8ECFF] text-[11px] font-bold rounded-full flex items-center justify-center `}>4

//             </h3>
//             <h3 className="text-sm ">Experience</h3>
//         </div>     
//         <div className={`${choice==="Experience"?"hidden":"flex"} gap-4  text-[#1B2340] bg-transparent py-2.5 px-3 rounded-xl `}>
//             <h3 className={`w-6 h-6  text-white  bg-[#3D5AFE] text-[11px] font-bold rounded-full flex items-center justify-center `}>✓

//             </h3>
//             <h3 className="text-sm ">Experience</h3>
//         </div>                    


//         <div className='flex gap-4 py-2.5 px-3'>
//             <h3 className="w-6 h-6 bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">5
//             </h3>
//             <h3 className="text-sm text-[#6B7391]">Skills</h3>
//         </div> */}

//                 <div className='flex gap-4 py-2.5 px-3'>
//                     <h3 className="w-6 h-6  bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">6
//                     </h3>
//                     <h3 className="text-sm text-[#6B7391]">CV & prefrences</h3></div>
//             </div>
// <div className="border border-slate-200 bg-white rounded-xl p-3 mt-10 w-full flex flex-col gap-2">
//     <div className="flex justify-between">
//         <h3 className=" font-bold text-black text-[15px]">Profile strength</h3>
//         <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3>
//     </div>
//     <div>

//         <div className="w-full rounded-full h-3 bg-gray-300">
//             <div className="w-[10%] bg-[#2DD4A7] rounded-l-full h-full" ></div>
//         </div>


//     </div>
//     <div className='flex flex-col'>
//         <ul className='list-disc px-3'>
//             <li className="text-xs text-[#6B7391]"> Add a professional headline</li>
//             <li className="text-xs text-[#6B7391]"> Add your education</li>
//             <li className="text-xs text-[#6B7391]"> Add at least 3 skills</li>
//         </ul>

//     </div>
// </div>
//         </div>

//     )
// }

// export default Sidebar1
import React, { useContext, useState } from 'react'
import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

const Sidebar1 = () => {

    const actions = ["About", "Education", "Experience", "Skills", "CV & Preferences"]
    const { choice, setchoice } = useContext(JobseekerProfileContext)
    const currentIndx = actions.indexOf(choice)
    console.log("choice", currentIndx)
    return (
        <div className='w-[230px] h-full bg-[#FFFFFF] border-slate-200 px-4 pt-8 pb-15 border-r flex flex-col gap-3 ml-30 mt-10 shrink-0'>
            <div className='flex gap-4 py-2.5 px-3'>
                <h3 className="w-6 h-6  bg-[#3D5AFE]  text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">✓
                </h3>
                <h3 className="text-sm font-bold text-[#1B2340]">Create Account</h3>
            </div>
            {actions.map((el, indx) => {
                console.log("Index:", indx)
                return <div key={indx} className='flex flex-col'>

                    <div className={`flex gap-4 py-2.5 px-3 ${choice == el ? "hidden" : "flex"}`} >
                        <h3 className={`w-6 h-6  text-[#6B7391] bg-gray-200 text-[11px] font-bold rounded-full flex items-center justify-center ml-3 ${currentIndx > indx ? "hidden" : "flex"}`}>{indx + 2}
                        </h3>

                        <h3 className={`w-6 h-6  bg-[#3D5AFE]  text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3 ${currentIndx > indx ? "flex" : "hidden"}`}>✓</h3>

                        <h3 className={`text-sm font-bold text-[#1B2340] ${currentIndx > indx ? "flex " : "hidden"}`}>{el}</h3>
                        <h3 className={`text-sm font-bold text-[#6B7391] ${currentIndx > indx ? "hidden" : "flex"}`}>{el}</h3>


                    </div>

                    <div className={` gap-4 py-2.5 px-3 bg-[#3D5AFE] rounded-xl ${choice === el ? "flex" : "hidden"}`}>
                        <h3 className="w-6 h-6  text-[#3D5AFE] bg-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">{indx + 2}
                        </h3>
                        <h3 className="text-sm font-bold text-white">{el}</h3>
                    </div>
                    {/* <div className={` gap-4 py-2.5 px-3 bg-red-800 ${choice !== el && choice === actions[indx + 1] ? "hidden" : "flex"}`}>
                        <h3 className="w-6 h-6  text-[#3D5AFE] bg-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">{indx + 1}
                        </h3>
                        <h3 className="text-sm text-white">{el}</h3>
                    </div> */}
                </div>

            })}
            <div className="border border-slate-200 bg-white rounded-xl p-3 mt-10 w-full flex flex-col gap-2">
                <div className="flex justify-between">
                    <h3 className=" font-bold text-black text-[15px]">Profile strength</h3>
                    <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3>
                </div>
                <div>

                    <div className="w-full rounded-full h-3 bg-gray-300">
                        <div className="w-[10%] bg-[#2DD4A7] rounded-l-full h-full" ></div>
                    </div>


                </div>
                <div className='flex flex-col'>
                    <ul className='list-disc px-3'>
                        <li className="text-xs text-[#6B7391]"> Add a professional headline</li>
                        <li className="text-xs text-[#6B7391]"> Add your education</li>
                        <li className="text-xs text-[#6B7391]"> Add at least 3 skills</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Sidebar1

// import React, { useContext } from 'react'
// import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

// const Sidebar1 = () => {
//     const { choice, setchoice } = useContext(JobseekerProfileContext)
//     return (
//         <div className="w-[300px] h-full  bg-[#FFFFFF] border-slate-200 px-4 pt-8 pb-15 border-r flex flex-col ml-30 mt-10">
//             <div className=" flex flex-col font-bold gap-4">
//                 <div className='flex gap-4'>
//                     <h3 className="w-6 h-6  bg-[#3D5AFE]  text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">✓
//                     </h3>
//                     <h3 className="text-sm text-[#1B2340]">Create Account</h3>
//                 </div>

//                 {/* <div className='flex gap-2 bg-[#3D5AFE] text-white   py-2.5 px-3 rounded-xl '> */}
//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "About" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "About" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >2</h1>

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice !== "About" ?
//                             "text-white  bg-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >✓</h1>
//                     <h1 className='text-sm  font-bold'>About</h1>

//                 </div>

//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "Education" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Education" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >3</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Education" ?
//                             " hidden" :
//                             "bg-gray-200  text-[#6B7391]"
//                         }
//                     `} >3</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Experience" ?
//                             "hidden" :
//                             " text-white  bg-[#3D5AFE]"
//                         }
//                     `} >✓</h1>
//                     <h1 className='text-sm  font-bold'>Education</h1>

//                 </div>

//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "Experience" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Experience" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >4</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Experience" ?
//                             " hidden" :
//                             "bg-gray-200  text-[#6B7391]"
//                         }
//                     `} >4</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Experience" ?
//                             "hidden" :
//                             "text-white  bg-[#3D5AFE]"
//                         }
//                     `} >✓</h1>
//                     <h1 className='text-sm  font-bold'>Experience</h1>

//                 </div>

//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "Skills" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >

//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Skills" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >5</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "Skills" ?
//                             " hidden" :
//                             "bg-gray-200  text-[#6B7391]"
//                         }
//                     `} >5</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice == "Skills" ?
//                             "hidden" :
//                             " text-white  bg-[#3D5AFE]"
//                         }
//                     `} >✓</h1>
//                     <h1 className='text-sm  font-bold'>Skills</h1>

//                 </div>

//                 <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
//                  ${choice === "CV & preferences" ?
//                         " bg-[#3D5AFE] text-white" :
//                         " bg-white text-[#6B7391]"
//                     }
//                    `}
//                 >
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "CV & preferences" ?
//                             " hidden" :
//                             "bg-gray-200  text-[#6B7391]"
//                         }
//                     `} >6</h1>
//                     <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice === "CV & preferences" ?
//                             "bg-white  text-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >6</h1>
//                     {/* <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
//                          ${choice != "CV & preferences" ?
//                             "text-white  bg-[#3D5AFE]" :
//                             "hidden"
//                         }
//                     `} >✓</h1> */}
//                     <h1 className='text-sm  font-bold'>CV & preferences</h1>

//                 </div>
//                 <div className="border border-slate-200 bg-white rounded-xl p-3 mt-10 w-full flex flex-col gap-2">
//                     <div className="flex justify-between">
//                         <h3 className=" font-bold text-black text-[15px]">Profile strength</h3>
//                         <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3>
//                     </div>
//                     <div>

//                         <div className="w-full rounded-full h-3 bg-gray-300">
//                             <div className="w-[10%] bg-[#2DD4A7] rounded-l-full h-full" ></div>
//                         </div>


//                     </div>
//                     <div className='flex flex-col'>
//                         <ul className='list-disc px-3'>
//                             <li className="text-xs text-[#6B7391]"> Add a professional headline</li>
//                             <li className="text-xs text-[#6B7391]"> Add your education</li>
//                             <li className="text-xs text-[#6B7391]"> Add at least 3 skills</li>
//                         </ul>

//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Sidebar1