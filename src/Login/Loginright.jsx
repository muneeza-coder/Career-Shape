import React, { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="w-full md:justify-center md:items-center lg:justify-start lg:w-1/2 flex flex-col gap-3 p-16  sm:p-28 md:p-30 lg:py-16 lg:px-25 bg-white">
       
      <div className="max-w-md w-full ">
         <button className="text-xs text-[#6B7391] font-bold hover:text-gray-800 transition flex justify-start items-start">
           Back to website
        </button>

        <div>
          <h2 className="text-2xl font-bold mt-2 text-[#1B2340]">Log in</h2>
          <p className="text-sm text-[#6B7391] mt-3 mb-3">Log in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium text-[#1B2340] mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-[#1B2340] mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
                required
                className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition pr-12"
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
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm transition shadow-sm"
          >
            Log in
          </button>
        </form>

        <div className="text-center text-sm text-[#6B7391] flex flex-col gap-4 mt-4">
         <span> New to Career Shape?{' '}<a href="#" className="text-blue-600 font-medium hover:underline">
            Sign up
          </a></span>
          
   
        </div>
        
      </div>

      {/* <div className="text-center text-[15px] text-gray-400">
        Demo only: accounts are saved in this browser, not on a server.
      </div> */}
    </div>
  );
}