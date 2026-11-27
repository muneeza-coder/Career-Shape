import React from 'react'

const Overview = () => {
  return (
    <div className="w-full flex flex-col gap-3 ml-7 mt-22 pr-5 mb-45 ">
    {/* <div>
    <div>Demo view:</div>
    <label className="text-sm font-bold text-[#1B2340]"></label>
    <select>
        <option>Company/HR</option>
        <option>Job seeker</option>
        <option>Admin</option>
    </select>
    </div> */}
    <div>
<h3 className="text-[#1B2340] font-extrabold text-3xl">Hi, rfft</h3>
 <p className="text-[#6B7391] text-medium ">Your job search at a glance.</p>
    </div>
        <div className=' grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3  '>

        <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold  text-3xl">20%</h3>
 <p className="text-[#6B7391] text-sm mt-3">Profile</p>
        </div>
        <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold text-3xl">0</h3>
 <p className="text-[#6B7391] text-sm mt-3">Applications</p>
        </div>
                  <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold text-3xl">0</h3>
 <p className="text-[#6B7391] text-sm mt-3">In interview</p>
        </div>
                   <div className='border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 p-5 flex flex-col justify-center items-start gap-2 rounded-xl bg-white'>
<h3 className="text-[#1B2340] font-extrabold text-3xl">0</h3>
 <p className="text-[#6B7391] text-sm mt-3">Good matches</p>
        </div>
        
    </div>
     <div className=" bg-white rounded-xl px-5  w-full flex flex-col  gap-3 py-3 border border-gray-300 hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95">
                    <h3 className=" font-bold text-black text-[15px]">Profile completion</h3>
                    {/* <h3 className=" font-bold text-blue-800 text-[15px] text-sm">17%</h3> */}
                    <div className="w-full rounded-full h-3 bg-gray-300 ">
                        <div className="w-[20%] bg-[#2DD4A7] rounded-l-full h-full" ></div>
                    </div>
                        <h3 className="  text-[#6B7391]  text-sm ">Save your CV and apply to a job to reach 100%</h3>


    </div>
    <div className='bg-white  rounded-xl border flex flex-col  border-gray-300 px-5 py-8 gap-5 '>
      <div className='px-2 w-full items-center flex justify-between border-b py-2 border-gray-300'>
  <div className='flex flex-col'>
    <h3 className='font-bold text-black '>✨Recommended for you</h3>
  
  </div>
  <p className='text-sm font-normal text-blue-500 rounded-full bg-blue-200 px-2 py-1'>Demo AI result</p>
</div>
{/* <div className='font-bold text-black'>✨Recommended for you
  <hr className="border-t border-gray-300" />
</div> */}
<div className='px-2 w-full items-center flex justify-between border-b py-1 border-gray-300'>
  <div className='flex flex-col'>
    <h3 className='font-bold text-black'>Frontend Developer</h3>
  <h3 className="  text-[#6B7391]  text-sm font-medium">Skill to build:react</h3>
  </div>
  <p className='font-extrabold text-red-500 rounded-full bg-red-300 text-xs px-2 py-1'>0%</p>
</div>
<div className='px-2 w-full items-center flex justify-between border-b py-1 border-gray-300'>
  <div className='flex flex-col'>
    <h3 className='font-bold text-black'>Product Designer</h3>
  <h3 className="  text-[#6B7391]  text-sm font-medium">Skill to build:figma</h3>
  </div>
  <p className='font-extrabold text-red-500 rounded-full bg-red-300 text-xs px-2 py-1'>0%</p>
</div>
<div className='px-2 w-full items-center flex justify-between border-b py-1 border-gray-300'>
  <div className='flex flex-col'>
    <h3 className='font-bold text-black'>Sales Manager</h3>
  <h3 className="  text-[#6B7391]  text-sm font-medium">Skill to build:negotiation</h3>
  </div>
  <p className='font-extrabold text-red-500 rounded-full bg-red-300 px-2 text-xs py-1'>0%</p>
</div>

{/* <div className='font-bold text-black '>Sales Manager
  <h3 className="  text-[#6B7391]  text-sm font-medium ">Skill to build:negotiation</h3>

</div> */}
    </div>
    </div>
    

  )
}

export default Overview