import React, { useContext, useEffect } from 'react'
import vid1 from "../../src/assets/vid1c.mp4"
import vid2 from "../../src/assets/vid2c.mp4"

import vid3 from "../../src/assets/vid3cp.mp4"
import vid4 from "../../src/assets/vidc4.mp4"
import vid5 from "../../src/assets/vidc5.mp4"
import vid6 from "../../src/assets/vidc6.mp4"
import { stepsContext } from './SplashContext'
import { useNavigate } from 'react-router-dom'



const CardUpload = () => {
    const navigate = useNavigate()
    const { steps, setsteps } = useContext(stepsContext)
    const steplist = ["Upload", "AI Reads", "Match", "Test", "Result", "Skill Gap"]
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setsteps((current) => {
    //             const index = steplist.indexOf(current)
    //             return steplist[(index + 1) % steplist.length]

    //         })

    //     }, 9000)
    //     return () => clearInterval(interval)
    // }, [setsteps])
    const handleVideoEnd = () => {
        setsteps(current => {
            const index = steplist.indexOf(current)
            return steplist[(index + 1) % steplist.length]
        })
    }
    return (
        <div className='w-full  flex  flex-col justify-center items-center '>

            <div className='w-full  flex justify-center items-center'>
                <video src={vid1} autoPlay onEnded={handleVideoEnd} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "Upload" ? "flex" : "hidden"}`}></video>
                <video src={vid2} autoPlay onEnded={handleVideoEnd} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "AI Reads" ? "flex" : "hidden"}`}></video>
                <video src={vid3} autoPlay onEnded={handleVideoEnd} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "Match" ? "flex" : "hidden"}`}></video>
                <video src={vid4} autoPlay onEnded={handleVideoEnd} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "Test" ? "flex" : "hidden"}`}></video>
                <video src={vid5} autoPlay onEnded={handleVideoEnd} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "Result" ? "flex" : "hidden"}`}></video>
                <video src={vid6} autoPlay onEnded={() => {
                    navigate("/home")
                }} playsInline block controls={false} muted className={`w-[900px] h-[300px] shrink-0 ${steps === "Skill Gap" ? "flex" : "hidden"}`}></video>

            </div >





        </div >

    )
}

export default CardUpload