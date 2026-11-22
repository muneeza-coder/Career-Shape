import React, { useContext, useState } from 'react'
import { Context } from '../../Company_Context/Company_Context.jsx'
import Employment_detail from './Cards/Employment_details.jsx'
const JobBasic=()=>{
    const[btnactive,setBtnactive]=useState(null)
     const{currrent_active,setCurrent_active}=useContext(Context)
   const{dep,setDep}=useContext(Context)
   const{job,setJob}=useContext(Context)
    const deplist=[
        {
            'Name':['Engineering','Design','Sales','Marketing','HR','Finance','Operation and Supply Chain',
                'Energy and power','Health & Medical','Law Enforcement & Judiciary','Agriculture, Forestry & Environment'
               ,'Social Welfare & Human Rights','Education and training'
            ]
        }
          
          
    ]
    return(
        <div className='flex flex-col gap-3'>
           
                <h2 className='text-2xl text-[#1B2340] font-extrabold'>Job basics</h2>
                <h4 className=' text-[#6B7391] '>Tell me which role you are hiring for</h4>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-sm text-[#1B2340] font-semibold'>Which job title you are hiring for?</h4>
                    <input type='text' placeholder='e.g.Frontend Developer ' value={job}  onChange={(e)=>{setJob(e.target.value)}}
                    className='w-full rounded-xl flex p-2 border  border-gray-200
                    focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-sm text-[#1B2340] font-semibold'> Which department is this job in?</h2>
                    <div className='flex flex-wrap w-full '>
                        {deplist.map((elem,index)=>{
                             
                           return(
                               <div key={index} className='flex flex-wrap w-full gap-3'>
                                {elem.Name.map((el,idx)=>{
                                    const isSelected = btnactive === el;
                                    return(
                                        <button key={idx}
                                            
                                             onClick={()=>{setBtnactive(el) ,
                                                setDep(el)
                                                }}
                                                
                                              className={` px-3 py-2 rounded-full text-sm font-bold ${isSelected ? "bg-[#3D5AFE] text-white ":" border border-[#3D5AFE]  text-[#3D5AFE] "}`}
                                          >{el}</button>
                                    )
                                })}
                               </div>
                                
                            
                           )
                        })}
                    </div>
                    <div className='flex justify-end items-end'>
                        <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#3D5AFE] text-white'
                          onClick={
                            setCurrent_active('Employment_detail')
                            
                          }
                        >Next</button>
                    </div>
                    
                </div>
                
            
        </div>
    )
}
export default JobBasic