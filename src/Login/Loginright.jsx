import React, { useState } from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import AdminOverview from '../Admin Overview/AdminOverview';
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="w-full md:justify-center md:items-center lg:justify-start md:w-1/2 flex flex-col gap-5 p-10  sm:p-28  lg:py-35 lg:px-25 bg-white xl:py-40">

      <div className="max-w-md w-full mb-3">
        <button className='text-[#6B7391] font-bold flex flex-row gap-2 
                          cursor-pointer'
          onClick={() => {
            navigate('/')
          }}

        >
          <FaLongArrowAltLeft className=' mt-1' />Back to website </button>

        <div>
          <h1 className=' text-2xl font-extrabold mt-3'>Log in</h1>

          <p className="text-sm text-[#6B7391] mt-3 mb-3">Log in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className='flex flex-col gap-3'>
            <label className="block text-[#1B2340] text-sm  font-bold ">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className='flex flex-col gap-3'>
            <label className="block text-[#1B2340] text-sm  font-bold ">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
                className="w-full p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition pr-12"
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
            type="submit"
            className=" w-full p-4 shadow-3xl bg-[#3D5AFE] 
                       text-white rounded-xl text-xl  active:scale-95 focus:outline-none
                         cursor-pointer font-semibold transition-transform "
            onClick={() => {
              navigate('/admindashboard')

            }}
          >
            Log in
          </button>
        </form>

        <div className="text-center  text-[#6B7391] flex flex-col gap-4 mt-4">
          <span> New to Career Shape?{' '}<a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a></span>


        </div>

      </div>

      {/* <div className="text-center text-[15px] text-gray-400">
        Demo only: accounts are saved in this browser, not on a server.
      </div> */}
    </div >
  );
}