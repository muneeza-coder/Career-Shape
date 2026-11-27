import React from 'react'

const Result = () => {
  return (
    <div className="w-full flex flex-col gap-3 ml-7 mt-22 pr-5 mb-50 ">
         <div>
<h3 className="text-[#1B2340] font-extrabold text-3xl">Result</h3>
 <p className="text-[#6B7391] text-medium ">Your skill check results:see where you have skill gaps and ask questions about them.</p>
 </div>
<div className=' grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3  '>

        <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold  text-3xl">0</h3>
 <p className="text-[#6B7391] text-sm mt-3">Skill gaps found</p>
 </div>
  <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold  text-3xl">0</h3>
 <p className="text-[#6B7391] text-sm mt-3">Verified by questions</p>
 </div>
</div>    
      <div className=" bg-white rounded-xl px-5  w-full flex flex-col  gap-3 py-7 border border-gray-300">
                    <h3 className=" font-bold text-black text-[15px]">Your skill gaps</h3>
      <p className='text-xs text-[#6B7391]'>A short skill check runs when you apply for a job.Skills you miss appear here so you can learn them and ask questions.</p> 
      <p className='text-sm text-[#6B7391] text-center pt-7 pb-5'>No gaps yet.Apply for a job from the jobs tab and take the skill check.</p>

      </div>   
          <div className=" bg-white rounded-xl px-5  w-full flex flex-col  gap-3 py-7 border border-gray-300">
                    <h3 className=" font-bold text-black text-[15px]">Verified by questions</h3>
       
      <p className='text-sm text-[#6B7391] text-center pt-6 pb-5'>Skills you answer correctly will appear here.</p>

      </div>         
    </div>
  )
}

export default Result