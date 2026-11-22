import React, { useState } from 'react'
import { useContext } from 'react'
import Sidebar from './Sidebar.jsx'
import Company_Info from './Company_Info.jsx'
import Logo from './Logo_Info.jsx'
import Nav from './Nav.jsx'


const Company_detail = () => {


  return (
   

      <div className='h-full w-full flex flex-wrap  '>
        {/* <div className='w-1/2 h-20 flex bg-red-600 items-center justify-center'>hello</div>
        <div className='w-1/2 h-20 flex bg-blue-600 items-center justify-center'>hy</div> */}
         <Nav/>
         <div className='w-full flex flex-col  sm:flex sm:flex-row sm:py-8 sm:px-5
                 lg:px-18 xl:px-38 lg:gap-8 
                
                '>
                  
           <Sidebar />
           <Company_Info/>
           <Logo/> 
          </div>
         
      </div>
   
   
  )
}

export default Company_detail