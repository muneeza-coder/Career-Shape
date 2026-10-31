import React from 'react'

const Sidebar1 = () => {
  return (
    <div className="w-[300px] h-full  bg-[#FFFFFF] border-slate-200 px-4 py-8  border-r flex flex-col ml-30 mt-10">
        <div className=" flex flex-col font-bold gap-4">
            <div className='flex gap-4'>
                <h3 className="w-6 h-6  bg-[#3D5AFE]  text-white text-[11px] font-bold rounded-full flex items-center justify-center ml-3">✓
            </h3>
            <h3 className="text-sm text-[#1B2340]">Create Account</h3>
        </div>

        <div className='flex gap-2 bg-[#3D5AFE] text-white py-2.5 px-3 rounded-xl '>
            <h3 className="w-6 h-6  bg-white  text-[#3D5AFE] text-[11px] font-bold rounded-full flex items-center justify-center">2
            </h3>
            <h3 className="text-sm ">About you</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6 bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">3
            </h3>
            <h3 className="text-sm text-[#6B7391]">Education</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6   bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">4
            </h3>
            <h3 className="text-sm text-[#6B7391]">Experience</h3>
        </div>
        
        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6 bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">5
            </h3>
            <h3 className="text-sm text-[#6B7391]">Skills</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6  bg-[#E8ECFF]  text-[#6B7391] text-[11px] font-bold rounded-full flex items-center justify-center">6
            </h3>
            <h3 className="text-sm text-[#6B7391]">CV & prefrences</h3></div>
        </div>
        <div className="border border-slate-200 bg-white rounded-xl p-3 mt-10 w-full flex flex-col gap-2">
        <div className="flex justify-between">
            <h3 className=" font-bold text-black text-[15px]">Profile strength</h3>
            <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3>
            </div>
           <div>
            
 <div className ="w-full rounded-full h-3 bg-gray-300">
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