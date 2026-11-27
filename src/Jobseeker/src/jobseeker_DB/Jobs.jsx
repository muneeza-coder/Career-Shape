import React, { useState } from 'react'
const Jobs = () => {
    const [click,setClick]=useState('Jobs')
          const [Tab,setTab]=useState("Jobs")
          const list=[
                {name:'Frontend Developer', department: 'Enginerring', skills:['react','css','typescript','testing']},
      {name:'Product Designer', department: 'Design', skills:['figma','research','prototyping','ux']},
      {name:'Sales Manager', department: 'Sales', skills:['negotiation','crm','leadership','b2b']},
          ]
  return (
    <div className="w-full flex flex-col gap-3 ml-7 mt-22 pr-5 mb-45 ">
        <div>
<h3 className="text-[#1B2340] font-extrabold text-3xl">Jobs for you</h3>
 <p className="text-[#6B7391] text-medium py-3">Ranked by how well your skills match.</p>
    <div className='py-3'>
     <input type="text" placeholder='Search jobs' className=" px-3 py-2 bg-[#F5F6FA] rounded-xl text-gray-800  border border-gray-300 w-1/3"></input>
     </div>
     </div>
     
     <div className='flex flex-col gap-3'>
       {list.map((elem)=>{
return <div className='bg-white rounded-lg px-4 py-5 flex flex-col gap-3'>
  <h3 className='font-bold text-black'>{elem.name}</h3>
  <h3 className="  text-[#6B7391]  text-sm font-medium">{elem.department}</h3>
  <button className='px-1 py-2  text-white rounded-lg bg-[#3D5AFE] font-bold w-20 text-sm'>
    Add
  </button>
  {/* <div className="border-dotted, border-gray-300, rounded-xl"> */}
  {/* <p>react</p>
  <p>css</p>
  <p>typescript</p>
  <p>testing</p> */}
  <div className='flex gap-2'>
{elem.skills.map((el)=>{
  return <p className="border border-dashed border-gray-800 rounded-lg px-2 py-1 text-xs">{el}</p>
})}
  </div>
  </div>
       })}
     </div>
    </div>
  )
}

export default Jobs