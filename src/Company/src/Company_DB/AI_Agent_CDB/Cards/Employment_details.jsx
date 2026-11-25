import React, { useContext, useState } from 'react'
import {Context} from '../../../Company_Context/Company_Context.jsx'
import Requirement from './Requirements.jsx'
const Employment_detail=()=>{
    
   const{ai_curr_act,setAi_curr_act}=useContext(Context)
   const{city,setCity}=useContext(Context)
   const{emp_type,setEmp_type}=useContext(Context)
   const[btnactive,setBtnactive]=useState(null)
    const employment_type=[
        {
            'Name':['Full-time','Part-time','Contract','Internship'
            ]
        }
          
          
    ]
    return(
        <div className='flex flex-col gap-3'>
           
                <h2 className='text-2xl text-[#1B2340] font-extrabold'>Employment details</h2>
                <h4 className=' text-[#6B7391] '>How and where will this peron work.</h4>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-sm text-[#1B2340] font-semibold'> In which city will this person?</h4>
                    <input type='text' placeholder='e.g.Frontend Developer ' value={city}  onChange={(e)=>{setCity(e.target.value)}}
                    className='w-full rounded-xl flex p-2 border  border-gray-200
                    focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-sm text-[#1B2340] font-semibold'> What type of employment is this?</h2>
                    <div className='flex flex-wrap w-full '>
                        {employment_type.map((elem,index)=>{
                             
                           return(
                               <div key={index} className='flex flex-wrap w-full gap-3'>
                                {elem.Name.map((el,idx)=>{
                                    const isSelected = btnactive === el;
                                    return(
                                        <button key={idx}
                                            
                                             onClick={()=>{setBtnactive(el) ,
                                                setEmp_type(el)
                                                }}
                                                
                                              className={` px-3 py-2 rounded-full text-sm font-bold ${isSelected ? "bg-[#3D5AFE] text-white ":" border border-[#3D5AFE]  text-[#3D5AFE] "}`}
                                          >{el}</button>
                                    )
                                })}
                               </div>
                                
                            
                           )
                        })}
                    </div>
                    <div className='flex justify-between items-center'>
                         <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#E8ECFF]  text-[#3D5AFE]'
                           onClick={()=>setAi_curr_act('Job basics')}
                         >Back</button>
                        <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#3D5AFE] text-white'
                          onClick={()=>setAi_curr_act('Requirements')}
                        >Next</button>
                    </div>
                    
                </div>
                
            
        </div>
    )
}
export default Employment_detail