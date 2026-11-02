
import React, { createContext, useRef } from 'react'
export const HomeContextSection = createContext()
const HomeContext = (props) => {
    const sections = {
        work: useRef(null),
        browsejobs: useRef(null)
    }
    const sectionScroll = (sectionName) => {
        sections[sectionName]?.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <HomeContextSection.Provider value={{ sections, sectionScroll }}>
            {props.children}
        </HomeContextSection.Provider>
    )
}

export default HomeContext