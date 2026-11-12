import React, { useContext } from 'react'
import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

const Education = () => {
  const {choice,setchoice}=useContext(JobseekerProfileContext)
  console.log(choice)
  return (
     <div className={`w-full pl-22 pr-44 py-10 ${choice==="Education"?"flex flex-col":"hidden"}`}>
    <div className="w-full  ">
        <h3 className="text-[#1B2340] font-extrabold text-xl"> Your education</h3>
        <p className="text-[#6B7391] text-sm mt-3">Add your degrees.You can add more later.</p>
    </div>
    <div className="w-full px-5  rounded-xl bg-white flex flex-col  mt-3 py-8 text-sm text-[#6B7391] gap-3">
      <div>No education added yet.</div>
    <form className='flex flex-col gap-12' >
      <div className="flex justify-between w-full gap-2">
      <div className="flex flex-col gap-2 w-1/2">
      <label className="text-sm font-bold text-[#1B2340]">Degree</label>
      <input type="text"  className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 "></input>
    </div>
    <div className="flex flex-col gap-2 w-1/2 ">
      <label className="text-sm font-bold text-[#1B2340]">School / university</label>
      <input type="text"  className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 "></input>
    </div>
    </div>
    <div className="flex flex-col gap-2 w-1/2">
      <label className="text-sm font-bold  text-[#1B2340]">Year</label>
      <input type="number" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></input>
      <div>
      <button type="button" className="px-4 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            +Add
          </button>
          </div>
    </div>
    </form>
    </div>
    <div className="flex items-center justify-between pt-6 ">
<button onClick={()=>{
              setchoice("About")
}} type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            Back
          </button>
          <div className='flex gap-2'>
          <button type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold ">
            Skip for now
          </button>
          <button onClick={()=>{
            setchoice('Experience')

          }} type="submit"
            className="px-6 py-2.5 bg-[#3D5AFE] text-white  rounded-xl hover:bg-blue-700 font-bold ">
            Save and continue
            </button>
            </div>
    {/* </div>
    </form> */}
    </div>
    </div>
  )
}

export default Education