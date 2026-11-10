import React, { useState } from 'react'
import  { useContext } from 'react'
import {useNavigate} from'react-router-dom'
import { Company_Context_Profile } from '../Company_Context/Company_Context_profile.jsx'
import Logo from './Logo_Info.jsx'

const Company_Info=()=>{

    const[c_name,setC_name] =useState()
    const[industry,setIndustry] =useState()
    const[comp_size,setComp_size] =useState()
    const[address,setAddress] =useState()
    const[link,setLink] =useState()
    const[about,setAbout] =useState()

     const{active,setActive}=useContext(Company_Context_Profile)


//  sm:w-r-[59%] md:w-r-[67%]
    return(
        <div  className={`${active==='Company_info'?"w-full h-full px-6 py-10 flex flex-wrap flex-col items-center justify-start  gap-4 sm:w-[500px] sm:flex sm:flex-wrap sm:flex-col sm:py-5 sm:px-5 md:w-[600px] md:flex md:flex-wrap md:px-8 lg:w-[800px] lg:px-8":"hidden"} `} >

         
            <div className='w-full flex flex-col items-start justify-start gap-4 '>
                 <h1 className=' text-3xl font-bold text-[#1B2340]'>Tell us about your company</h1>
                 <p className='text-[#6B7391]  '>Job seekers will see this on your job posts.</p>
            </div>
            <div className='w-full flex flex-wrap flex-col gap-4 justify-center rounded-xl 
                    px-4 py-8 border border-[#d4d5d6] bg-white'>
                <div className=' flex flex-col w-full md:w-full md:flex md:flex-row  md:gap-2 xl:gap-3 '>
                    <div className='flex flex-col w-full md:w-1/2 gap-2 '>
                      <h1 className='text-[#1B2340] font-bold text-sm'>Comapny name</h1>
                      <input type='text' id="c_name" name='c_name'
                           value={c_name}
                      onChange={(e)=>
                             setC_name( e.target.value)
                      }
                        className='text-sm border border-[#d4d5d6] py-3 px-2 bg-[#F5F6FA] rounded-xl  focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                       
                     />
                    </div>
                    <div className=' flex flex-col w-full md:w-1/2 gap-2'>    
                      <label  htmlFor="Industry" className='text-[#1B2340] font-bold text-sm' >Industry</label>
                      <select id="Industry" name="Industry" className='py-3 px-2 text-sm bg-[#F5F6FA] border border-[#d4d5d6] rounded-xl
                           focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                           value={industry}
                      onChange={(e)=>
                             setIndustry( e.target.value)
                      }
                       >
                                 <option value="Software Engineering">Software Engineering</option>
                                 <option value="Electric ">Electric </option>
                                 <option value="Service Provider">Service Provider</option>
                                 <option value="Plastic Factory">Plastic Factory</option>
                               

                      </select>
                    </div>
                </div>
                <div className='  flex flex-col w-full md:w-full md:flex md:flex-row md:gap-2 xl:gap-3 '>
                    <div className=' flex flex-col w-full md:w-1/2 gap-2'>
                      <h1 className='text-[#1B2340] font-bold text-sm'>Company size(employees)</h1>
                      <input type='number' id="comp_size" name='comp_size'
                        className='text-sm border border-[#d4d5d6] py-3 px-2  bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                         value={comp_size}
                         onChange={(e)=>
                             setComp_size( e.target.value)
                      }
                       
                     />
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 gap-2'>    
                      <h1 className='text-[#1B2340] font-bold text-sm'>City/address</h1>
                      <input type='text' id="address" name='address'
                        className=' text-sm border border-[#d4d5d6] py-3 px-2   bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                        value={address}
                         onChange={(e)=>
                             setAddress( e.target.value)
                      }
                      />
                    </div>
                </div>
                 <div className='w-full flex flex-col gap-2'>
                   
                      <h1 className=' mt-2text-[#1B2340] font-bold text-sm'>Linkedin/Facebook/Website</h1>
                      <input type='text' placeholder='https://' id="link" name='link'
                        className=' text-sm border border-[#d4d5d6] p-3 bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'

                        value={link}
                      onChange={(e)=>
                             setLink( e.target.value)
                      }
                     />
                  
                 
                      <h1 className='mt-2 text-[#1B2340] font-bold text-sm'>About company </h1>
                      <textarea type='text' rows={3} id="about" name='about'
                        className='text-sm border border-[#d4d5d6] p-3 bg-[#F5F6FA] rounded-xl focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE] outline-none'

                        value={about}
                      onChange={(e)=>
                             setAbout( e.target.value)
                      }
                     />
                    
                </div>
            </div>  
            <div className='flex flex-wrap justify-end w-full   p-3 '>
               
             
              <button className=' text-sm flex flex-wrap justify-end
               rounded-xl px-3 py-3 font-semibold bg-[#3D5AFE] text-white'
                 onClick={()=>{
                  setActive('Logo & hiring plans')
                 }}
               >Save and continue</button>
            </div>
          


        </div>
    
    )
}
export default Company_Info