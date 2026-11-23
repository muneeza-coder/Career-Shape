// // import React from 'react'

// // const Adcompcard = () => {
// //     const list = [
// //         { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
// //         { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
// //         { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
// //         { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



// //     ]
// //     return (
// //         <div className='w-full border border-gray-300 rounded-xl px-3 py-6 mt-3 bg-white'>
// //             <div className="bg-red-200 w-[70%] flex justify-between">
// //                 <h6>Company</h6>
// //                 <h6>Profile</h6>
// //                 <h6>Jobs</h6>
// //                 <h6>Status</h6>
// //             </div>
// //             <div>
// //                 {list.map((el, indx) => {
// //                     return <div className="flex justify-between ">
// //                         <div className="bg-red-200 w-[73%] flex justify-between items-center">
// //                             <h6 className="">{el.Name}</h6>
// //                             <h6>{el.jobs}</h6>
// //                             <h6>{el.profile}</h6>
// //                             <h6>{el.status}</h6>
// //                         </div>
// //                         <div>
// //                             <button>Approve</button>
// //                             <button>Reject</button>

// //                         </div>
// //                     </div>

// //                 })}
// //             </div>

// //         </div>
// //     )
// // }

// // export default Adcompcard

// // import React from 'react'

// // const Adcompcard = () => {
// //     const list = [
// //         { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
// //         { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
// //         { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
// //         { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



// //     ]
// //     return (
// //         <div className='w-full border border-gray-300 rounded-xl px-6 py-6 mb-2 mt-3 bg-white'>
// //             <div className=" w-[80%] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))]  text-[#1B2340] text-[15px] font-bold">
// //                 <h6 className="">Company</h6>
// //                 <h6 className=" md:ml-6 lg:ml-0 ml-8">Jobs</h6>
// //                 <h6 className=" pr-14 md:pr-0">Profile</h6>
// //                 <h6 className=" lg:pl-5
// // ">Status</h6>
// //             </div>
// //             <div>
// //                 {list.map((el, indx) => {
// //                     return <div className="w-full flex gap-5 border-b border-b-gray-200 py-4 ">
// //                         <div className=" w-[80%] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] ">
// //                             <h6 className=" text-sm font-bold  flex  text-[#1B2340]">{el.Name}</h6>
// //                             <h6 className=" text-sm text-[#6B7391]">{el.jobs}</h6>
// //                             <h6 className="  text-sm text-[#6B7391]">{el.profile}</h6>
// //                             <div className=" ">
// //                                 <h6 className="w-[60px] h-[25px] text-xs  text-[#3D5AFE] bg-[#E8ECFF] px-2 py-1 rounded">{el.status}</h6>

// //                             </div>
// //                         </div>
// //                         <div className="flex gap-2 text-xs font-semibold justify-center items-center">

// //                             <button className="w-[60px] h-[25px]  text-white px-2 py-1 rounded bg-[#3D5AFE]">Approve</button>
// //                             <button className="w-[60px] h-[25px]  px-2 py-1 rounded text-[#3D5AFE] bg-[#E8ECFF]">Reject</button>

// //                         </div>
// //                     </div>

// //                 })}
// //             </div>

// //         </div>
// //     )
// // }

// // export default Adcompcard
// // import React from 'react'

// // const Adcompcard = () => {
// //     const list = [
// //         { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "pending" },
// //         { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "pending" },
// //         { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "verified" },
// //         { "Name": "Peak Retail", "jobs": 2, "profile": "Complete", "status": "pending" }



// //     ]
// //     return (
// //         <div className='w-full border border-gray-300 rounded-xl px-6 py-6 mb-2 mt-3 bg-white'>
// //             <div className=" w-full sm:w-[80%] flex justify-between text-[#1B2340] text-[15px] font-bold">
// //                 <h6 className="w-[28%]">Company</h6>
// //                 <h6 className="w-[28%] pl-5  md:pl-6 lg:pl-0 sm:pl-8">Jobs</h6>
// //                 <h6 className="w-[28%] sm:pr-14 md:pr-0">Profile</h6>
// //                 <h6 className="w-[28%] md:pl-6 lg:pl-5
// // ">Status</h6>
// //             </div>
// //             <div>
// //                 {list.map((el, indx) => {
// //                     return <div className="flex-wrap sm:flex-nowrap w-full flex gap-5 border-b border-b-gray-200 py-4 ">
// //                         <div className=" w-full sm:w-[80%] flex justify-between items-center ">
// //                             <h6 className=" text-sm font-bold w-[28%] flex flex-wrap lg:flex-nowrap  text-[#1B2340]">{el.Name}</h6>
// //                             <h6 className="w-[28%] pl-6 sm:pl-10 md:pl-6 lg:ml-0 lg:pl-2 text-sm text-[#6B7391]">{el.jobs}</h6>
// //                             <h6 className="w-[28%]  text-sm text-[#6B7391]">{el.profile}</h6>
// //                             <div className="w-[28%] sm:pl-5 lg:ml-0">
// //                                 <h6 className="w-[60px] h-[25px] text-xs  text-[#3D5AFE] bg-[#E8ECFF] px-2 py-1 rounded">{el.status}</h6>

// //                             </div>
// //                         </div>
// //                         <div className="flex-wrap shrink-0 flex gap-2 text-xs   sm:flex-row md:flex-col lg:flex-row  font-semibold justify-center items-center">

// //                             <button className="w-[60px] h-[25px]  text-white px-2 py-1 rounded bg-[#3D5AFE]">Approve</button>
// //                             <button className="w-[60px] h-[25px]  px-2 py-1 rounded text-[#3D5AFE] bg-[#E8ECFF]">Reject</button>

// //                         </div>
// //                     </div>

// //                 })}
// //             </div>

// //         </div>
// //     )
// // }

// // export default Adcompcard
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
//             {/* <div className=" w-[70%] bg-green-400  flex gap-33 text-[#1B2340] text-[15px] font-bold"> */}
//             <div className="flex w-[70%] md:w-[77%] lg:w-[70%]  justify-between">

//                 <h6 className="">Company</h6>
//                 <h6 className=" ">Jobs</h6>
//                 <h6 className="">Profile</h6>
//                 <h6 className=" 
// ">Status</h6>
//             </div>

//             <div className="flex w-full  justify-between">
//                 <div className="flex flex-col ">
//                     {list.map((el, indx) => {
//                         return <h6 className="whitespace-wrap">{el.Name}</h6>
//                     })}
//                 </div>
//                 <hr className="bg-red-500"></hr>
//                 <div className="flex flex-col border-b border-b-gray-200 pr-5 ">
//                     {list.map((el, indx) => {
//                         return <h6>{el.jobs}</h6>
//                     })}
//                 </div>
//                 <div className="flex flex-col border-b border-b-gray-200">
//                     {list.map((el, indx) => {
//                         return <h6>{el.profile}</h6>
//                     })}
//                 </div>
//                 <div className="flex flex-col border-b border-b-gray-200  pr-5 ">
//                     {list.map((el, indx) => {
//                         return <h6>{el.status}</h6>
//                     })}
//                 </div>
//                 <div className="flex flex-col border-b border-b-gray-200 ">
//                     {list.map((el, indx) => {
//                         return <div className="flex-wrap shrink-0 flex gap-2 text-xs   sm:flex-row md:flex-col lg:flex-row  font-semibold justify-center items-center">

//                             <button className="w-[60px] h-[25px]  text-white px-2 py-1 rounded bg-[#3D5AFE]">Approve</button>
//                             <button className="w-[60px] h-[25px]  px-2 py-1 rounded text-[#3D5AFE] bg-[#E8ECFF]">Reject</button>

//                         </div>
//                     })}
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Adcompcard 
import React, { useState } from 'react'

const Adcompcard = () => {
    const [list, setlist] = useState(
        [
            { "Name": "BrightLayer Ltd", "jobs": 3, "profile": "Complete", "status": "Pending", "AIhint": "Looks complete" },
            { "Name": "QuickHire Co", "jobs": 12, "profile": "Logo missing", "status": "Pending", "AIhint": " Needs manual review" },
            { "Name": "Nova Studio", "jobs": 4, "profile": "Complete", "status": "Verified", "AIhint": "Looks complete" },
            { "Name": "Peak", "jobs": 2, "profile": "Complete", "status": "Pending", "AIhint": " Looks complete" }

        ]
    )
    const list2 = []
    return (
        <div className="w-full  grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4  justify-between ">
            {list.map((el, indx) => {
                const checkStatus = list[el.status]
                return <div className="gap-4 p-5 h-[290px] bg-white w-full border border-gray-200 rounded-xl flex gap-3 flex-col">
                    <div className="flex justify-between">
                        <div className="flex gap-3">
                            {/* <div className="px-4 py-3 rounded-2xl bg-[#E8ECFF] text-[#3D5AFE] text-lg font-bold ">
                                {el.Name.at(0)}{el.Name.charAt(el.Name.indexOf(" ") + 1)}
                            </div> */}
                            <div className="px-4 py-3 rounded-2xl bg-[#E8ECFF] text-[#3D5AFE] text-lg font-bold ">
                                {el.Name.at(0)}{el.Name.includes(" ") ? el.Name.charAt(el.Name.lastIndexOf(" ") + 1) : ""}
                            </div>
                            <div className="flex flex-col">
                                <h5 className="text-lg text-[#1B2340] font-bold">{el.Name}</h5>
                                <p className="text-xs text-[#6B7391]">Company account</p>
                            </div>
                        </div>
                        <div className="flex gap-2 h-8 bg-[#E8ECFF] rounded-full px-2 py-1 justify-between items-center">
                            <div className={`w-2 h-2 rounded-full ${el.status === "Pending" ? "bg-[#E39A12]" : el.status === "Verified" ? "bg-[#16B890]" : "bg-[#E5484D]"}`}></div>
                            <h6 className="text-xs font-semibold text-[#1B2340]">{el.status}</h6>
                        </div>
                    </div>
                    <div className="flex gap-2 ">
                        <div className=" rounded-xl bg-gray-100 w-full h-20 gap-3 px-3 py-4">
                            <h6 className="text-lg font-bold text-[#1B2340]">{el.jobs}</h6>
                            <p className="text-xs text-[#6B7391]" >Jobs posted</p>
                        </div>
                        <div className=" rounded-xl bg-gray-100 w-full h-20 gap-3 px-3 py-4">

                            <h6 className="text-lg font-bold text-[#1B2340]">{el.profile}</h6>
                            <p className="text-xs text-[#6B7391]">Documents</p>
                        </div>
                    </div>
                    <div className="flex gap-2  items-center">
                        <div className={`w-2 h-2 rounded-full ${el.status === "Pending" ? "bg-[#E39A12]" : el.status === "Verified" ? "bg-[#16B890]" : "bg-[#E5484D]"}`}></div>
                        <p className="text-xs text-[#6B7391]">AI hint (demo): {el.AIhint}</p>
                    </div>
                    <div className={`flex justify-between gap-2 ${el.status === "Verified" || el.status === "Rejected" ? "hidden" : "flex"}`}>
                        <button onClick={() => {
                            const newList = [...list];
                            newList[indx].status = "Rejected";
                            setlist(newList);
                        }} className="flex justify-center items-center py-3 rounded-xl bg-[#E8ECFF] text-[#3D5AFE] text-sm font-bold w-full">
                            Reject
                        </button>
                        <button onClick={() => {
                            const newList = [...list]
                            newList[indx].status = "Verified"
                            setlist(newList)
                        }}
                            className={`flex justify-center items-center py-3 rounded-xl text-white bg-[#3D5AFE] text-sm font-bold w-full `}>
                            Approve
                        </button>
                    </div>
                    <button onClick={() => {
                        const newList = [...list]
                        newList[indx].status = "Pending"
                        setlist(newList)
                    }} className={`w-full py-3 items-center bg-[#E8ECFF] text-[#3D5AFE] justify-center font-bold rounded-xl ${el.status === "Verified" ? "flex" : "hidden"}`}>Revoke Approval</button>
                    <button onClick={() => {
                        const newList = [...list]
                        newList[indx].status = "Pending"
                        setlist(newList)
                    }} className={`w-full py-3 items-center bg-[#E8ECFF] text-[#3D5AFE] justify-center font-bold rounded-xl ${el.status === "Rejected" ? "flex" : "hidden"}`}>Review Again</button>

                </div>


            })}
        </div>
    )
}

export default Adcompcard