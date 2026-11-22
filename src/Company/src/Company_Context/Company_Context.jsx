import React, { createContext, useState } from 'react'
export const Context=createContext()

const Context_CS=(props)=>{
    const [active,setActive]=useState('Company_info')
    const[currrent_active,setCurrent_active]=useState('Job basics')
    const[dep,setDep]=useState('')
    const[job,setJob]=useState('')
     const[city,setCity]=useState('')
      const[emp_type,setEmp_type]=useState('')
    return(
        <div>
            <Context.Provider value={{active,setActive,dep,setDep,job,setJob,city,setCity,emp_type,setEmp_type ,currrent_active,setCurrent_active}}>
                  {props.children}
            </Context.Provider>
            
        </div>
    )
}
export default Context_CS