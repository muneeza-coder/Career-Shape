import React from 'react';
import logo from '../assets/Logo.svg'
export default function Login() {
  return (
    <div style={{background:"linear-gradient(to right,#4A3AFF, #2B2299)"}}className="hidden lg:flex w-full lg:w-1/2 p-12 gap-20 flex-col justify-between ">
      {/* <div>className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('/career shape.png')` }}</div> */}
                <img src={logo} className='h-18 w-50'></img>
      
        <div>
          <h1 className="text-4xl font-bold text-white">Welcome back</h1>
          <p className="text-blue-100 text-sm max-w-sm">
            Pick up where you left off with your jobs and candidates.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-2xl text-gray-800 w-full max-w-lg ">
          <div className="flex items-center space-x-1.5 mb-4">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-3">
              <span className="text-sm text-gray-400 font-semibold  block">Applied</span>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#F7E6C9]  text-[#775622] text-[9px] font-bold rounded-full flex items-center justify-center">OH</span>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#E7C9F7] text-[#582277] text-[9px] font-bold rounded-full flex items-center justify-center">SR</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-3">
              <span className="text-sm text-gray-400 font-semibold block">Screening</span>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#F7F7C9] text-[#777522] text-[9px] font-bold rounded-full flex items-center justify-center">DP</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-3">
              <span className="text-sm text-gray-400 font-semibold block">Interview</span>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#D0C9F7]  text-[#2E2277] text-[9px] font-bold rounded-full flex items-center justify-center">AY</span>
              </div>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#CDF7C9]  text-[#297722] text-[9px] font-bold rounded-full flex items-center justify-center">NB</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 space-y-3">
              <span className="text-sm text-gray-400 font-semibold  block">Offer</span>
              <div className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-start pl-2">
                <span className="w-5 h-5 bg-[#C9F7D4]  text-[#227736] text-[9px] font-bold rounded-full flex items-center justify-center">LF</span>
              </div>
            </div>
          </div>
        </div>
      

      <div></div>
    </div>
  );
}         