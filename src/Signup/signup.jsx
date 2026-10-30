import React, { useState } from 'react'

import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

<FaLongArrowAltLeft />

const SignUp = () => {
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [info, setInfo] = useState([])
  const navigate = useNavigate()
  
  const setdata = (e) => {
    console.log(email);
    console.log(pass);

    setEmail('')
    setPass('')


  }
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  return (

    // <div className=' w-full px-15 md:flex lg:w-1/2 py-20 lg:px-25 
    <div className=' w-full flex flex-col px-10 py-10  sm:px-20 sm:py-15  md:px-10 md:py-10  md:w-1/2 lg:py-13 lg:px-10 xl:px-30 2xl:px-35
               xl:py-13
      bg-transparent  
           '>
      <div className='flex flex-col  w-full h-full  gap-3 items-start'>
        <button className='text-[#6B7391] font-bold flex flex-row gap-2 
                   cursor-pointer'
          onClick={() => {
            navigate('/')
          }}

        >
          <FaLongArrowAltLeft className=' mt-1' />Back to website </button>
        <h1 className=' text-2xl font-extrabold mt-3'>Sign up</h1>
        <p className='text-[#6B7391]  '>Please enter your details to create your account</p>
        <h1 className='text-[#1B2340] text-sm  font-bold '>I am</h1>
        <div className=' flex flex-row gap-2 w-full  '>
          <button
            className={`  flex flex-row  w-1/2 rounded-xl
                             cursor-pointer   p-3  items-center  justify-center
                              ${selected === "Hiring" ?
                "text-[#3D5AFE]  border-2  border-[#3D5AFE] bg-[#E8ECFF]" :
                "text-[#1B2340] bg-[#FFFFFF]  border-2 border-[#d4d5d6]"
                }   
              `}
            onClick={() => setSelected("Hiring")}>

            <h1>🏢</h1>
            <h1 className='font-semibold ' >Hiring</h1>
          </button>
          <button
            className={`  flex flex-row w-1/2 rounded-xl
                             cursor-pointer p-3  items-center justify-center
                             ${selected === "Job seeker" ?
                "text-[#3D5AFE]  border-2  border-[#3D5AFE] bg-[#E8ECFF]" :
                "text-[#1B2340] bg-[#FFFFFF] border-2 border-[#d4d5d6]"
              }  `}
            onClick={() => setSelected("Job seeker")}
          >
            <h1>🔍</h1>
            <h1 className='font-semibold ' >Job seeker</h1>
          </button>
        </div>


        <div className='flex flex-col  gap-4 w-full items-start'>
          <h1 className='text-[#1B2340] text-sm  font-bold'>Full Name</h1>
          <input type="text"
            className='w-full bg-transparent  border border-[#d4d5d6]
                      rounded-xl p-3  text-sm focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <h1 className='text-[#1B2340] text-sm   font-bold'>Email Address</h1>
          <input type="email"
            className='w-full text-[#6B7391] bg-transparent border border-[#d4d5d6]
                      rounded-xl p-3 text-sm  focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          {/* <h1 className=' text-[#1B2340] text-sm   font-bold'>Password</h1> */}
          {/* <div className='w-full   p-3 flex justify-between rounded-xl border-1 border-[#d4d5d6] gap-5 bg-white focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE]'> */}
          {/* <div className='relative flex '>
            <input type="password" placeholder='At least 8 characters'
              className='w-full   p-3 rounded-lg border border-[#d4d5d6]  bg-white focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE]
                       '
              value={pass}
              onChange={(e) => {
                setPass(e.target.value)

              }}
            />
            <button className='absolute right-3 top-1/2 -translate-y-12 text-[#3D5AFE] font-medium hover:underline focus:outline-none'>Show</button>
          </div> */}
          <div className='w-full gap-3 flex flex-col'>
           <h1 className=' text-[#1B2340] text-sm   font-bold'>Password</h1>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
                className="w-full px-3 py-3 text-sm border border-[#d4d5d6]rounded-xl focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-600 font-medium hover:underline focus:outline-none"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button

            className=' w-full p-4 shadow-3xl bg-[#3D5AFE] 
                       text-white rounded-xl text-xl  active:scale-95 focus:outline-none
                         cursor-pointer font-semibold transition-transform '
            onClick={(e) => {
              if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
                alert("Some input feilds are empty. ");
              } else {

              

                navigate('/Company_Detail')
              }
             
            }
            }
          >Create account</button>
          <div className='flex flex-row w-full gap-2 items-center justify-center '>
            <h1 className='text-[#6B7391] text-center'>Already have an account?</h1>
            <a className='text-[#3D5AFE]  font-semibold cursor-pointer hover:underline'
              onClick={() => {

              }}
            >Login</a>
          </div>



        </div>
      </div>
    </div>
  )
}
export default SignUp