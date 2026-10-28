// // import React from 'react'
// // import Navbar from './Home/Navbar.jsx'
// // import { Route, Routes } from 'react-router-dom'
// // import Home from './pages/Home.jsx'
// // import Company from './pages/Company.jsx'
// // import Emplyee from './pages/Emplyee.jsx'
// // import bgimg from './assets/bluw.jpg'
// // import SliderContent from './Home/SliderContent.jsx'
// // const App = () => {
// //   return (

// //     <div
// //       style={{
// //         backgroundImage: `url(${bgimg})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         backgroundRepeat: 'no-repeat',
// //       }}
// //       className='min-h-screen w-full flex flex-col'>

// //       <Navbar />
// //       <SliderContent />
// //       {/* // Changed h-screen to min-h-screen */}
// //       <Routes>
// //         <Route path='/' element={<Home />} />
// //         <Route path='/company' element={<Company />} />
// //         <Route path='/jobseeker' element={<Emplyee />} />

// //       </Routes>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import Navbar from './Home/Navbar.jsx'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import Company from './pages/Company.jsx'
// import Emplyee from './pages/Emplyee.jsx'
// import bgimg from './assets/bluw.jpg'
// import SliderContent from './Home/SliderContent.jsx'
// const App = () => {
//   return (

//     <div
//       className='h-screen w-full flex flex-col bg-[#b9e0f62e]'>

//       <Navbar />
//       <SliderContent />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/company' element={<Company />} />
//         <Route path='/jobseeker' element={<Emplyee />} />

//       </Routes>
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import Navbar from './Home/Navbar.jsx'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import Company from './pages/Company.jsx'
// import Emplyee from './pages/Emplyee.jsx'
// import bgimg from './assets/bluw.jpg'
// import SliderContent from './Home/SliderContent.jsx'
// const App = () => {
//   return (

//     <div
//       style={{
//         backgroundImage: `url(${bgimg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//       className='min-h-screen w-full flex flex-col'>

//       <Navbar />
//       <SliderContent />
//       {/* // Changed h-screen to min-h-screen */}
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/company' element={<Company />} />
//         <Route path='/jobseeker' element={<Emplyee />} />

//       </Routes>
//     </div>
//   )
// }

// export default App

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Company from './pages/Company.jsx'
import Emplyee from './pages/Emplyee.jsx'
import Main from './Home/Main.jsx'
import Signup1 from './Signup/Signup1.jsx'
import Login1 from './Login/Login1.jsx'
import AdminProfile from './AdminProfile/AdminProfile.jsx'
import AdminDashboard from './AdminDashboard/AdminDashboard.jsx'
const App = () => {
  return (

    <div
      className='flex flex-col h-full w-full '>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Signup' element={<Signup1 />} />
        <Route path='/company' element={<Company />} />
        <Route path='/jobseeker' element={<Emplyee />} />
        <Route path='/adminprofile' element={<AdminProfile />} />
        <Route path='/login' element={<Login1 />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App