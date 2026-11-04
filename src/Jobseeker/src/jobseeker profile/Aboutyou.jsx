import React, { useContext } from 'react'
import SideBar from './Sidebar1.jsx'
import TellAbout from './Tellabout.jsx'
import CompanyProfile  from '../../../Company/src/Company_Profile/Nav.jsx'
import Edu from './Education.jsx'
import JobseekerContext,{JobseekerProfileContext} from './JobseekerContext/JobseekerContext.jsx'
import Experience from './Experience.jsx'
const Aboutyou = () => {
  return (
   <JobseekerContext>
     <div className='flex flex-col gap-3'>
                <CompanyProfile/>
      <div className='flex'>
     <SideBar/>
      <TellAbout/>
<Edu/>
<Experience/>
      </div>
    </div>
      
  
   </JobseekerContext>
  )
}
export default Aboutyou

// export default Aboutyou
// import React from 'react'
// import JobseekerContext from './JobseekerContext/JobseekerContext'
// import Sidebar1 from "./Sidebar1"
// import Tellabout from "./Tellabout"
// const Aboutyou = () => {
//   return (
// <JobseekerContext>
//       <div>
//         <Sidebar1/>
//          <Tellabout/>
//       </div>

// </JobseekerContext>
//   )
// }

// export default Aboutyou