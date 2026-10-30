import React from 'react'

const Sidebar1 = () => {
  return (
    <div className="w-[230px] min-h-screen  bg-white border border-slate-200 px-3 py-6  border-r flex flex-col ml-30 mt-10">
        <div className=" flex flex-col font-bold gap-4">
            <div className='flex gap-4'>
                <h3 className="w-6 h-6  bg-blue-800  text-white text-[10px] font-bold rounded-full flex items-center justify-center ml-3">✓
            </h3>
            <h3 className="text-sm">Create Account</h3>
        </div>

        <div className='flex gap-4 bg-blue-800 text-white py-2.5 px-3 rounded-xl '>
            <h3 className="w-6 h-6  bg-white  text-blue-800 text-[10px] font-bold rounded-full flex items-center justify-center">2
            </h3>
            <h3 className="text-sm">About you</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6 bg-gray-400  text-gray-100 text-[10px] font-bold rounded-full flex items-center justify-center">3
            </h3>
            <h3 className="text-sm">Education</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6  bg-gray-400  text-gray-100 text-[10px] font-bold rounded-full flex items-center justify-center">4
            </h3>
            <h3 className="text-sm">Experience</h3>
        </div>
        
        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6  bg-gray-400  text-gray-100 text-[10px] font-bold rounded-full flex items-center justify-center">5
            </h3>
            <h3 className="text-sm">Skills</h3>
        </div>

        <div className='flex gap-4 py-2.5 px-3'>
            <h3 className="w-6 h-6 bg-gray-400  text-gray-100 text-[10px] font-bold rounded-full flex items-center justify-center">6
            </h3>
            <h3 className="text-sm">CV & prefrences</h3></div>
        </div>
        <div className="border border-slate-200 bg-white rounded-xl p-3 mt-10 w-full flex flex-col gap-2">
        <div className="flex justify-between">
            <h3 className=" font-bold text-black text-[15px]">Profile strength</h3>
            <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3>
            </div>
           <div>
            
 <div className ="w-full rounded-full h-3 bg-gray-300">
                <div className="w-[10%] bg-green-400 rounded-l-full h-full" ></div>
            </div>


           </div>
           <div className='flex flex-col'>
             <p className="text-xs"> Add a professional headline</p>
            <p className="text-xs"> Add your education</p>
            <p className="text-xs"> Add at least 3 skills</p>
           </div>
        </div>
        </div>
    
  )
}

export default Sidebar1