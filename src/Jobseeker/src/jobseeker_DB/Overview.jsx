import React from 'react'

const Overview = () => {
  return (
    <div className="w-full h-full flex flex-col ml-7 mt-22">
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
 <p className="text-[#6B7391] text-medium mt-3">Your job search at a glance.</p>
    </div>
        <div className=' grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 mt-7 pr-5 '>

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
    </div>
    

  )
}

export default Overview