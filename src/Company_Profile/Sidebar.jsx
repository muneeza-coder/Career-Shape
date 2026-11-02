import React, { useContext, useState } from 'react'
import { Company_Context_Profile } from '../Company_Context/Company_Context_profile.jsx'

const Sidebar=()=>{

      const {active,setActive}=useContext(Company_Context_Profile)
      console.log(active)
      const[percentage,setPercentage]=useState(0)

    return(
        
       <div className='  bg-white w-full flex flex-row py-3 px-1
           sm:w-[230px] sm:shrink-0 sm:h-full sm:flex  sm:flex-col sm:border-r  sm:border-gray-300  sm:gap-5
           sm:px-2   md:px-3 xl:px-4 '>
         <div className=' w-1/2  px-3 sm:w-full md:px-0 flex flex-col'>
             <div className='flex flex-row items-center bg-transparent rounded-xl px-3 py-2  gap-2'>
            
                  <h1 className='h-7 w-7 text-sm text-white font-bold bg-[#3D5AFE] rounded-full p-1 text-center justify-center'  >✓</h1>
                   <h1 className='text-sm font-bold text-[#6B7391]'>Create account</h1>
             </div>
          
             <div className={`flex flex-row items-center rounded-xl px-3 py-2 gap-2
                 ${
                    active === "Company_info" ?
                    " bg-[#3D5AFE] text-white":
                    " bg-white text-[#6B7391]"
                    }
                   `}
               >
          
                <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
                         ${
                              active ==="Company_info" ?
                              "bg-white  text-[#3D5AFE]":
                              "hidden"
                         }
                    `} >2</h1>
                 <h1 className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
                         ${
                              active ==="Logo and hiring plans" ?
                              "text-white  bg-[#3D5AFE]":
                              "hidden"
                         }
                    `} >✓</h1>   
                <h1 className='text-sm  font-bold'>Company details</h1>
                
          </div>     
          <div className={`flex flex-row items-center  rounded-xl px-3 py-2  gap-2
                   ${
                    active ==="Logo and hiring plans" ?
                    " bg-[#3D5AFE] text-white":
                    "bg-white text-[#6B7391]"
                   }
                 `}>
            
                <h1  className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
                         ${
                              active === "Logo and hiring plans"?
                              "bg-white  text-[#3D5AFE]":
                              "text-[#6B7391] bg-gray-200"
                         }
                    `}
                >3</h1>
                <h1 className='text-sm  font-bold'>Logo & hiring plans</h1>
               
             </div>
         </div>
          
          <div className=' w-1/2 sm:w-full flex flex-col bg-white border sm:mt-5 border-[#d4d5d6] p-4 gap-3 rounded-xl'>
               <div className=' flex flex-row justify-between gap-3 items-center'>
                  <h1 className='font-bold text-[15px]'>Company profile</h1>
                  <h1 className='font-bold text-[#3D5AFE]'>{percentage}%</h1>
               </div>
                <div className='bg-gray-300 rounded-full h-3 w-full'>
                      <div className='h-full w-[3%] bg-amber-600 rounded-l-full'>

                      </div>
                </div>
                <p className=' text-[13px] text-[#6B7391]'>Your address start as entered.not verified until the platform admin checks it.</p>               
          </div>

        </div>
    )
}
export default Sidebar;
