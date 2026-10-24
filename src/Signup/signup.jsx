import React, { useState } from 'react'

import { FaLongArrowAltLeft } from "react-icons/fa";
<FaLongArrowAltLeft />

const SignUp = () => {
  const [selected, setSelected] = useState(null)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [name, setName] = useState('')
  const [info, setInfo] = useState([])

  const setdata = (e) => {
    // e.preventDefault();
    // const newinfo=[...info];
    //  newinfo.push({email,pass});
    //   setInfo(newinfo)



    console.log(email);
    console.log(pass);

    setEmail('')
    setPass('')


  }

  return (

    // <div className=' w-full px-15 md:flex lg:w-1/2 py-20 lg:px-25 
    <div className=' w-full flex flex-col px-5 py-10  sm:px-15 sm:py-15  md:px-25 md:py-20  lg:w-1/2 lg:py-20 lg:px-15 xl:px-25 
               xl:py-15
      bg-transparent  
           '>
      <div className='flex flex-col  w-full h-full  gap-3 items-start'>
        <button className='text-[#6B7391] font-bold flex flex-row gap-2 
                   cursor-pointer'

        >
          <FaLongArrowAltLeft className=' mt-1' />Back to website </button>
        <h1 className=' text-3xl font-extrabold mt-3'>Sign up</h1>
        <p className='text-[#6B7391]  '>Please enter your details to create your account</p>
        <h1 className='text-[#1B2340]  font-bold '>I am</h1>
        <div className=' flex flex-row gap-2 w-full '>
          <button
            className={`  flex flex-row  w-1/2 rounded-xl
                             cursor-pointer   p-3  items-center  justify-center
                              ${selected === "Hiring" ?
                "text-[#3D5AFE]  border-2  border-[#3D5AFE] bg-[#E8ECFF]" :
                "text-[#1B2340] bg-[#FFFFFF]  border-2 border-[#d4d5d6]"
              }   `}
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
          <h1 className='font-bold'>Full Name</h1>
          <input type="text"
            className='w-full bg-white  border border-[#d4d5d6]
                      rounded-xl p-3  focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <h1 className='font-bold'>Email Address</h1>
          <input type="email"
            className='w-full text-[#6B7391] bg-white border border-[#d4d5d6]
                      rounded-xl p-3   focus:border-[#3D5AFE]
                      focus:ring-1 focus:ring-[#3D5AFE] outline-none'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />

          <h1 className=' font-bold'>Password</h1>
          {/* <div className='w-full   p-3 flex justify-between rounded-xl border-1 border-[#d4d5d6] gap-5 bg-white focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE]'> */}
          <div className='relative flex '>
            <input type="password" placeholder='At least 8 characters'
              className='w-full   p-3 rounded-lg border border-[#d4d5d6]  bg-white focus:border-[#3D5AFE] focus:ring-1 focus:ring-[#3D5AFE]
                       '
              value={pass}
              onChange={(e) => {
                setPass(e.target.value)

              }}
            />
            <button className='absolute right-3 top-1/2 -translate-y-12 text-[#3D5AFE] font-medium hover:underline focus:outline-none'>Show</button>
          </div>

          <button

            className=' w-full p-4 shadow-3xl bg-[#3D5AFE] 
                       text-white rounded-xl text-xl  active:scale-95 focus:outline-none
                         cursor-pointer font-semibold transition-transform '
            onClick={(e) => {
              if (email.trim() === "" || pass.trim() === "" || name.trim() === "") {
                alert("Please enter your email or password");
              } else {

                setdata(e);
                console.log(" sign up button clicked")
              }
            }
            }
          >Create account</button>
          <div className='flex flex-row w-full gap-2 items-center justify-center '>
            <h1 className='text-[#6B7391] text-center'>Already have an account?</h1>
            <a className='text-[#3D5AFE]  font-semibold cursor-pointer'
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