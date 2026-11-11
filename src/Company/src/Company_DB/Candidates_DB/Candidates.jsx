import React from 'react'
const Candidate=()=>{
    return(
        <div className=' w-full px-10 pt-14 pb-25 flex flex-col gap-5  '>
           <div className="bg-transparent w-full flex flex-col sm:flex-row justify-between gap-2 sm:gap-0"> 
                 <div  className='  flex flex-col justify-start gap-2  '>
                    <h1 className='text-3xl text-[#1B2340] font-bold'>Candidates</h1>
                    <h4 className=' text-[#6B7391]'>Move people through your pipeline.</h4>
                 </div>
                 <div className=' flex flex-col justify-between gap-2 pr-10'>
                    <input type='text' placeholder='Search by name' className='border  border-gray-200 rounded-xl p-2 focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                    <button className=" w-fit bg-[#3D5AFE] text-white  px-4 py-3 rounded-xl  text-sm font-semibold  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95">Add Candidates</button>
                 </div>
            </div>
            
        </div>
    )
}
export default Candidate