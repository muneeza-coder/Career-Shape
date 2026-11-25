import React, { useContext } from 'react'
import { useState } from 'react'
import JobBasic from './JobBasic'
import JobInfoCard from './Cards/JobInfoCard'
import logo from '../../../../assets/logo1.svg'
import { Context } from '../../Company_Context/Company_Context'
import Employment_detail from './Cards/Employment_details'
import Requirements from './Cards/Requirements'
import SkillsandPay from './Cards/Skills&Pay'
const MainAIAgent=()=>{
   const{ai_curr_act,setAi_curr_act}=useContext(Context)
    const[count,setCount]=useState(1)
    return(
    
         <div className='w-full flex flex-col px-18 py-10 '>
               
               <div className='flex flex-col gap-2'>
                 <img src={logo} className='hidden sm:flex h-10  w-40  mb-3'></img>
                 <div className='h-[8px] w-full bg-amber-500 rounded-full'></div>
                 <h4 className='text-[13px] font-sm text-gray-500'> Step {count} of 5</h4>
                </div>
                <div className=' w-full flex  gap-10 flex-col xl:flex-row'>
                  <div className=' w-[600px] h-auto flex flex-col rounded-xl border border-gray-200 bg-white p-5'>
                    <div className={`${ai_curr_act==='Job basics'?'':'hidden'}`}> <JobBasic/></div>
                    <div className={`${ai_curr_act==='employment_detail'?'':'hidden'}`}> <Employment_detail/></div>
                    <div className={`${ai_curr_act==='Requirements'?'':'hidden'}`}> <Requirements/></div>
                    <div className={`${ai_curr_act==='skillsandpay'?'':'hidden'}`}> <SkillsandPay/></div>
                  </div>
                  <div className=' w-[240px] h-auto flex flex-col rounded-xl border border-gray-200 bg-white p-2'>
                    <JobInfoCard/>
                  </div>
                </div>
                
        </div>
 
    )
}
export default MainAIAgent