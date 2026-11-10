import React from 'react'
import SplashCard from './SplashCard'
import DownHeadings from './DownHeadings'
import logo from "../assets/logo1.svg"
import Steps from './Steps'
import SplashContext from './SplashContext'

const MainPart = () => {
    return (
        <SplashContext>
            <div className='flex flex-col  '>
                <div className='w-full  flex items-end justify-end '>
                    <button className='m-5 text-[#3D5AFE] rounded-xl py-2 px-3 text-sm  font-bold bg-[#E8ECFF] '>Skip</button>
                </div>
                <div className='flex flex-col w-full items-center gap-3 '>

                    <img className="w-50" src={logo}></img>
                    <div className='flex justify-center items-center '>
                        <SplashCard />
                    </div>
                    <div>
                        <DownHeadings />
                    </div>
                    <div>
                        <Steps />
                    </div>
                    <div className='flex justify-between items-center px-95 w-full '>
                        <p className='text-[12px] font-bold text-[#6B7391]'>Steps</p>
                        <button className='bg-[#3D5AFE] text-white px-5 rounded-xl font-bold py-3'>Enter Career Shape →</button>
                    </div>
                </div>
            </div>
        </SplashContext>
    )
}

export default MainPart