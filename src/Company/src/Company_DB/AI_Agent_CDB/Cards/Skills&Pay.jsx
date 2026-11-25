import React, { useContext, useState } from 'react'
import {Context} from '../../../Company_Context/Company_Context.jsx'

const SkillsandPay=()=>{
    const{ai_curr_act,setAi_curr_act}=useContext(Context)
    const{req_skills,setReq_skills}=useContext(Context)
    const{req_min_salary,setReq_min_salary}=useContext(Context)
    const{req_max_salary,setReq_max_salary}=useContext(Context)
    // const[exp_btnactive,setExp_btnactive]=useState(null)
    //  const[edu_btnactive,setEdu_btnactive]=useState(null)
    // const experience_type=[
    //     {
    //         'type':['Fresher','1-2 years','3-4 years','5-6 years'
    //         ]
    //     }]
    // const minimum_edu=[
    //     {
    //         'type':['MAtric/Intermediate',"Bachelor's degree","Master's degree",'Not required'
    //         ]
    //     }
          
          
    // ]
    return(
        <div  className='flex flex-col gap-3'>
               <h2 className='text-2xl text-[#1B2340] font-extrabold'>Skills and Pay</h2>
                <h4 className=' text-[#6B7391] '>Which skills are required and what will you pay?</h4>
        
                <div className='flex flex-col gap-1'>
                    <h4 className='text-sm text-[#1B2340] font-semibold'>Which skills are required?type them.</h4>
                    <input type='text' placeholder='e.g.react,css,html ' value={req_skills}  onChange={(e)=>{setReq_skills(e.target.value)}}
                    className='w-full rounded-xl flex p-2 border  border-gray-200
                    focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                </div>
                <div className='flex w-full flex-col gap-1'>
                    <h4 className='text-sm text-[#1B2340] font-semibold'>Montly salary (optional).</h4>
                    <div className='w-full flex flex-col md:flex-row gap-5'>
                         <input type='text' placeholder='From(per month) ' value={req_min_salary}  onChange={(e)=>{setReq_min_salary(e.target.value)}}
                             className='w-full rounded-xl flex p-2 border  border-gray-200
                              focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                         <input type='text' placeholder='To(per month) ' value={req_max_salary}  onChange={(e)=>{setReq_max_salary(e.target.value)}}
                           className='w-full rounded-xl flex p-2 border  border-gray-200
                               focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                    </div>
                   
                </div>
                <div className='flex justify-between items-center'>
                         <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#E8ECFF]  text-[#3D5AFE]'
                           onClick={()=>setAi_curr_act('Requirements')}
                         >Back</button>
                        <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#3D5AFE] text-white'
                          onClick={()=>setAi_curr_act('')}
                        >Next</button>
                </div>
           
        </div>
        
    )
}
export default SkillsandPay