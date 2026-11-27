import React from 'react'
import Overview from './Overview.jsx'
import DB_sidebar from './DB_sidebar.jsx'
import Jobs from './Jobs.jsx'
import CV from './CV.jsx'
import Applied from './Applied.jsx'
import Result from './Result.jsx'
import Profile from './Profile.jsx'
// import CompanyDB  from '../../../Company/src/Company_DB/MainDB.jsx'
const Seeker_dashboard = () => {
  return (
    
    
     <div className='flex flex-col gap-3 '>
      <DB_sidebar/>
       {/* <Jobs/>
       <CV/>
       <Applied/>
       <Result/>
       <Profile/> */}
    </div>

        

  )
}

export default Seeker_dashboard
