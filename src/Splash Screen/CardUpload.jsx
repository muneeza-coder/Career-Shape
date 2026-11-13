import React, { useContext } from 'react'
import vid1 from "../../src/assets/vid1c.mp4"
import vid2 from "../../src/assets/vid2c.mp4"

import vid3 from "../../src/assets/vid3.mp4"
import vid4 from "../../src/assets/vid4.mp4"
import vid5 from "../../src/assets/Vid5c.mp4"
import vid6 from "../../src/assets/vidcc6.mp4"
import { stepsContext } from './SplashContext'



const CardUpload = () => {
    const { steps, setsteps } = useContext(stepsContext)
    return (
        <div className='w-full  flex  flex-col justify-center items-center '>

            <div className='w-full  flex justify-center items-center'>
                <video src={vid1} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "Upload" ? "flex" : "hidden"}`}></video>
                <video src={vid2} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "AI Reads" ? "flex" : "hidden"}`}></video>
                <video src={vid3} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "Match" ? "flex" : "hidden"}`}></video>
                <video src={vid4} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "Test" ? "flex" : "hidden"}`}></video>
                <video src={vid5} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "Result" ? "flex" : "hidden"}`}></video>
                <video src={vid6} autoPlay playsInline block controls={false} muted loop className={`w-[900px] h-[300px] shrink-0 ${steps === "Skill Gap" ? "flex" : "hidden"}`}></video>

            </div >





        </div >

    )
}

export default CardUpload