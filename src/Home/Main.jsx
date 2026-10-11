import React, { useState } from 'react'
import Navbar from './Navbar'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'
import Homeslider from './Homeslider'

const Main = () => {
    function Slider() {
        const [silder, setsilder] = useState(0)

    }
    return (

        <div
            className='w-full flex flex-col '>
            <Navbar />
            <Homeslider />

        </div>
    )
}

export default Main