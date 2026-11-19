import React from 'react'
import SplashCard from './SplashCard'
import DownHeadings from './DownHeadings'
import logo from "../assets/logo1.svg"
import Steps from './Steps'
import SplashContext from './SplashContext'
import { useNavigate } from 'react-router-dom'

const MainPart = () => {
    const navigate = useNavigate()
    return (
        <SplashContext>
            <div className='w-full flex flex-col '>
                <div className='w-full flex items-end justify-end '>
                    <button onClick={() => {
                        navigate("/home")
                    }} className='m-5 shadow-sm shadow-[#3D5AFE]  hover:bg-[#3D5AFE] hover:text-white text-[#3D5AFE] rounded-xl py-2 px-3 text-sm  font-bold bg-[#E8ECFF] '>Skip</button>
                </div>
                <div className='flex flex-col  items-center gap-3  '>

                    <img className="w-50" src={logo}></img>
                    {/* <div className='flex justify-center items-center '>
                        <SplashCard />
                    </div> */}
                    <div className='w-full flex justify-center items-center px-5 sm:px-0 '>
                        <SplashCard />
                    </div>
                    <div className='w-full px-5'>
                        <DownHeadings />
                    </div>
                    {/* <div className='w-full px-5 sm:px-7 md:px-26 '> */}
                    <div className='w-full px-5 flex justify-center items-center '>

                        <Steps />
                    </div>
                    {/* <div className='flex justify-between items-center px-95 w-full '>
                        <p className='text-[12px] font-bold text-[#6B7391]'>Steps </p>
                        <button className='bg-[#3D5AFE] text-white px-5 rounded-xl font-bold py-3'>Enter Career Shape →</button>
                    </div> */}
                </div>
            </div>
        </SplashContext>
    )
}

export default MainPart