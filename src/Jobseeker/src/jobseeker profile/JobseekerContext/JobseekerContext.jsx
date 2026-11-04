import React, { createContext, useState } from 'react'
export const JobseekerProfileContext=createContext()

const JobseekerContext = (props) => {
    const [choice, setchoice] = useState('About')
  return (
    <div>
        <JobseekerProfileContext.Provider value={{choice,setchoice}}>
            {props.children}
        </JobseekerProfileContext.Provider>
    </div>
  )
}

export default JobseekerContext