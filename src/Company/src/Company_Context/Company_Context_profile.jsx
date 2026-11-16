import React, { createContext, useState } from 'react'
export const Company_Context_Profile=createContext()
const Context_Company=(props)=>{
    const [active,setActive]=useState('Company_info')
    const[dep,setDep]=useState(null)
    const[job,setJob]=useState(null)
    return(
        <div>
            <Company_Context_Profile.Provider value={{active,setActive,dep,setDep,job,setJob}}>
                  {props.children}
            </Company_Context_Profile.Provider>
        </div>
    )
}
export default Context_Company