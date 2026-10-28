import React, { useState } from 'react'
import logo from '../assets/logo1.svg'
const SidebarAdmin = () => {
    const [active, setactive] = useState("")
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
        <div className='w-[230px] bg-white h-screen fixed top-0 left-0 py-6 px-3 flex flex-col gap-3'>
            <img src={logo} className='h-10  w-40  mb-3'></img>
            {menu.map((el) => {

                return <div key={el.name} onClick={() => setactive(el.name)} className={`text-[15px] w-full flex gap-3 rounded-xl px-4 py-3 font-bold hover:cursor-pointer  ${active === el.name ? "bg-[#E8ECFF]  text-[#3D5AFE]" : "text-[#6B7391]"}`}>
                    <p>{el.icon}</p>
                    <p>{el.name}</p>
                </div>
            })}
        </div>
    )
}

export default SidebarAdmin