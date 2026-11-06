import React, { useState } from 'react'
import logo from '../../../assets/logo1.svg'
import { useNavigate } from 'react-router-dom'
import AdminProfile from './AdminProfile/AdminProfile.jsx'
import { LayoutDashboard, UserRound, Sparkles, BuildingComplex, Star, Bot, ArrowLeft, LogOut } from "lucide-react"
import AdminOverview from './Admin Overview/AdminOverview'
import AdminModerate from './AdminModerate/AdminModerate'
const SidebarAdmin = () => {
    const navigate = useNavigate()
    const [active, setactive] = useState("Overview")
    const [tab, settab] = useState("Overview")
    const menu =
        // ['◧     Overview', "✦   Moderate", "☺   Company", "★   Jobseeker", "✦   AI Agent", "☻   Profile", "←   Website", "⇥   Logout"]
        [

            // { name: "Overview", icon: '◧' },
            // { name: "Profile", icon: "☻" },
            // { name: "Moderate", icon: "✦" },
            // { name: "Company", icon: "☺" },
            // { name: "Jobseeker", icon: "★" },

            // { name: "AI Agent", icon: "✦" },
            // { name: "Website", icon: "←" },
            // { name: "Logout", icon: "⇥" },
            { name: "Overview", icon: <LayoutDashboard size={17} strokeWidth={1.5} /> },
            { name: "Profile", icon: <UserRound size={17} strokeWidth={1.5} /> },
            { name: "Moderate", icon: <Sparkles size={17} strokeWidth={1.5} /> },
            { name: "Company", icon: <BuildingComplex size={17} strokeWidth={1.5} /> },
            { name: "Jobseeker", icon: <Star size={17} strokeWidth={1.5} /> },

            { name: "AI Agent", icon: <Bot size={17} strokeWidth={1.5} /> },
            { name: "Website", icon: <ArrowLeft size={17} strokeWidth={1.5} /> },
            { name: "Logout", icon: <LogOut size={17} strokeWidth={1.5} /> },
        ]
    return (
        <div className='flex gap-30 w-full '>
            {/* <div className='md:w-[230px] overflow-x-auto  sm:overflow-x-hidden w-full justify-evenly md:justify-start  bg-white md:h-screen fixed top-160 md:top-0 left-0 md:py-6 px-3 py-3 flex flex-row md:flex-col md:gap-3'> */}
            {/* <div className='
    fixed bottom-0 left-0 w-full bg-white z-50
    flex flex-row flex-nowrap justify-start gap-1
    overflow-x-auto overflow-y-hidden
    px-3 py-3
    md:top-0 md:bottom-auto md:w-[230px] md:h-screen
    md:flex-col md:gap-3 md:py-6
    md:overflow-x-visible md:overflow-y-auto
'></div> */}
            <div id="scbar" className='md:w-[230px] overflow-x-auto  overflow-y-hidden w-full gap-1 justify-evenly md:justify-start flex-nowrap z-50 bg-white md:h-screen md:overflow-y-auto fixed bottom-0 md:overflow-x-visible md:bottom-auto md:top-0 left-0 md:py-6 px-3 py-3 flex flex-row  flex-nowrap md:flex-col md:gap-3'>

                <img src={logo} className='hidden md:flex h-10  w-40  mb-3'></img>
                {menu.map((el) => {

                    return <div key={el.name}>
                        <div onClick={() => {
                            setactive(el.name)
                            settab(el.name)

                        }} className={`text-xs md:text-[15px] flex-1 min-w-max md:w-full flex flex-nowrap flex-col items-center justify-center md:items-start md:justify-start md:flex-row gap-3 rounded-xl px-4 py-3 font-bold hover:cursor-pointer  ${active === el.name ? "bg-[#E8ECFF]  text-[#3D5AFE]" : "text-[#6B7391]"}  `}

                        >
                            <p className='flex items-center justify-center'>{el.icon}</p>
                            <p>{el.name}</p>
                        </div>

                    </div>
                })}

            </div>
            <div className={`${tab === "Profile" ? "flex md:ml-60 w-full" : "hidden"}`}>
                <AdminProfile />
            </div>
            <div className={`${tab === "Overview" ? "flex flex-col w-full" : "hidden"}`}>
                <AdminOverview />
            </div>

            <div className={`${tab === "Moderate" ? "flex flex-col ml-60 w-full" : "hidden"}`}>
                <AdminModerate />
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