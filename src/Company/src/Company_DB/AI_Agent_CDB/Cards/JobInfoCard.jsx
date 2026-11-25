import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../Company_Context/Company_Context'
const Card=()=>{
    const{dep,setDep}=useContext(Context)
    const{job,setJob}=useContext(Context)
    const{city,setCity}=useContext(Context)
    const{emp_type,setEmp_type}=useContext(Context)
    const{req_experience,setReq_Experience}=useContext(Context)
    const{req_educaion,setReq_Education}=useContext(Context)
    const{req_skills,setReq_skills}=useContext(Context)
    const{req_min_salary,setReq_min_salary}=useContext(Context)
    const{req_max_salary,setReq_max_salary}=useContext(Context)
    const jobInfo=[
        {'title':'Job Title',
          'value':job
        },
        {
          'title':'Department'  ,
          'value':dep
        },
        {
          'title':'City'  ,
          'value':city
        },
         {
          'title':'Employment type'  ,
          'value':emp_type
        },
         {
          'title':'Required Experience'  ,
          'value':req_experience
        },
         {
          'title':'Required Education'  ,
          'value':req_educaion
        },
        {
          'title':'Required Skills'  ,
          'value':req_skills
        }
    ]

    return(
        <div  className='flex flex-col gap-3 p-2'>
            <h2 className=' text-[#1B2340] font-extrabold'>Your job post so far</h2>
            <h3 className=' text-[#6B7391] text-sm '>Your answers will appear here.</h3>
           <div>
                {jobInfo.map((elem,index)=>{
                return(
                    <div key={index} className='border-b border-gray-300 p-2'>
                        <h1  className='font-bold'>{elem.title}</h1>
                        <h1 className='text-sm text-gray-500'>{elem.value}</h1>

                    </div>
                )
                 })}
                  <div  className='border-b border-gray-300 p-2'>
                        <h1  className='text-sm font-bold'>Salary</h1>
                          <h1 className=' text-gray-500'>{req_min_salary}-{req_max_salary}</h1>
                        

                    </div>

           </div>
           
        </div>
    )
}
export default Card