import  React from 'react'
const information=(edit)=>{
    
    return(
        <div className='w-full '>
                <div className=' w-full  flex flex-col bg-white gap-10 px-3 py-7 rounded-xl border border-gray-200'>
                  <div className='w-full '>
                    <h1  className='text-2xl font-semibold text-[#1B2340]'>Company information</h1>
                  </div>

                  <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 lg:gap-2'>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1 className='text-sm font-bold text-[#1B2340]'>Company Name</h1>
                           <input type='text' className={`${edit==="click" ? "  flex  p-2 text-sm  bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340] ":"hidden"}`}> BB company</h1>
                       </div>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2  '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Contact person</h1>
                           <input type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}>CC company</h1>
                       </div>
                  </div>

                   <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 lg:gap-2'>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Email</h1>
                           <input type='email' className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}> BB company</h1>
                       </div>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Phone</h1>
                           <input type='number' className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? " text-sm  text-[#1B2340] ":"hidden"}`}>CC company</h1>
                       </div>
                  </div>
                  <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 lg:gap-2'>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Industry</h1>
                           <input type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}> BB company</h1>
                       </div>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2  '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Website</h1>
                           <input type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? " text-sm  text-[#1B2340] ":"hidden"}`}>CC company</h1>
                       </div>
                  </div>
                   <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 lg:gap-2'>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>City</h1>
                           <input type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}> BB company</h1>
                       </div>
                       <div className='w-full flex flex-col lg:w-1/2 gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>Company size</h1>
                           <input type="number" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? " text-sm  text-[#1B2340] ":"hidden"}`}>CC company</h1>
                       </div>
                  </div>
                   <div className='w-full flex flex-col sm:flex-row md:flex-col lg:flex-row gap-10 lg:gap-2'>
                       <div className='w-full flex flex-col  gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>About company</h1>
                           <textarea row={3} type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}> BB company</h1>
                       </div>
                      
                    </div> 
                </div>
        </div>       
    )
}
export default information