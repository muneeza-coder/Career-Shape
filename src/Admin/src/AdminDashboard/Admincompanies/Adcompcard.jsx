// import React from 'react'

// const Adcompcard = () => {
//     const list = [
//         { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
//         { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
//         { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
//         { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



//     ]
//     return (
//         <div className='w-full border border-gray-300 rounded-xl px-3 py-6 mt-3 bg-white'>
//             <div className="bg-red-200 w-[70%] flex justify-between">
//                 <h6>Company</h6>
//                 <h6>Profile</h6>
//                 <h6>Jobs</h6>
//                 <h6>Status</h6>
//             </div>
//             <div>
//                 {list.map((el, indx) => {
//                     return <div className="flex justify-between ">
//                         <div className="bg-red-200 w-[73%] flex justify-between items-center">
//                             <h6 className="">{el.Name}</h6>
//                             <h6>{el.jobs}</h6>
//                             <h6>{el.profile}</h6>
//                             <h6>{el.status}</h6>
//                         </div>
//                         <div>
//                             <button>Approve</button>
//                             <button>Reject</button>

//                         </div>
//                     </div>

//                 })}
//             </div>

//         </div>
//     )
// }

// export default Adcompcard
import React from 'react'

const Adcompcard = () => {
    const list = [
        { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
        { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
        { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
        { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



    ]
    return (
        <div className='w-full border border-gray-300 rounded-xl px-6 py-6 mb-2 mt-3 bg-white'>
            <div className=" w-full sm:w-[80%] flex justify-between text-[#1B2340] text-[15px] font-bold">
                <h6 className="w-[28%]">Company</h6>
                <h6 className="w-[28%] pl-5  md:pl-6 lg:pl-0 sm:pl-8">Jobs</h6>
                <h6 className="w-[28%] sm:pr-14 md:pr-0">Profile</h6>
                <h6 className="w-[28%] md:pl-6 lg:pl-5
">Status</h6>
            </div>
            <div>
                {list.map((el, indx) => {
                    return <div className="flex-wrap sm:flex-nowrap w-full flex gap-5 border-b border-b-gray-200 py-4 ">
                        <div className=" w-full sm:w-[80%] flex justify-between items-center ">
                            <h6 className=" text-sm font-bold w-[28%] flex flex-wrap lg:flex-nowrap  text-[#1B2340]">{el.Name}</h6>
                            <h6 className="w-[28%] pl-6 sm:pl-10 md:pl-6 lg:ml-0 lg:pl-2 text-sm text-[#6B7391]">{el.jobs}</h6>
                            <h6 className="w-[28%]  text-sm text-[#6B7391]">{el.profile}</h6>
                            <div className="w-[28%] sm:pl-5 lg:ml-0">
                                <h6 className="w-[60px] h-[25px] text-xs  text-[#3D5AFE] bg-[#E8ECFF] px-2 py-1 rounded">{el.status}</h6>

                            </div>
                        </div>
                        <div className="flex-wrap shrink-0 flex gap-2 text-xs   sm:flex-row md:flex-col lg:flex-row  font-semibold justify-center items-center">

                            <button className="w-[60px] h-[25px]  text-white px-2 py-1 rounded bg-[#3D5AFE]">Approve</button>
                            <button className="w-[60px] h-[25px]  px-2 py-1 rounded text-[#3D5AFE] bg-[#E8ECFF]">Reject</button>

                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default Adcompcard
// import React from 'react'

// const Adcompcard = () => {
//     const list = [
//         { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
//         { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
//         { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
//         { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



//     ]
//     return (
//         <div className='w-full border border-gray-300 rounded-xl px-6 py-6 mb-2 mt-3 bg-white'>
//             <div className=" w-[80%] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  text-[#1B2340] text-[15px] font-bold">
//                 <h6 className="">Company</h6>
//                 <h6 className=" md:ml-6 lg:ml-0 ml-8">Jobs</h6>
//                 <h6 className=" pr-14 md:pr-0">Profile</h6>
//                 <h6 className=" lg:pl-5
// ">Status</h6>
//             </div>
//             <div>
//                 {list.map((el, indx) => {
//                     return <div className="w-full flex gap-5 border-b border-b-gray-200 py-4 ">
//                         <div className=" w-[80%] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] ">
//                             <h6 className=" text-sm font-bold  flex  text-[#1B2340]">{el.Name}</h6>
//                             <h6 className=" text-sm text-[#6B7391]">{el.jobs}</h6>
//                             <h6 className="  text-sm text-[#6B7391]">{el.profile}</h6>
//                             <div className=" ">
//                                 <h6 className="w-[60px] h-[25px] text-xs  text-[#3D5AFE] bg-[#E8ECFF] px-2 py-1 rounded">{el.status}</h6>

//                             </div>
//                         </div>
//                         <div className="flex gap-2 text-xs font-semibold justify-center items-center">

//                             <button className="w-[60px] h-[25px]  text-white px-2 py-1 rounded bg-[#3D5AFE]">Approve</button>
//                             <button className="w-[60px] h-[25px]  px-2 py-1 rounded text-[#3D5AFE] bg-[#E8ECFF]">Reject</button>

//                         </div>
//                     </div>

//                 })}
//             </div>

//         </div>
//     )
// }

// export default Adcompcard