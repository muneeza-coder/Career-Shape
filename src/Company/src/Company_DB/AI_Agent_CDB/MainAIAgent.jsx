import React from 'react'
import { useState } from 'react'
import JobBasic from './JobBasic'
import JobInfoCard from './JobInfoCard'
import logo from '../../../../assets/logo1.svg'
const MainAIAgent=()=>{

    const[count,setCount]=useState(1)
    return(
        <div className='w-full px-18 py-10 '>
               
               <div className='flex flex-col gap-2'>
                 <img src={logo} className='hidden sm:flex h-10  w-40  mb-3'></img>
                 <div className='h-[8px] w-full bg-amber-500 rounded-full'></div>
                 <h4 className='text-[13px] font-sm text-gray-500'> Step {count} of 5</h4>
                </div>

                <div className=' w-[600px] flex flex-col rounded-xl border border-gray-200 bg-white p-5'>
                  <JobBasic/>
                 
                </div>
                <div className=' w-[240px] flex flex-col rounded-xl border border-gray-200 bg-white p-2'>
                   <JobInfoCard/>
                </div>
        </div>
    )
}
export default MainAIAgent