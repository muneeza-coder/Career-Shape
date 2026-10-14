import React, { useState } from 'react'
import Navbar from './Navbar'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'
import Homeslider from './Homeslider'

const Main = () => {

    return (

        <div
            className='w-full flex flex-col mx-auto '>
            <Navbar />
            <Homeslider />
        </div>
    )
}

export default Main