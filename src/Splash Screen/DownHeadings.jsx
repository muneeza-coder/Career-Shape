import React, { useContext } from 'react'
import { stepsContext } from './SplashContext'

const DownHeadings = () => {
    const { steps, setsteps } = useContext(stepsContext)
    return (

        <div className='flex flex-col justify-center items-center'>
            <div className={` ${steps === "Upload" ? "flex flex-col  gap-3" : "hidden"} `}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>Jobseeker uploads a CV</p>
                <p className='text-center text-sm text-[#6B7391]'>Added once and reused for every application, with no retyping</p>
            </div>
            <div className={` ${steps === "AI Reads" ? "flex flex-col  gap-3" : "hidden"}`}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>AI read</p>
                <p className='text-center text-sm text-[#6B7391]'>Skilla are found automatically, so nothing is missed </p>
            </div>
            <div className={` ${steps === "Match" ? "flex flex-col  gap-3" : "hidden"}`}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>Smart job match</p>
                <p className='text-center text-sm text-[#6B7391]'>candidtes are scored against the job skills, so companies see the best fit first</p>
            </div>
            <div className={` ${steps === "Test" ? "flex flex-col  gap-3" : "hidden"}`}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>AI online test</p>
                <p className='text-center text-sm text-[#6B7391]'>A short test is generated for the job and answered against a timer  </p>
            </div>
            <div className={` ${steps === "Result" ? "flex flex-col  gap-3" : "hidden"}`}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>Automatic result</p>
                <p className='text-center text-sm text-[#6B7391]'>Answers are marked instantly, with no manual checking </p>
            </div>
            <div className={` ${steps === "Skill Gap" ? "flex flex-col  gap-3" : "hidden"}`}>
                <p className='text-center font-bold text-lg text-[#1B2340]'>Skill gap analysis</p>
                <p className='text-center text-sm text-[#6B7391]'>Weak skills are highlighted with advice, so jobseekers what to learnc</p>
            </div>
        </div>
    )
}

export default DownHeadings