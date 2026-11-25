import React, { createContext, useState } from 'react'
export const Context=createContext()

const Context_CS=(props)=>{
    const [active,setActive]=useState('Company_info')
    const[ai_curr_act,setAi_curr_act]=useState('Job basics')
    const[dep,setDep]=useState('')
    const[job,setJob]=useState('')
    const[city,setCity]=useState('')
    const[emp_type,setEmp_type]=useState('')
    const[req_experience,setReq_Experience]=useState('')
    const[req_educaion,setReq_Education]=useState('')
    const[req_skills,setReq_skills]=useState('')
    const[req_min_salary,setReq_min_salary]=useState()
    const[req_max_salary,setReq_max_salary]=useState()
    return(
        <div>
            <Context.Provider value={{active,setActive,dep,setDep,job,setJob,city,setCity,emp_type,setEmp_type ,ai_curr_act,setAi_curr_act
                ,req_experience,setReq_Experience,req_educaion,setReq_Education,req_skills,setReq_skills,req_min_salary,setReq_min_salary
                ,req_max_salary,setReq_max_salary
         }}>
                  {props.children}
            </Context.Provider>
            
        </div>
    )
}
export default Context_CS