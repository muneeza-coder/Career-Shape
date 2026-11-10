import React, { useContext } from 'react'
import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

const Skill = () => {
    const {choice,setchoice}=useContext(JobseekerProfileContext)
    const skills=["react","css","javascript","typescript","figma","ux","sql","python","testing","excel","communication","leadership"]
  return (
  
    <div className={`w-full pl-22 pr-44 py-10 ${choice==="Skills"?"flex flex-col":"hidden"}`}>
        <div className="w-full  ">
        <h3 className="text-[#1B2340] font-extrabold text-xl">Your skills</h3>
        <p className="text-[#6B7391] text-sm mt-3">Employers search by skills.Add the ones you are good at.</p>
    </div>
    <div className="w-full px-5  rounded-xl bg-white flex flex-col  mt-3 py-8">
    <form className='flex flex-col gap-5' >
     <div className="flex gap-2">
      <label className="text-sm font-bold text-[#1B2340]"></label>
      <input type="text" placeholder= "Add a skill" className="w-full px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800"></input>
      <div>
       <button type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            +Add
          </button>
          </div>
          {/* <div>
            <p>No skills yet</p>
          </div> */}
    </div>
     <div className="">
            <p>No skills yet</p>
            <p>Suggested skills(click to add)</p>
          </div>
    <div className='flex gap-2 flex-wrap'>
        {skills.map((el)=>{
            return <div className='flex gap-1  rounded-xl border text-[#3D5AFE] border-[#3D5AFE]'>
        <p>+</p>
                <p>{el}</p>
                </div>

        })}
    </div>
    </form>
    </div>
    <div className="flex items-center justify-between pt-6 ">
<button type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            Back
          </button>
          <button onClick={()=>{
            setchoice("CV & Preferences")
          }} type="submit"
            className="px-6 py-2.5 bg-[#3D5AFE] text-white  rounded-xl hover:bg-blue-700 font-bold">
            Save and continue
            </button>
            </div>
    </div>
  )
}

export default Skill