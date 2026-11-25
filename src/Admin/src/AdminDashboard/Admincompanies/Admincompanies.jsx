// import React, { useState } from 'react'
// import Adcompcard from './Adcompcard'
// import { AdminContexts } from '../AdminContext'
// import { useContext } from 'react'


// const Admincompanies = () => {
//     const { allcards, setallcards, verfied, setverified, showCards, setshowCards, pending, setpending, rejected, setrejected } = useContext(AdminContexts)
//     const [all, setall] = useState(true)
//     const [pend, setpend] = useState(true)
//     const [reject, setreject] = useState(true)
//     const [verify, setverify] = useState(true)
//     const [selectpend, setselectpend] = useState(false)
//     const [selectrej, setselectrej] = useState(false)
//     const [selectverif, setselectverif] = useState(false)
//     const [selectall, setselectall] = useState(false)



//     return (
//         <div className='flex flex-col px-8 py-20 gap-4 w-full mb-20'>
//             <div className='flex flex-col gap-2'>
//                 <h3 className='font-extrabold text-[26px] text-[#1B2340]'>Companies</h3>
//                 <p className='text-[#6B7391] text-[15px]'>Verification and company accounts</p>
//             </div>
//             <div className="flex gap-3  items-center">
//                 <input type="text" placeholder="Search companies" className="border border-gray-200 rounded-xl p-3 w-80 outline-none focus:shadow-[0_0_8px_#3D5AFE] focus:border-focus:border-[#3D5AFE]"></input>
//                 <button onClick={() => {
//                     setall(!(all))
//                     setselectall(true)
//                     setselectpend(false)
//                     setselectrej(false)
//                     setselectverif(false)
//                 }} className={`rounded-full h-8 px-3 py-1 text-xs  font-extrabold  ${all && selectall === true ? "border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE] "}`} >All ({allcards})</button>
//                 <button
//                     onClick={() => {
//                         setpend(!(pend))
//                         setselectall(false)
//                         setselectpend(true)
//                         setselectrej(false)
//                         setselectverif(false)
//                     }}
//                     className={`rounded-full h-8 px-3 py-1 text-xs  font-extrabold  ${pend && selectpend === true ? "border-none bg-[#3D5AFE] text-white " : "border border-[#3D5AFE] text-[#3D5AFE]"}`} >Pending ({pending})</button>
//                 <button onClick={() => {
//                     setverify(!(verify))
//                     setselectall(false)
//                     setselectpend(false)
//                     setselectrej(false)
//                     setselectverif(true)
//                 }} className={`rounded-full h-8 px-3 py-1 text-xs  font-extrabold  ${verify && selectverif === true ? "border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE] "}`} >Verified ({verfied})</button>
//                 <button onClick={() => {
//                     setreject(!(reject))
//                     setselectall(false)
//                     setselectpend(false)
//                     setselectrej(true)
//                     setselectverif(false)
//                 }} className={`rounded-full h-8 px-3 py-1 text-xs  font-extrabold  ${reject && selectrej === true ? "border border-[#3D5AFE] text-[#3D5AFE]" : "border-none bg-[#3D5AFE] text-white"}`} >Rejected ({rejected})</button>

//             </div>
//             <Adcompcard />
//         </div>
//     )
// }

// export default Admincompanies
import React, { useState } from 'react'
import Adcompcard from './Adcompcard'
import { AdminContexts } from '../AdminContext'
import { useContext } from 'react'


const Admincompanies = () => {
    const { searchComp, setsearchComp, allcards, setallcards, verfied, setverified, showCards, setshowCards, pending, setpending, rejected, setrejected } = useContext(AdminContexts)
    const [selected, setselected] = useState("all")

    return (
        <div className='flex flex-col px-8 py-20 gap-4 w-full mb-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='font-extrabold text-[26px] text-[#1B2340]'>Companies</h3>
                <p className='text-[#6B7391] text-[15px]'>Verification and company accounts</p>
            </div>
            <div className="flex gap-3 flex-col lg:flex-row items-start lg:items-center">
                {/* <input type="text" placeholder="Search companies" className="border border-gray-200 rounded-xl p-3 w-80 md:w-100 outline-none focus:shadow-[0_0_8px_#3D5AFE] focus:border-focus:border-[#3D5AFE]"></input> */}
                {/* <input type="text" placeholder="Search companies" className="border-2 border-gray-200 rounded-xl p-3 w-80 md:w-100 outline-none  focus:border focus:ring-2  focus:border-[#3D5AFE]/50"></input> */}
                <input
                    type="text"
                    value={searchComp}
                    onChange={(e) => {
                        setsearchComp(e.target.value)
                        console.log(searchComp)
                    }}
                    placeholder="Search companies"
                    className="  w-80 md:w-[400px] "
                />
                <div className="flex gap-3">
                    <button onClick={() => {
                        setselected("all")
                        setshowCards("all")
                    }} className={`flex flex-wrap rounded-full  px-3 py-1 text-xs  font-extrabold  ${selected === "all" ? " border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE]"}`} >All ({allcards})</button>
                    <button
                        onClick={() => {
                            setselected("pending")
                            setshowCards("Pending")


                        }}
                        className={`flex flex-wrap rounded-full  px-3 py-1 text-xs  font-extrabold  ${selected === "pending" ? " border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE]"}`} >Pending ({pending})</button>
                    <button onClick={() => {
                        setselected("verify")
                        setshowCards("Verified")

                    }} className={`flex flex-wrap rounded-full  px-3 py-1 text-xs  font-extrabold  ${selected === "verify" ? " border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE]"}`} >Verified ({verfied})</button>
                    <button onClick={() => {
                        setselected("rejected")
                        setshowCards("Rejected")

                    }} className={`flex flex-wrap rounded-full  px-3 py-1 text-xs  font-extrabold  ${selected === "rejected" ? " border-none bg-[#3D5AFE] text-white" : "border border-[#3D5AFE] text-[#3D5AFE]"}`} >Rejected ({rejected})</button>

                </div>
            </div>
            <Adcompcard />
        </div>
    )
}

export default Admincompanies