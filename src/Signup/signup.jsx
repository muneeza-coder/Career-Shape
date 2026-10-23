import React, { useState } from 'react'

import { FaLongArrowAltLeft } from "react-icons/fa";
<FaLongArrowAltLeft />

const SignUp=()=>{
     const[selected,setSelected]=useState(null)
    const [email,setEmail]=useState('')
    const[pass,setPass]=useState('')
    const[name,setName]=useState('')
     const [info,setInfo]=useState([])
    
     const setdata=(e)=>{
      // e.preventDefault();
      // const newinfo=[...info];
      //  newinfo.push({email,pass});
      //   setInfo(newinfo)
      
         

             console.log(email);
              console.log(pass);
             
             setEmail('')
              setPass('')
            

    }
  
    return(

       <div className=' w-full px-5 lg:w-1/2 py-4 lg:px-25 
        flex flex-col  bg-transparent  
           items-center '>
             <div className='flex flex-col px-5 py-2 w-full h-full  gap-3 items-start'>
                <button className='text-[#6B7391] font-semibold flex flex-row gap-2 
                   cursor-pointer'
                
                >
                  <FaLongArrowAltLeft className=' mt-1'/>Back to website </button>
                <h1 className=' text-4xl font-semibold'>Sign up</h1>
                <p className='text-[#6B7391]  '>Please enter your details to create your account</p>
                <h1 className='text-[#1B2340] font-semibold '>I am</h1>  
                <div  className=' flex flex-row gap-2 w-full '>
                    <button 
                            className= {`  flex flex-row  w-1/2 rounded-xl
                             cursor-pointer    p-2 items-center  justify-center
                              ${selected==="Hiring"?
                                        "text-[#3D5AFE]  border-2  border-[#3D5AFE] bg-[#dcdcdf]" :
                                        "text-[#1B2340] bg-[#FFFFFF] shadow-xl border-2 border-[#d4d5d6]"
                                }   `}
                            onClick={()=>setSelected("Hiring")}> 
                      
                      <h1>🏢</h1>
                      <h1 className='font-semibold ' >Hiring</h1>
                     </button>
                     <button 
                            className={`  flex flex-row w-1/2 rounded-xl
                             cursor-pointer p-2 items-center justify-center
                             ${selected==="Job seeker"?
                               "text-[#3D5AFE]  border-2  border-[#3D5AFE] bg-[#dcdcdf]" :
                                "text-[#1B2340] bg-[#FFFFFF] shadow-xl border-2 border-[#d4d5d6]"
                             }  `}
                            onClick={()=>setSelected("Job seeker")}
                            > 
                      <h1>🔍</h1>
                      <h1  className='font-semibold ' >Job seeker</h1>
                     </button>
              </div>
              
             
              <div className='flex flex-col  gap-1 w-full items-start'>
                  <h1 className='font-semibold'>Full Name</h1>
                   <input type="text" placeholder='Enter your Name '
                      className='w-full bg-white  border border-[#d4d5d6]
                      rounded-xl p-2 focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                      value={name}
                      onChange={(e)=>{
                        setName(e.target.value)
                      }}
                    />
                  <h1 className='font-semibold'>Email Address</h1>
                   <input type="email" placeholder='Enter your email address '
                      className='w-full bg-white border border-[#d4d5d6]
                      rounded-xl p-2  focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
                      value={email}
                      onChange={(e)=>{
                        setEmail(e.target.value)
                      }}
                    />
                     
                    <h1 className=' font-semibold'>Password</h1>
                    <input type="password" placeholder='Enter your password'
                      className='w-full bg-white border  border-[#d4d5d6]
                       rounded-xl p-2  focus:border-[#3D5AFE] outline-none 
                       focus:ring-1 focus:ring-[#3D5AFE]'
                       value={pass}
                       onChange={(e)=>{
                              setPass(e.target.value)
                   
                      }}
                    />
                      <br></br>
                    
                    <button
                       style={{ background:"linear-gradient(to right ,#4A3AFF,#2B2299)"}}
                       className=' w-full p-3 shadow-3xl
                       text-white rounded-2xl text-xl  active:scale-95 focus:outline-none
                         cursor-pointer  transition-transform '
                         onClick={(e)=>{
                           if(email.trim()==="" || pass.trim()==="" || name.trim()===""){
                                  alert("Please enter your email or password");
                              }else{
                          
                           setdata(e);
                              console.log(" sign up button clicked")
                            }
                          }
                        }
                      >Create account</button>
                      <div className='flex flex-row w-full gap-2 items-center justify-center  mt-3'>
                        <h1 className='text-[#6B7391] text-center'>Already have an account?</h1>
                        <a className='text-[#3D5AFE]  font-semibold cursor-pointer'
                          onClick={()=>{

                          }}
                        >Login</a>
                      </div>
                      
                     

               </div>
          </div>        
      </div>
    )
  }
export default SignUp