
import React from 'react'
// shadow-xl sets the size of the shadow

// It makes a large, soft shadow under the box. The size options go from small to large:


// By default the shadow is grey-black.

// 2. shadow-[#4A3AFF]/20 sets the color of the shadow

// It has two parts:

// shadow-[#4A3AFF]: the shadow color is violet 
// #4A3AFF. The square brackets let you type any hex color.
// /20: the opacity is 20%. This is the same as adding 33 to the end of the hex color (#4A3AFF33).

const Pipcard1 = () => {
    return (
        <div className='w-full flex mt-4 justify-center items-center px-4 md:px-11 xl:pl-41 xl:pr-10 lg:pl-9 xl:justify-start 2xl:pl-50 2xl:pr-30 2xl:items-start '>
            <div className='w-full rounded-xl xl:w-[90%] px-5 pt-4 2xl:w-[90%] flex flex-col gap-5  bg-white shadow-xl shadow-[#4A3AFF]/20 border-1 border-[#E4E7F1]'>
                <div className='flex gap-2 '>
                    <div className='w-3 h-3 rounded-full bg-[#E4E7F1]'></div>
                    <div className='w-3 h-3 rounded-full bg-[#E4E7F1]'></div>
                    <div className='w-3 h-3 rounded-full bg-[#E4E7F1]'></div>
                </div>
                <div className='flex gap-2 w-full flex-wrap sm:flex-nowrap'>
                    {/* flex-[1_1_200px]:means card grow shrink according to available width */}
                    <div className='rounded-xl flex-[1_1_200px] flex flex-col px-2 py-3 bg-[#E4E7F1]/45 gap-3 border-1 border-[#E4E7F1]'>
                        <p className='text-[#6B7391] text-sm font-semibold'>Applied</p>
                        <span className=' w-full flex  gap-1 bg-white pl-2 py-2  rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#775622] bg-[#F7E6C9] p-1.5 text-[10px] font-bold'>OH</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Omer</p></span>
                        <span className=' flex  gap-1 bg-white pl-2 py-2 rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#582277] bg-[#E7C9F7] p-1.5 text-[10px] font-bold'>SR</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Sofia</p></span>
                    </div>
                    <div className='rounded-xl flex-[1_1_200px] flex flex-col px-2 py-3 bg-[#E4E7F1]/45 gap-3 border-1 border-[#E4E7F1]'>
                        <p className='text-[#6B7391] text-sm font-semibold'>Screening</p>
                        <span className=' w-full flex  gap-1 bg-white pl-2 py-2  rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#777522] bg-[#F7F7C9] p-1.5 text-[10px] font-bold'>DP</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Daniyal</p></span>
                    </div>
                    <div className='rounded-xl flex-[1_1_200px] flex flex-col px-2 py-3 bg-[#E4E7F1]/45 gap-3 border-1 border-[#E4E7F1]'>
                        <p className='text-[#6B7391] text-sm font-semibold'>Test</p>
                        <span className=' w-full flex  gap-1 bg-white pl-2 py-2  rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#2E2277] bg-[#D0C9F7] p-1.5 text-[10px] font-bold'>AY</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Amna</p></span>
                        <span className=' flex  gap-1 bg-white pl-2 py-2 rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#297722] bg-[#CDF7C9] p-1.5 text-[10px] font-bold'>NB</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Nabeel</p></span>
                    </div>
                    <div className='rounded-xl flex-[1_1_200px]  flex flex-col px-2 py-3 bg-[#E4E7F1]/45 gap-3 border-1 border-[#E4E7F1]'>
                        <p className='text-[#6B7391] text-sm font-semibold'>Interview</p>
                        <span className=' w-full flex  gap-1 bg-white pl-2 py-2  rounded-xl '><p className=' w-fit h-fit rounded-full flex justify-center text-[#227736] bg-[#C9F7D4] p-1.5 text-[10px] font-bold'>LF</p><p className='text-xs text-[#1B2340] font-bold flex justify-center items-center'>Laraib</p></span>
                    </div>

                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Pipcard1