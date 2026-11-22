// // import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <BrowserRouter>

//       <App />

//   </BrowserRouter>
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NetBackground from './NetBackground.jsx'
import  Context_CS  from './Company/src/Company_Context/Company_Context.jsx'
createRoot(document.getElementById('root')).render(

   <BrowserRouter>
    <Context_CS>
        <App />
    </Context_CS>
   

  </BrowserRouter>

 
)
