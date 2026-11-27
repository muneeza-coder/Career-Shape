import React, { useState } from 'react'
import logo from '../../../assets/logo1.svg'
import { LayoutDashboard, ClipboardList, PanelsTopLeft, CircleUserRound, Check, CircleUser, ArrowLeft, LogOut } from "lucide-react"
import Overview from './Overview'
import Jobs from './Jobs'
import CV from './CV'
import Applied from './Applied'
import Result from './Result'
import Profile from './Profile'
const DB_sidebar = () => {
     const [click,setClick]=useState('Overview')
        const [Tab,setTab]=useState("Overview")
        const list=[
              {name:'Overview', icon: <LayoutDashboard size={17} strokeWidth={1.5} />},
                   {name:'Jobs', icon: <ClipboardList size={17} strokeWidth={1.5} /> },
                   {name:'CV', icon: <PanelsTopLeft size={17} strokeWidth={1.5} />},
                   {name:'Applied', icon: <CircleUserRound size={17} strokeWidth={1.5} /> },
                   {name:'Result',icon: <Check size={17} strokeWidth={1.5} /> },
                   {name:'Profile', icon: <CircleUser size={17} strokeWidth={1.5} />},
                    {name:'Website', icon: <ArrowLeft size={17} strokeWidth={1.5} />},
                   {name:'Logout', icon: <LogOut size={17} strokeWidth={1.5} />}
    
        ]
  return (
    <div>
        <div className='flex gap-30 w-full h-screen
        
        '
        
         > 

             
            <div 
             className='md:w-[230px] overflow-x-auto  overflow-y-hidden w-full gap-1 justify-evenly md:justify-start  z-50 bg-white md:h-screen md:overflow-y-auto fixed bottom-0 md:overflow-x-visible md:bottom-auto md:top-0 left-0 md:py-6 px-3 py-3 flex flex-row  flex-nowrap md:flex-col md:gap-3'
            // 'md:w-[230px] w-full gap-1 justify-evenly md:justify-start flex-nowrap z-50 bg-blue-500 md:h-screen md:overflow-y-auto fixed bottom-0 md:overflow-x-visible md:bottom-auto md:top-0 left-0 md:py-6 px-3 py-3 flex flex-row  flex-nowrap md:flex-col md:gap-3'
            >
                  <img src={logo} className='hidden sm:flex h-10  w-40  mb-3'></img>
                  {/* <div className='w-full h-1 bg-[#3D5AFE]'></div> */}
                  {list.map((elem)=>{
                      return (
                        <div key={elem.name}>
                            <button onClick={()=>{
                                setClick(elem.name)
                                setTab(elem.name)
                            }}
                             
                               className={`
                               text-xs md:text-[15px] flex-1 min-w-max md:w-full flex flex-nowrap flex-col items-center justify-center md:items-start md:justify-start md:flex-row gap-3 rounded-xl px-4 py-3 font-bold hover:cursor-pointer  ${click=== elem.name ?" bg-[#E8ECFF]  text-[#3D5AFE]  " : "text-[#6B7391] "} `} 
                            >    
                                <p>{elem.icon}</p>
                                <h2 >{elem.name}</h2>
                            </button>   


                        </div>
                      )
                  })}
                  {/* <button className={`min-w-max w-full flex flex-nowrap shrink-0 items-start justify-center flex-row gap-3 rounded-xl px-3 py-3 
                     font-bold hover:cursor-pointer  ${click=== elem.name ?" bg-[#E8ECFF]  text-[#3D5AFE] border-2 border-[#3D5AFE]" : "text-[#6B7391] "} `} 
                            
                   onClick={()=>{
                     
                   }}
                  >Logout</button> */}

                
            
            </div>  
          <div className={`${Tab==='Overview'?" flex w-full md:ml-60  ":"hidden"}`} >
                <Overview />
             </div>
              <div className={`${Tab==='Jobs'?" flex w-full md:ml-60":"hidden"}`}>
                    <Jobs/>
            </div>
            <div className={`${Tab==='CV'?" flex w-full md:ml-60":"hidden"}`}>
                    <CV/>
             </div>
            <div className={`${Tab==='Applied'?" flex w-full md:ml-60":"hidden"}`}>
                  <Applied/>
            </div>
                
             <div className={`${Tab==='Result'?" flex w-full md:ml-60":"hidden"}`}>
                  <Result/>
            </div>
              <div className={`${Tab==='Profile'?" flex w-full md:ml-60":"hidden"}`}>
                  <Profile/>
            </div>
            
            
        </div>
    </div>
  )
}

export default DB_sidebar