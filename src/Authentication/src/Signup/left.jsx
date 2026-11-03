import React, { useState } from 'react'
import logo from '../../../assets/logo.svg'

const Left = () => {
    return (
        <div style={{ background: "linear-gradient(to right ,#4A3AFF,#2B2299)" }}
            className=' hidden w-1/2  p-12  md:flex md:flex-col md:justify-between  '>
            <div className=' h-10  w-40 items-baseline    '
            >
                <img src={logo}
                    className='h-full w-full object-contain '
                />
            </div>
            <div className="flex flex-col gap-5">
                <h1 className='text-3xl  text-white font-bold '>Create your free account</h1>
                <p className='text-white text-[16px] font-normal  '>Companies track candidates. Job seeker apply and see their match score.</p>
            </div>

            <div className='flex  flex-wrap  p-2  bg-[#F5F6FA] rounded-xl'>

                <div className='pl-3 flex flex-row gap-2 h-4 w-20'>
                    <div className='h-3 w-3   bg-[#E4E7F1] rounded-4xl'></div>
                    <div className='h-3 w-3   bg-[#E4E7F1] rounded-4xl'></div>
                    <div className='h-3 w-3   bg-[#E4E7F1] rounded-4xl'></div>
                </div>
                <div className=' w-full gap-2 p-4  grid grid-cols-2  sm:grid-cols-2
                           md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 '>
                    <div className='flex  flex-col gap-3 p-2  flex-1   bg-[#E4E7F1]/45 rounded-xl '>
                        <h1 className='text-[#6B7391]   font-semibold text-sm '>Applied</h1>
                        <div className=' p-2 shadow  w-full bg-white  rounded-xl '>
                            <h1 className=' w-6 h-6 items-center text-[#775622] bg-[#F7E6C9] text-[10px] rounded-full text-center p-1 font-bold '>OH</h1>
                        </div>
                        <div className=' p-2  shadow  w-full bg-white  rounded-xl'>
                            <h1 className=' w-6 h-6 items-center text-[#582277] bg-[#E7C9F7]  text-[10px] rounded-full text-center p-1 font-bold '>SR</h1>
                        </div>

                    </div>
                    <div className='flex flex-1 flex-col gap-3 p-2   bg-[#E4E7F1]/45 rounded-xl'>
                        <h1 className='text-[#6B7391]  text-sm   font-semibold'>Screening</h1>
                        <div className=' p-2 shadow  w-full bg-white  rounded-xl '>
                            <h1 className=' w-6 h-6 items-center text-[#777522] bg-[#F7F7C9] text-[10px] rounded-full text-center p-1 font-bold '>DP</h1>
                        </div>

                    </div>
                    <div className='flex   flex-col gap-3 p-2  bg-[#E4E7F1]/45 rounded-xl'>
                        <h1 className='text-[#6B7391]  text-sm  font-semibold'>Interview</h1>
                        <div className=' p-2 shadow  w-full bg-white  rounded-xl '>
                            <p className=' w-6 h-6 items-center rounded-full flex justify-center text-[#2E2277] bg-[#D0C9F7] p-1.5 text-[10px] font-bold'>AY</p>
                        </div>
                        <div className=' p-2  shadow  w-full bg-white  rounded-xl'>
                            <h1 className=' w-6 h-6 items-center text-[#297722] bg-[#CDF7C9]  text-[10px] rounded-full text-center p-1 font-bold '>NB</h1>
                        </div>
                    </div>
                    <div className='flex  flex-col gap-3 p-2    bg-[#E4E7F1]/45 rounded-xl '>
                        <h1 className='text-[#6B7391]  text-sm font-semibold'>Offer</h1>
                        <div className=' p-2 shadow  w-full bg-white  rounded-xl '>
                            <h1 className=' w-6 h-6 items-center text-[#227736] bg-[#C9F7D4]  text-[10px] rounded-full text-center p-1 font-bold '>LF</h1>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Left