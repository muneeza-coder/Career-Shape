import React, { useState } from 'react'


const Profile=()=>{
    const[edit,setEdit]=useState("not")
    const data=[
        {"About":"Active Jobs",
            "Count":"5"
        },
        {"About":"Candidates",
            "Count":"8"
        },
        {'About':"In interview",
            "Count":"9"
        }
    ]
    return(
        <div className='h-full w-full  flex flex-col gap-5 px-5  md:px-10 py-15'>
            <div className='w-full flex flex-col '>
                <h1 className='text-3xl text-[#1B2340] font-bold'>My Profile</h1>
                <p className=' text-[#6B7391]'>Your company and contact details</p>
            </div>

            <div  className='bg-white w-full flex flex-col sm:flex-row justify-between border border-gray-200 border-l-4  border-l-[#3D5AFE] px-2 py-4  lg:p-4 rounded-xl '>
                <div className='flex flex-row  sm:p-2'>
                    <div className=' w-25 h-25 sm:w-30 sm:h-30 text-4xl flex flex-nowrap shrink-0 bg-blue-200 text-[#1B2340] rounded-full p-4 items-center justify-center' >
                        <h1 >BB</h1>
                    </div>
                    <div className='flex flex-col px-2 xl:px-4 py-2 gap-2'>
                        <h3 className='text-[#1B2340] text-2xl font-bold'>Company Name</h3>
                        <h3 className='text-[#6B7391]'>Company Type</h3>
                     
                        <div className='flex flex-row gap-2 '>
                            <h4 className='bg-amber-100 rounded text-amber-500 px-2 py-1 text-[80%] '>Company/HR</h4>
                            <h4 className='bg-blue-100 rounded text-blue-500 px-2 py-1 text-[80%]'>Active</h4>
                        </div>
                    </div>
                </div>
                <div className='flex items-center flex-row  justify-end sm:justify-center gap-2 '>
                     <button className={`${edit==="click" ? "text-[#3D5AFE] bg-blue-100  px-3 py-2 rounded-xl  text-sm font-semibold":"hidden"}`} 
                     onClick={()=>{
                        setEdit("not")
                     }}
                   >Cancel</button>
                   <button className={`${edit==="not" ? " bg-[#3D5AFE] text-white  px-3 py-2 rounded-xl  text-sm font-semibold":"hidden"}`}
                     onClick={()=>{
                        setEdit("click")
                     }}
                   >Edit profile</button>
                   <button className={`${edit==="click" ? " bg-[#3D5AFE] text-white shrink-0 px-3 py-2 rounded-xl  text-sm font-semibold":"hidden"}`}
                     onClick={()=>{
                        setEdit("not")
                     }}
                   >Save changes</button>
                </div>
            </div>

            <div className=' w-full h-35 flex flex-row  gap-3 p-1 sm:p-3 '>

                {data.map((elem)=>{
                 return(
                    <div className='flex  flex-col justify-between border border-gray-200 border-l-4  border-l-[#3D5AFE] bg-white rounded-xl w-1/3 p-2 sm:p-4'>
                        <h3 className='text-3xl font-bold text-[#1B2340]'>{elem.Count}</h3>
                        <h3 className='text-sm text-[#6B7391]'>{elem.About}</h3>
                    </div>
                 )
                })}
                
            </div>

            <div className=' flex flex-col lg:flex-row   gap-5 p-2'>
                <div className=' w-full lg:w-1/2 flex flex-col bg-white gap-10 px-3 py-7 rounded-xl border border-gray-200'>
                  <div className='w-full '>
                    <h1  className='text-2xl font-semibold text-[#1B2340]'>Company information</h1>
                  </div>

                  <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-2'>
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

                   <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-2'>
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
                  <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-2'>
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
                   <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-2'>
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
                   <div className='w-full flex flex-col lg:flex-row '>
                       <div className='w-full flex flex-col  gap-2 '>
                           <h1  className='text-sm font-bold text-[#1B2340]'>About company</h1>
                           <textarea row={3} type="text" className={`${edit==="click" ? "  flex p-2 text-sm bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none border border-gray-200":"hidden"}`}/>
                           <h1 className={`${edit==="not" ? "text-sm  text-[#1B2340]  ":"hidden"}`}> BB company</h1>
                       </div>
                      
                  </div>
                </div>

                <div className=' w-full lg:w-1/2 h-fit flex flex-col gap-3 p-3 bg-white rounded-xl border border-gray-200'>
                     <div className='w-full pb-3 '>
                        <h1 className='text-2xl font-semibold text-[#1B2340]'>Account</h1>
                     </div>
                     <div className='w-full flex flex-row justify-between gap-3'>
                         <div className='flex flex-col gap-2'>
                           <h1  className=' font-bold text-[rgb(27,35,64)]'>Account type</h1>
                           <h5  className='text-sm text-[#6B7391]'>Company/HR</h5>
                         </div>
                         
                         <div  className='flex flex-col justify-center items-center' >
                            <button className='text-[#3D5AFE] bg-blue-100  px-3 py-2 rounded-xl  text-sm font-semibold'>Company</button>
                         </div>
                     </div>
                   
                     <div className='w-full flex flex-col gap-3 border-t border-t-gray-200 p-2' >
                           <h1 className=' font-bold text-[#1B2340]'>Email</h1>
                           <h2 className='text-sm text-[#6B7391]'>myemail</h2>
                     </div>
                   
                     <div className='w-full flex flex-col border-t border-t-gray-200 gap-3 p-2'>
                           <h1 className=' font-bold text-[#1B2340]'>Last login</h1>
                           <h3 className='text-sm text-[#6B7391]'></h3>
                     </div>
                </div>
            </div>


         
        </div>
    )
}
export default Profile