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
    <form className='flex flex-col gap-5' >
     <div className="flex gap-2">
      <label className="text-sm font-bold text-[#1B2340]">Upload your CV(optional)</label>
      <button>
        Choose file
      </button>
      <input type="text" placeholder= "No file chosen" className="w-full px-4 py-3 bg-[#F5F6FA] rounded-xl text-gray-800"></input>
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