import React, { useState } from 'react'

const Profile = () => {
  const[edit,setEdit]=useState('Not')
  return (
    
        <div className="w-full flex flex-col gap-3 ml-7 mt-22 pr-5 mb-50 ">
         <div>
               <h3 className="text-[#1B2340] font-extrabold text-3xl">My Profile</h3>
               <p className="text-[#6B7391] text-medium ">Your personal details.</p>
         </div>
         <div  className='bg-white w-full flex flex-col  justify-between border border-gray-200 px-2 py-4  lg:p-4 rounded-xl '>
                <div className='flex flex-row  '>
                    <div className=' w-25 h-25 sm:w-30 sm:h-30 text-4xl flex flex-nowrap  bg-blue-200 text-[#1B2340] rounded-full p-4 items-center justify-center' >
                        <h1 >R</h1>
                    </div>
                    <div className='flex flex-col px-2 xl:px-4 py-2 gap-2'>
                        <h3 className='text-[#1B2340] text-2xl font-bold'>rfft</h3>
                        <h3 className='text-[#6B7391]'>Add your details below.</h3>
                     
                        <div className='flex flex-row gap-2 '>
                            <h4 className='bg-green-200 rounded text-green-600 px-2 py-1 text-[80%] '>Job seeker</h4>
                            <h4 className='bg-blue-100 rounded text-blue-500 px-2 py-1 text-[80%]'>Active</h4>
                        </div>
                     
                    </div>
                    
                </div>  
                <div className='flex flex-col px-5 py-3 gap-3'>
                          <button className={`${edit==='Not'?"bg-blue-500 text-white":"hidden"}`}
                           onClick={()=>{setEdit('Edit')}}
                          >Edit profile</button>
                          <button className={`${edit==='Edit'?"bg-blue-500 text-white":"hidden"}`}
                            onClick={()=>{setEdit('Not')}}
                            >Cancel</button>
                          <button className={`${edit==='Edit'?"bg-blue-500 text-white":"hidden"}`}
                              onClick={()=>{setEdit('Not')}}
                          >Save changes</button>
                </div>   
          </div>
          <div className=' grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3  w-full '>
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
                        <p className="text-[#6B7391] text-sm mt-3">Skills</p>
                   </div>
        
                 </div>
                 <div className='w-full'>
                      <div className='w-1/2 bg-amber-200 p-5'>
                          <h3>Personal information</h3>
                           <div className='w-full flex-col p-5 '>
                               <div className='w-full flex flex-row gap-4'>
                                   <div className='w-1/2 flex flex-col '>
                                      <h2>Full name</h2>
                                      <h2 className={`${edit==='Not'?"bg-transparent":"hidden"}`}>dwedw</h2>
                                      <input type='text' className={`${edit==='Edit'?"bg-white":"hidden"}`}/>
                                   </div>
                                   <div className='w-1/2 flex flex-col '>
                                      <h2>Full name</h2>
                                      <h2 className={`${edit==='Not'?"bg-transparent":"hidden"}`}>dwedw</h2>
                                      <input type='text' className={`${edit==='Edit'?"bg-white":"hidden"}`}/>
                                   </div>
                                   <div></div>
                               </div>
                            </div>
                      </div>
                      <div className='w-1/2 bg-amber-200'>

                      </div>
                 </div>
                 

    </div>
    
    
  )
}

export default Profile