import React, { useContext } from 'react'
import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'
const CV = () => {
    const {choice,setchoice}=useContext(JobseekerProfileContext)
  return (
    <div className={`w-full pl-22 pr-44 py-10 ${choice==="CV & Preferences"?"flex flex-col":"hidden"}`}>
        <div className="w-full  ">
        <h3 className="text-[#1B2340] font-extrabold text-xl">Your CV and job prefrences</h3>
        <p className="text-[#6B7391] text-sm mt-3">Optional,but it helps us match you with the right jobs.</p>
    </div>
    <div className="w-full px-5  rounded-xl bg-white flex flex-col  mt-3 py-8">
    <form className='flex flex-col gap-12' >
     <div className="flex gap-2">
      <label className="text-sm font-bold text-[#1B2340]">Upload your CV(optional)</label>
      <div>
        <button>
        Choose file
      </button>
      <button>
        No file choosen
      </button>
      </div>
      <input type=""></input>
      </div>
      <div  className="flex  justify-between gap-2 w-full">
    <div className="flex flex-col gap-2 w-1/2">
      <label className="text-sm font-bold  text-[#1B2340]">Expected salary (per month)</label>
      <input type="number" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></input>
    </div>
    <div className="flex flex-col gap-2 w-1/2">
      <label className="text-sm font-bold text-[#1B2340]">Preffered job type</label>
      {/* <input type="text" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></input> */}
      <select className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full">
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
        <option>Internship</option>
        </select>
    </div>
    </div>
     <div  className="flex  justify-between gap-2 w-full">
    <div clasName="flex flex-col w-1/2">
    
    <label className="text-sm font-bold text-[#1B2340]">Preffered city</label>
      {/* <input type="text" className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full"></input> */}
       <select className=" px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800 w-full">
        <option>Lahore</option>
        <option>Gujranwala</option>
        <option>Sialkot</option>
        <option>Rawalpindi</option>
         <option>Faisalabad</option> 
         <option>Remote</option>
        </select>
    </div>
  </div>
    {/* <div className='flex gap-2 flex-wrap'>
        {skills.map((el)=>{
            return <div className='flex gap-1  rounded-xl border text-[#3D5AFE] border-[#3D5AFE]'>
        <p>+</p>
                <p>{el}</p>
                </div>

        })} */}
    {/* </div> */}
    </form>
    </div>
    <div className="flex items-center justify-between pt-6 ">
<button onClick={()=>{
   setchoice("Skills")
}} type="button" className="px-6 py-2.5 border border-gray-300 text-[#3D5AFE]  rounded-xl hover:bg-gray-50 bg-[#E8ECFF] font-bold">
            Back
          </button>
          <button onClick={()=>{
            setchoice("CV & Preferences")
          }} type="submit"
            className="px-6 py-2.5 bg-[#3D5AFE] text-white  rounded-xl hover:bg-blue-700 font-bold">
            Finish and open my dashboard
            </button>
            </div>
    </div>

  )
}

export default CV
// import React, { useContext } from 'react'
// import { JobseekerProfileContext } from './JobseekerContext/JobseekerContext'

// const CV = () => {
//     const {choice,setchoice}=useContext(JobseekerProfileContext)
//   return (
//     <div className={`ml-50 ${choice==="CV & Preferences"?"flex flex-col":"hidden"}`}>
//         CV
//         </div>
//   )
// }

// export default CV