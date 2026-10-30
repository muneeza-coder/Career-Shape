import React, { useState } from 'react'


const Sidebar=({active})=>{

     const[company_info,setCompany_info]=useState(null)
     const[company_logo,setCompany_logo]=useState(null)


    return(
        
       <aside className='hidden fixed bg-white w-[230px] sm:flex  sm:flex-col sm:border-r  sm:border-gray-300 sm:gap-3 py-10
         sm:px-2   md:px-3   xl:px-4 '>

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
                              "bg-[#3D5AFE] text-white "
                         }
                    `} >2</h1>
                <h1 className='text-sm  font-bold'>Company details</h1>
                
          </div>     
          <div className={`flex flex-row items-center bg-transparent rounded-xl px-3 py-2  gap-2
                   ${
                    active ==="Logo and hiring plans"?
                    "bg-[#3D5AFE] text-white":
                    "bg-white text-[#6B7391]"
                   }
                 `}>
            
                <h1  className={`h-7 w-7 text-sm   font-bold  rounded-full p-1 text-center justify-center
                         ${
                              active === "Logo and hiring plans"?
                              "text-white  bg-[#3D5AFE]":
                              "bg-gray-200 text-[#6B7391] "
                         }
                    `}
                >3</h1>
                <h1 className='text-sm  font-bold text-[#6B7391]'>Logo & hiring plans</h1>
               
          </div>
          <div className=' w-full flex flex-col bg-white border mt-5 border-[#d4d5d6] p-4 gap-3 rounded-xl'>
               <div className=' flex flex-row justify-between gap-3 items-center'>
                  <h1 className='font-bold text-[15px]'>Company profile</h1>
                  <h1 className='font-bold text-[#3D5AFE]'>0%</h1>
               </div>
                <div className='bg-gray-300 rounded-full h-4 w-full'>
                      <div className='h-full w-[5%] bg-amber-600 rounded-l-full'>

                      </div>
                </div>
                <p className=' text-[13px] text-[#6B7391]'>Your address start as entered.not verified until the platform admin checks it.</p>               
          </div>

        </aside>
    )
}
export default Sidebar;