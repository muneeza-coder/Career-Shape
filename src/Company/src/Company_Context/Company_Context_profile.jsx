import React, { createContext, useState } from 'react'
export const Company_Context_Profile=createContext()
const Context_Company_Profile=(props)=>{
    const [active,setActive]=useState('Company_info')
    return(
        <div>
            <Company_Context_Profile.Provider value={{active,setActive}}>
                  {props.children}
            </Company_Context_Profile.Provider>
        </div>
    )
}
export default Context_Company_Profile