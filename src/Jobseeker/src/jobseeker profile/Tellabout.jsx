import React, { useContext } from 'react'
import {JobseekerProfileContext} from './JobseekerContext/JobseekerContext'

const Tellabout = () => { 
  const {choice,setchoice}=useContext(JobseekerProfileContext)
  return (
    // <div className='w-full pl-22 pr-44 py-10       '>
        <div className={`w-full pl-22 pr-44 py-10   ${choice==="About"?"flex flex-col":"hidden"}`}>

    <div className="w-full  ">
        <h3 className="text-[#1B2340] font-extrabold text-xl"> Tell us about yourself</h3>
        <p className="text-[#6B7391] text-sm mt-3">Your headline is the first thing employers see.</p>
    </div>
    <div className="w-full px-5  rounded-xl bg-white flex flex-col  mt-3 py-8">
    <form className='flex flex-col gap-5' >
      <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-[#1B2340]">Professional headline</label>
      <input type="text" placeholder= "Junior Web Developer" className="w-full px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800"></input>
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-[#1B2340]">Years of Experience</label>
      <input type="number" placeholder= "0" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></input>
    </div>
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold  text-[#1B2340]">Summary</label>
      <textarea rows="5" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></textarea>
    </div>
    </form>
    </div>
    <div className="flex items-center justify-between pt-6 ">
<button type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            Back
          </button>
          <button onClick={()=>{
            setchoice("Education")
          }} type="submit"
            className="px-6 py-2.5 bg-[#3D5AFE] text-white  rounded-xl hover:bg-blue-700 font-bold">
            Save and continue
            </button>
    {/* </div>
    </form> */}
    </div>
    </div>
  )
}

export default Tellabout