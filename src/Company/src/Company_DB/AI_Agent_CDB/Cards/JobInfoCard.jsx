import React from 'react'
import { useContext } from 'react'
import { Context } from '../../../Company_Context/Company_Context'
const Card=()=>{
     const{dep,setDep}=useContext(Context)
       const{job,setJob}=useContext(Context)
    const jobInfo=[
        {'title':'Department',
          'value':dep
        },
        {
          'title':'Job Title'  ,
          'value':job
        }
    ]
    return(
        <div  className='flex flex-col gap-3'>
            <h2 className='text-2xl text-[#1B2340] font-extrabold'>Your job post so far</h2>
            <h3 className=' text-[#6B7391] text-sm '>Your answers will appear here.</h3>
            {/* <div className='flex flex-col gap-3 '>
                     <div>
                        <h1 className='font-bold'> Department <h1 className='text-sm text-gray-500'>{dep}</h1></h1>
                     </div>
                     <div>
                        <h1 className='font-bold'>  Job title <h1 className='text-sm text-gray-500'>{job}</h1></h1>
                     </div>
                 
                 <div>
                    
                 </div>
            </div> */}
            {jobInfo.map((elem,index)=>{
                return(
                    <div key={index}>
                        <h1  className='font-bold'>{elem.title}</h1>
                        <h1 className='text-sm text-gray-500'>{elem.value}</h1>
                    </div>
                )
            })}
        </div>
    )
}
export default Card