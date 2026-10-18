import React from 'react'

const Pipcard2 = () => {
    return (
        <div className='w-full gap-5 flex pl-50 pr-60 '>
            {/* <div className='w-full flex mt-4 justify-center items-center '> */}
            <div className='bg-white px-3 py-4 rounded-xl gap-3 border-2 border-[#E4E7F1] flex flex-col flex-[1_1_200px] justify-center items-center'>
                <span>🎯</span>
                <p>AI match Scores</p>
                <h3 className='text-center'>Ever candidate is scored against the job's required skills, so you start with the best fits</h3>
            </div>
            <div className='bg-white px-3 py-4 rounded-xl gap-3 border-2 border-[#E4E7F1] flex flex-col flex-[1_1_200px] justify-center items-center'>
                <span>🧭</span>
                <p>Simple pipline</p>
                <h3 className='text-center'>Move people from Applied to Hired on one clear board. No setup needed</h3>
            </div>
            <div className='bg-white px-3 py-4 rounded-xl gap-3 border-2 border-[#E4E7F1] flex flex-col flex-[1_1_200px] justify-center items-center'>
                <span>💡</span>
                <p>Skill gap hints</p>
                <h3 className='text-center'>See which required skills a candidate is missing before you book the interview</h3>
            </div>
            <div className='bg-white px-3 py-4 rounded-xl gap-3 border-2 border-[#E4E7F1] flex flex-col flex-[1_1_200px] justify-center items-center'>
                <span>📊</span>
                <p>Live dashboard</p>
                <h3 className='text-center'>Open jobs, candidate in interview and hires, all in one view</h3>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Pipcard2