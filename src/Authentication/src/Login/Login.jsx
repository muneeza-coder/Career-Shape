import React from 'react';
import logo from '../../../assets/logo.svg'

export default function Login() {
  return (
    <div style={{ background: "linear-gradient(to right,#4A3AFF, #2B2299)" }} className="hidden w-1/2 p-12 md:flex md:flex-col md:justify-between  ">
      {/* <div>className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('/career shape.png')` }}</div> */}
      <img src={logo} className=' h-10  w-40 items-baseline '></img>

      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className='text-white text-[16px] font-normal  '>
          Pick up where you left off with your jobs and candidates.
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl shadow-2xl text-gray-800 w-full  ">
        <div className="flex items-center space-x-1.5 mb-4">
          <span className="w-3 h-3 bg-[#E4E7F1] rounded-full"></span>
          <span className="w-3 h-3 bg-[#E4E7F1] rounded-full"></span>
          <span className="w-3 h-3 bg-[#E4E7F1] rounded-full"></span>
        </div>

        <div className=" w-full gap-2 p-4  grid grid-cols-2  sm:grid-cols-2
                           md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 ">
          <div className="bg-[#E4E7F1]/45 p-3 rounded-xl border border-gray-100 space-y-3">
            <span className="text-sm text-[#6B7391] font-semibold  block">Applied</span>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#F7E6C9]  text-[#775622] text-[10px] font-bold rounded-full flex items-center justify-center">OH</span>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#E7C9F7] text-[#582277] text-[10px] font-bold rounded-full flex items-center justify-center">SR</span>
            </div>
          </div>

          <div className="bg-[#E4E7F1]/45 p-3 rounded-xl border border-gray-100 space-y-3">
            <span className="text-sm text-[#6B7391] font-semibold block">Screening</span>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#F7F7C9] text-[#777522] text-[10px] font-bold rounded-full flex items-center justify-center">DP</span>
            </div>
          </div>

          <div className="bg-[#E4E7F1]/45 p-3 rounded-xl border border-gray-100 space-y-3">
            <span className="text-sm text-[#6B7391] font-semibold block">Interview</span>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#D0C9F7]  text-[#2E2277] text-[10px] font-bold rounded-full flex items-center justify-center">AY</span>
            </div>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#CDF7C9]  text-[#297722] text-[10px] font-bold rounded-full flex items-center justify-center">NB</span>
            </div>
          </div>

          <div className="bg-[#E4E7F1]/45 p-3 rounded-xl border border-gray-100 space-y-3">
            <span className="text-sm text-[#6B7391] font-semibold  block">Offer</span>
            <div className="bg-white p-2 rounded-xl shadow-sm flex items-center justify-start pl-2">
              <span className="w-6 h-6 bg-[#C9F7D4]  text-[#227736] text-[10px] font-bold rounded-full flex items-center justify-center">LF</span>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}         