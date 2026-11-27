import React from 'react'

const Applied = () => {
  return (
    <div className='w-245 flex flex-col gap-5 ml-7'>
        <div className="w-full flex flex-col gap-3  mt-22 pr-5  ">
            <h3 className="text-[#1B2340] font-extrabold text-3xl">My applications</h3>
 <p className="text-[#6B7391] text-medium py-3">Track every application.</p>
        </div>
      
        <div className='bg-white px-10 text-center py-9 rounded-lg flex flex-col gap-3 justify-between '>
          <h3 className='text-[#6B7391] text-sm'>No applications yet.Apply from the Job tabs.</h3>
        </div>
    </div>
  )
}

export default Applied