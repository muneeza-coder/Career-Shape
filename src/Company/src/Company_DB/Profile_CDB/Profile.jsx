import React, { useState } from 'react'
import Stats_Card from './Profile_Cards_CDB/Profile_Stats_card'
import Company_Information from './Profile_Cards_CDB/Company_Information'
import Account from './Profile_Cards_CDB/Account_Info_card'
const Profile=()=>{
    const[edit,setEdit]=useState("not")
   
    return(
        <div className='h-screen w-full  flex flex-col gap-5 px-5  md:px-10 py-15 pb-30'>
            <div className='w-full flex flex-col '>
                <h1 className='text-3xl text-[#1B2340] font-bold'>My Profile</h1>
                <p className=' text-[#6B7391]'>Your company and contact details</p>
            </div>

             

            <div  className='bg-white w-full flex flex-col sm:flex-row justify-between border border-gray-200 border-l-4  border-l-[#3D5AFE] px-2 py-4  lg:p-4 rounded-xl '>
                <div className='flex flex-row  lg:p-2'>
                    <div className=' w-20 h-20 md:w-23 md:h-23 lg:w-27 lg:h-27 text-4xl flex flex-nowrap shrink-0 bg-blue-200 text-[#1B2340] rounded-full p-4 items-center justify-center' >
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
                <div className='flex items-center flex-row  md:flex-col lg:flex-row  justify-end sm:justify-center gap-2 '>
                     <button className={`${edit==="click" ? "  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 text-[#3D5AFE] bg-blue-100  px-4 py-3 rounded-xl  text-sm font-semibold":"hidden"}`} 
                     onClick={()=>{
                        setEdit("not")
                     }}
                   >Cancel</button>
                   <button className={`${edit==="not" ? " hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95  bg-[#3D5AFE] text-white  px-4 py-3 rounded-xl  text-sm font-semibold":"hidden"}`}
                     onClick={()=>{
                        setEdit("click")
                     }}
                   >Edit profile</button>
                   <button className={`${edit==="click" ? "  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95 bg-[#3D5AFE] text-white shrink-0 px-4 py-3 rounded-xl  text-sm font-semibold":"hidden"}`}
                     onClick={()=>{
                        setEdit("not")
                     }}
                   >Save changes</button>
                </div>
            </div>
 
              

            <div className=' w-full '>

                <Stats_Card />
                
            </div>
 
                
      <div className='w-full flex flex-col md:flex-row gap-5'>
            <div className='w-full lg:w-1/2 '>
                        <Company_Information edit/>      
            </div>

            <div className=' w-full lg:w-1/2 h-fit flex flex-col gap-3 p-3 bg-white rounded-xl border border-gray-200'>
                    <Account/> 
            </div>
        </div>
     </div>   


         
        
    )
}
export default Profile