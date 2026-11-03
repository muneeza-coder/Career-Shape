import { useState } from 'react'
import React, { useContext } from 'react'
import { Company_Context_Profile } from '../Company_Context/Company_Context_profile.jsx'
import { Navigate, useNavigate } from 'react-router-dom'
const Logo_Info = () => {

   const{active,setActive}=useContext(Company_Context_Profile)
   const navigate=useNavigate()
const[logo,setLogo]=useState()
//   const back=()=>{
//      onback({})
//    }   
//  const finish=()=>{
//      onfinish({})
//     }
  return (
    <div className={`${active==='Logo and hiring plans'?"w-full h-full px-6 py-10 flex flex-wrap flex-col items-center justify-start  gap-4 sm:w-[500px] sm:flex sm:flex-wrap sm:flex-col sm:mb-50 sm:py-5 sm:px-5 md:w-[600px] md:flex md:flex-wrap md:px-8 lg:w-[800px] lg:px-8":"hidden"}`}>
        <div className='flex flex-col items-start w-full gap-3'>
           <h1 className='text-3xl font-semibold'>Add your logo and hiring plans</h1>
           <p className='text-[#6B7391]'>Optional:You can change everything later.</p>
        </div>
        <div className='flex flex-col gap-2 bg-white w-full px-4 py-6 rounded-xl border border-gray-400 '>
           <h1 className='text-sm font-semibold bg-[#F5F6FA]'>Company logo(optional)</h1>
           <div 
            className=' w-full bg-gray-100 border border-gray-300 px-2 py-2 rounded-xl'
             value={logo}
            
            >
              <button className='text-[#3D5AFE] bg-blue-100 rounded-xl p-2'>Choose file </button>
            </div>
        
        
            <h3 className='text-sm font-semibold mt-2' > How many people do you plan to hire in the next 6 months</h3>
            
             <select className='w-full h-full bg-[#F5F6FA] border border-gray-300 px-2 py-4 rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'  >
              <option>Not sure yet</option>
              <option>10</option>
              <option>20</option>
             </select>
           
        
          
        </div>
        <div className=' w-full p-2 flex flex wrap justify-between'>
            <button 
              className='text-sm 
               rounded-xl p-3 font-semibold  text-[#3D5AFE] bg-blue-100'
              onClick={()=>{
              setActive('Company_info')
            }}>Back</button>

            <button className=' text-sm 
               rounded-xl p-3 font-semibold bg-[#3D5AFE] text-white'
            
            onClick={()=>{
              navigate('/Company_Dashboard')
            }}>Finish and open my dashboard</button>
        </div> 
    </div>
  )
}

export default Logo_Info