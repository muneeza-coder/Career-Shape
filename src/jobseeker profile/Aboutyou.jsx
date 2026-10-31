import React from 'react'
import SideBar from './Sidebar1.jsx'
import TellAbout from './Tellabout.jsx'
import CompanyProfile  from '../Company_Profile/Nav.jsx'
const Aboutyou = () => {
  return (
    <div className='flex flex-col gap-3'>
        <CompanyProfile/>

  <div className='flex'>  <SideBar/>
    <TellAbout/></div>
    
    </div>
  )
}

export default Aboutyou