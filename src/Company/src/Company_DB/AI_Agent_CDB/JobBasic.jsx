import React, { useState } from 'react'
const JobBasic=()=>{
    const[btnactive,setBtnactive]=useState(null)
   const[dep,setDep]=useState(null)
   const[job,setJob]=useState(null)
    const deplist=[
        {
            'Name':'Engineering'
        },
          {
            'Name':'Design'
        },
          {
            'Name':'Sales'
        },
          {
            'Name':'Marketing'
        },
          {
            'Name':'HR'
        },
          {
            'Name':'Finance'
        },
          {
            'Name':'Operation and Supply Chain'
        },
          {
            'Name':'Energy and power'
        },
         {
            'Name':'Health & Medical'
        },
         {
            'Name':'Law Enforcement & Judiciary'
        },
          {
            'Name':'Agriculture, Forestry & Environment'
        },
        {
            'Name':'Social Welfare & Human Rights'
        },
          {
            'Name':'Education and training'
        }
    ]
    return(
        <div className='flex flex-col gap-3'>
           
                <h2 className='text-2xl text-[#1B2340] font-extrabold'>Job basics</h2>
                <h4 className=' text-[#6B7391] '>Tell me which role you are hiring for</h4>
                <div className='flex flex-col gap-1'>
                    <h4 className='text-sm text-[#1B2340] font-semibold'>Which job title you are hiring for?</h4>
                    <input type='text' placeholder='e.g.Frontend Developer ' onInput={setJob}
                    className='w-full rounded-xl flex p-2 border  border-gray-200
                    focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-sm text-[#1B2340] font-semibold'> Which department is this job in?</h2>
                    <div className='flex flex-wrap w-full gap-3'>
                        {deplist.map((elem,index)=>{
                             const isSelected = btnactive === elem.Name;
                           return(
                           
                                <button key={index}
                                 onClick={()=>{setBtnactive(elem.Name) 
                                               setDep(elem.Name)
                                               }}
                                className={` px-3 py-2 rounded-full text-sm font-bold ${isSelected ? "bg-[#3D5AFE] text-white ":" border border-[#3D5AFE]  text-[#3D5AFE] "}`}
                                >{elem.Name}</button>
                            
                           )
                        })}
                    </div>
                    <div className='flex justify-end items-end'>
                        <button className='flex items-center py-3 px-5  font-semibold rounded-xl bg-[#3D5AFE] text-white'>Next</button>
                    </div>
                    
                </div>
                
            
        </div>
    )
}
export default JobBasic