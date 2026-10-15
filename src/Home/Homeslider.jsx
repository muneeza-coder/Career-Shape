// import React, { useState, useEffect } from 'react'
// import ComanyHome from './ComanyHome'
// import Jobseekerhome from './Jobseekerhome'
// import { ChevronRight, ChevronLeft } from 'lucide-react'
// const Homeslider = () => {
//     const [slide, setslide] = useState(0)
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setslide((prev) => (prev === 0 ? 1 : 0))
//         }, 3000)

//         return () => clearInterval(timer)
//     }, [])
//     return (
//         <div className='ml-8 mr-8  mt-40 overflow-hidden sm:mt-50 sm:ml-20 xl:ml-60'>
//             <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${slide * 100}%)` }}>
//                 <div className='min-w-full'><ComanyHome /></div>
//                 <div className='min-w-full'><Jobseekerhome /></div>
//             </div>
//             <div className='flex justify-center gap-2 mt-4 items-center xl:w-[120vh] sm:w-[60vh] w-full'>
//                 <button onClick={() => {
//                     if (slide === 1) {
//                         setslide(0)
//                     }
//                 }} className='h-8 w-8 text-[#1B2340] text-sm border-gray-300 border-1 bg-white rounded-full flex justify-center items-center'><ChevronLeft size={16} strokeWidth={1.5} /></button>
//                 <button onClick={() => {
//                     setslide(0)
//                 }} className={`h-3 w-3 rounded-full ${slide == 0 ? 'bg-[#3D5AFE] w-7' : 'bg-gray-300'
//                     }`}></button>
//                 <button onClick={() => {
//                     setslide(1)
//                 }} className={`h-3 w-3 rounded-full ${slide == 1 ? 'bg-[#3D5AFE] w-7' : 'bg-gray-300'
//                     }`}></button>
//                 <button onClick={() => {
//                     if (slide === 0) {
//                         setslide(1)
//                     }
//                 }} className='h-8 w-8 text-[#1B2340] text-sm  border-gray-300 border-1 bg-white rounded-full flex justify-center items-center'><ChevronRight size={16} strokeWidth={1.5} /></button>
//             </div>

//         </div>
//     )
// }

// export default Homeslider
import React, { useState, useEffect } from 'react'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'
import { ChevronRight, ChevronLeft } from 'lucide-react'
const Homeslider = () => {
    const [slide, setslide] = useState(0)
    useEffect(() => {
        const timer = setInterval(() => {
            setslide((prev) => (prev === 0 ? 1 : 0))
        }, 3000)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className='ml-8 mr-8  mt-40 overflow-hidden sm:mt-50 sm:ml-20 xl:ml-60 lg:ml-30 '>
            <div className='flex transition-transform duration-500' style={{ transform: `translateX(-${slide * 100}%)` }}>
                <div className='min-w-full'><ComanyHome /></div>
                <div className='min-w-full'><Jobseekerhome /></div>
            </div>
            <div className='flex justify-center gap-2 mt-4 items-center xl:w-[120vh] sm:w-[60vh] w-full'>
                <button onClick={() => {
                    if (slide === 1) {
                        setslide(0)
                    }
                }} className='h-8 w-8 text-[#1B2340] text-sm border-gray-300 border-1 bg-white rounded-full flex justify-center items-center'><ChevronLeft size={16} strokeWidth={1.5} /></button>
                <button onClick={() => {
                    setslide(0)
                }} className={`h-3 w-3 rounded-full ${slide == 0 ? 'bg-[#3D5AFE] w-7' : 'bg-gray-300'
                    }`}></button>
                <button onClick={() => {
                    setslide(1)
                }} className={`h-3 w-3 rounded-full ${slide == 1 ? 'bg-[#3D5AFE] w-7' : 'bg-gray-300'
                    }`}></button>
                <button onClick={() => {
                    if (slide === 0) {
                        setslide(1)
                    }
                }} className='h-8 w-8 text-[#1B2340] text-sm  border-gray-300 border-1 bg-white rounded-full flex justify-center items-center'><ChevronRight size={16} strokeWidth={1.5} /></button>
            </div>

        </div>
    )
}

export default Homeslider
