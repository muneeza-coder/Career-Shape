import React, { useState } from 'react'
import logo from '../assets/logo1.svg'
import { useNavigate } from 'react-router-dom'
import AdminProfile from '../AdminProfile/AdminProfile'
const SidebarAdmin = () => {
    const navigate = useNavigate()
    const [active, setactive] = useState("")
    const [tab, settab] = useState("")
    const menu =
        // ['◧     Overview', "✦   Moderate", "☺   Company", "★   Jobseeker", "✦   AI Agent", "☻   Profile", "←   Website", "⇥   Logout"]
        [

            { name: "Overview", icon: '◧' },
            { name: "Profile", icon: "☻" },
            { name: "Moderate", icon: "✦" },
            { name: "Company", icon: "☺" },
            { name: "Jobseeker", icon: "★" },

            { name: "AI Agent", icon: "✦" },
            { name: "Website", icon: "←" },
            { name: "Logout", icon: "⇥" },
        ]
    return (
        <div className='flex gap-30 w-full '>
            <div className='md:w-[230px] w-full bg-white md:h-screen fixed top-160 md:top-0 left-0 md:py-6 px-3 py-3 flex md:flex-col md:gap-3'>
                <img src={logo} className='hidden md:flex h-10  w-40  mb-3'></img>
                {menu.map((el) => {

                    return <div key={el.name}>
                        <div onClick={() => {
                            setactive(el.name)
                            settab(el.name)

                        }} className={`text-xs md:text-[15px]  w-full flex flex[1,1,200px] flex-col items-center justify-center md:items-start md:justify-start md:flex-row gap-3 rounded-xl px-4 py-3 font-bold hover:cursor-pointer  ${active === el.name ? "bg-[#E8ECFF]  text-[#3D5AFE]" : "text-[#6B7391]"}`}

                        >
                            <p>{el.icon}</p>
                            <p>{el.name}</p>
                        </div>

                    </div>
                })}

            </div>
            <div className={`${tab === "Profile" ? "flex ml-60 w-full" : "hidden"}`}>
                <AdminProfile />
            </div>


        </div>
    )
}

export default SidebarAdmin
// import React, { useState } from 'react'
// import logo from '../assets/logo1.svg'
// import { useNavigate } from 'react-router-dom'
// import AdminProfile from '../AdminProfile/AdminProfile'
// const SidebarAdmin = () => {
//     const navigate = useNavigate()
//     const [active, setactive] = useState("")
//     const menu =
//         // ['◧     Overview', "✦   Moderate", "☺   Company", "★   Jobseeker", "✦   AI Agent", "☻   Profile", "←   Website", "⇥   Logout"]
//         [

//             { name: "Overview", icon: '◧' },
//             { name: "Profile", icon: "☻" },
//             { name: "Moderate", icon: "✦" },
//             { name: "Company", icon: "☺" },
//             { name: "Jobseeker", icon: "★" },

//             { name: "AI Agent", icon: "✦" },
//             { name: "Website", icon: "←" },
//             { name: "Logout", icon: "⇥" },
//         ]
//     return (<div>

//         {menu.map((el) => {
//             return <div key={el.name} className='flex gap-30'>
//                 <div  className='w-[230px] bg-green-500'>
//                     <div></div>
//                 </div>
//                 <div></div>
//             </div>

//         })
//         }

//     </div>)




// }

// export default SidebarAdmin