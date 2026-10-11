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
import React from 'react'
import Navbar from './Home/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Company from './pages/Company.jsx'
import Emplyee from './pages/Emplyee.jsx'
import bgimg from './assets/bluw.jpg'
import SliderContent from './Home/SliderContent.jsx'
const App = () => {
  return (

    <div
      className='h-screen w-full flex flex-col '>

      <Navbar />
      <SliderContent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/jobseeker' element={<Emplyee />} />

      </Routes>
    </div>
  )
}

export default App