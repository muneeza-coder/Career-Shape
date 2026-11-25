import React, { useContext, useState } from 'react'
import {Context} from '../../../Company_Context/Company_Context.jsx'

const Requirement=()=>{
    const{ai_curr_act,setAi_curr_act}=useContext(Context)
    const{req_experience,setReq_Experience}=useContext(Context)
    const{req_educaion,setReq_Education}=useContext(Context)
    const[exp_btnactive,setExp_btnactive]=useState(null)
     const[edu_btnactive,setEdu_btnactive]=useState(null)
    const experience_type=[
        {
            'type':['Fresher','1-2 years','3-4 years','5-6 years'
            ]
        }]
    const minimum_edu=[
        {
            'type':['MAtric/Intermediate',"Bachelor's degree","Master's degree",'Not required'
            ]
        }
          
          
    ]
    return(
        <div  className='flex flex-col gap-3'>
               <h2 className='text-2xl text-[#1B2340] font-extrabold'>Requirements</h2>
                <h4 className=' text-[#6B7391] '>What experince and educaion do you need?</h4>
        
                <div className='flex flex-col gap-2' >
                  <h2 className='text-sm text-[#1B2340] font-semibold'>How much experience you </h2>
                   {experience_type.map((elem,index)=>{
                       return(
                         <div key={index} className='flex flex-wrap w-full gap-3'>
                             {elem.type.map((el,idx)=>{
                                    const isSelected = exp_btnactive === el;
                                    return(
                                        <button key={idx}
                                            
                                             onClick={()=>{setExp_btnactive(el) ,
                                               setReq_Experience(el)
                                                }}
                                                
                                              className={` px-3 py-2 rounded-full text-sm font-bold ${isSelected ? "bg-[#3D5AFE] text-white ":" border border-[#3D5AFE]  text-[#3D5AFE] "}`}
                                          >{el}</button>
                                    )
                                })}
                         </div>
                        )
                     })}
                </div>
                <div className='flex flex-col gap-2' >
                  <h2 className='text-sm text-[#1B2340] font-semibold'>What minimum education do you need? </h2>
                   {minimum_edu.map((elem,index)=>{
                       return(
                         <div key={index} className='flex flex-wrap w-full gap-3'>
                             {elem.type.map((el,idx)=>{
                                    const isSelected = edu_btnactive === el;
                                    return(
                                        <button key={idx}
                                            
                                             onClick={()=>{setEdu_btnactive(el) ,
                                                setReq_Education(el)
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
                           onClick={()=>setAi_curr_act('employment_detail')}
                         >Back</button>
                        <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#3D5AFE] text-white'
                          onClick={()=>setAi_curr_act('skillsandpay')}
                        >Next</button>
                </div>
           
        </div>
        
    )
}
export default Requirement