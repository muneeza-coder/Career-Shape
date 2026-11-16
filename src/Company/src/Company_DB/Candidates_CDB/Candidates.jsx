import React from 'react'
import Pipeline from './CandidatePipline.jsx'
const Candidate=()=>{
     const info=[
        {"About":"Total Candidates",
            "Count":"5"
        },
        {"About":"Under Reviewed",
            "Count":"8"
        },
        {'About':"Shortlisted",
            "Count":"9"
        },
        {'About':"Interviewed",
            "Count":"4"
        },
         {'About':"Hired",
            "Count":"4"
        },
         {'About':"Rejected",
            "Count":"4"
        }
    ]
    return(
        <div className=' w-full px-10 pt-14 pb-25 flex flex-col gap-5  '>
           <div className="bg-transparent w-full flex flex-col sm:flex-row justify-between gap-2 sm:gap-0"> 
                 <div  className='  flex flex-col justify-start gap-2  '>
                    <h1 className='text-3xl text-[#1B2340] font-bold'>Candidates</h1>
                    <h4 className=' text-[#6B7391]'>Move people through your pipeline.</h4>
                 </div>
                 <div className=' flex flex-col justify-between gap-2 pr-10'>
                    <button className=" w-fit bg-[#3D5AFE] text-white  px-4 py-3 rounded-xl  text-sm font-semibold  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95">Add Candidates</button>
                 </div>
            </div>
            <div  className='  w-full gap-2 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  '>
                {info.map((elem,index)=>{
                    return(
                        <div key={index} className='w-full flex flex-nowrap shrink-0  hover:shadow-xl hover:shadow-[#4A3AFF]/20 hover:scale-95  flex-col justify-between border border-gray-200 hover:border  hover:border-[#3D5AFE]  bg-white rounded-xl   p-4'>
                            <h1 className='w-full text-3xl font-bold text-[#1B2340]'>{elem.Count}</h1>
                            <h1 className='w-full text-sm text-[#6B7391]'>{elem.About}</h1>
                        </div>
                    )
                })}
            </div>
            <div className='w-full flex gap-2 border border-gray-200 p-1  hover:border  hover:border-[#3D5AFE] bg-white rounded-xl'>
                {/* <input type='text' placeholder='Search by name' className='border  border-gray-200 rounded-xl p-2 focus:border-[#3D5AFE] focus:ring focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/> */}
               <input type='text' placeholder='Search by name' className='border-0.5  border-gray-200 rounded-xl p-2  focus:border-[#3D5AFE] focus:ring focus:ring-[#3D5AFE] outline-none bg-[#F5F6FA]'/>

                {/* <Select>
                    <option></option>
                    <option></option>
                    <option></option>
                </Select> */}
            </div>
            <div>
                <Pipeline/>
            </div>
            
        </div>
    )
}
export default Candidate