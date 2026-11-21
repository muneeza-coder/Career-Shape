// import React from 'react'

// const ModerateCard = () => {

//     const list=[
//         {
//             "department":"Data Entry: earn $500/day",
//             "company":"QuickHire Co",
//             "reason":" Unrealistic pay, upfront fee requested, vague duties",
//         },
//         {
//             "department":"Remote Assistant (no experience)",
//             "company":"Unknown Agency",
//             "reason":"Personal email contact; same text posted by 6 accounts",
//         },
//         {
//             "department":"Sales Executive",
//             "company":"Peak Retail",
//             "reason":"Salary above market range, otherwise normal",
//         }
//     ]
//     return (
//         <div className='w-full border border-gray-300 rounded-xl px-3 py-6 mt-3 bg-white'>
//             <h3>Flagged Job Posting</h3>
//             <div className='flex justify-between border-b border-gray-300
//             '>
//                 <div className='flex flex-col gap-2'>
//                     <h3>Data Entry: earn$500/day</h3>
//                     <p>QUickHire Co</p>
//                     <p>Why flagged:Unrealistic payc, upfront free requested, vague duties</p>
//                 </div>
//                 <div className='flex gap-2 justify-center items-center'>
//                     <p className>92%risk</p>
//                     <button>Mark safe</button>
//                     <button>Review</button>
//                     <button>Remove</button>
//                 </div>
//             </div>
//             <div className='flex justify-between border-b border-gray-300
//             '>
//                 <div className='flex flex-col gap-2'>
//                     <h3>Data Entry: earn$500/day</h3>
//                     <p>QUickHire Co</p>
//                     <p>Why flagged:Unrealistic payc, upfront free requested, vague duties</p>
//                 </div>
//                 <div className='flex gap-2 justify-center items-center'>
//                     <p className>92%risk</p>
//                     <button>Mark safe</button>
//                     <button>Review</button>
//                     <button>Remove</button>
//                 </div>
//             </div>
//             <div className='flex justify-between border-b border-gray-300
//             '>
//                 <div className='flex flex-col gap-2'>
//                     <h3>Data Entry: earn$500/day</h3>
//                     <p>QUickHire Co</p>
//                     <p>Why flagged:Unrealistic payc, upfront free requested, vague duties</p>
//                 </div>
//                 <div className='flex gap-2 justify-center items-center'>
//                     <p className>92%risk</p>
//                     <button>Mark safe</button>
//                     <button>Review</button>
//                     <button>Remove</button>
//                 </div>
//             </div>
//             <div></div>
//             <div></div>
//         </div>
//     )
// }

// export default ModerateCard
import React, { useState } from 'react'

const ModerateCard = () => {

    const [list, setlist] = useState([
        {
            "department": "Data Entry: earn $500/day",
            "company": "QuickHire Co",
            "reason": " Unrealistic pay, upfront fee requested, vague duties",
            "risk": 92
        },
        {
            "department": "Remote Assistant (no experience)",
            "company": "Unknown Agency",
            "reason": "Personal email contact; same text posted by 6 accounts",
            "risk": 78

        },
        {
            "department": "Sales Executive",
            "company": "Peak Retail",
            "reason": "Salary above market range, otherwise normal",
            "risk": 41

        }
    ]
    )
    const size = list.length
    const [cutind, setcutind] = useState(0)
    const [remove, setremove] = useState("")
    return (
        <div className='w-full border border-gray-300 rounded-xl px-3 py-6 mt-3 bg-white'>
            <h3 className="text-[#1B2340] font-bold  text-[16px] mb-3">Flagged Job Posting</h3>
            {list.map((el, indx) => {
                return <div key={indx} className={`flex flex-col gap-2 lg:gap-0  items-start lg:items-center  lg:flex-row lg:justify-between py-2  border-b border-gray-300 ${indx === list.length - 1 ? "border-none" : "border-b border-gray-300"} `}>
                    <div className='flex flex-col gap-1 flex-wrap '>
                        <h3 className="text-[#1B2340] font-bold text-[15px]">{el.department}</h3>
                        <p className="text-[#6B7391]  text-sm">{el.company}</p>
                        <p className="text-[#6B7391] text-xs">Why flagged:{el.reason}</p>
                    </div>
                    <div className='flex flex-wrap sm:flex-nowrap  gap-2 justify-center items-center'>
                        <p className=" shrink-0 bg-[#e5484d1c] font-extrabold text-xs  text-[#E5484D] p-2 h-fit rounded-full ">{el.risk}% risk</p>
                        <button className="shrink-0 text-[#3D5AFE] font-bold text-xs bg-[#E8ECFF] px-2 py-1 h-fit rounded">Mark safe</button>
                        <button className="shrink-0 text-[#3D5AFE] font-bold text-xs bg-[#E8ECFF] px-2 py-1  h-fit rounded" >Review</button>
                        <button className="shrink-0 text-white text-xs font-bold bg-[#3D5AFE] px-2 py-1 h-fit rounded" onClick={() => {
                            setlist(list.filter((item, index) => index !== indx))
                        }}>Remove</button>
                    </div>
                </div>
            })}



        </div>
    )
}

export default ModerateCard