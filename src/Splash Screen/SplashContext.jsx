import React, { createContext, useState } from 'react'
export const stepsContext = createContext()
const SplashContext = (props) => {
    const [steps, setsteps] = useState("Upload")
    return (
        <div>
            <stepsContext.Provider value={{ steps, setsteps }}>
                {props.children}
            </stepsContext.Provider>
        </div>
    )
}

export default SplashContext