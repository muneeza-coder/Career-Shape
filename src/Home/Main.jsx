import React, { useState } from 'react'
import Navbar from './Navbar'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'
import Homeslider from './Homeslider'
import NumRange from './NumRange'
import MainPipline from './MainPipline'

const Main = () => {

    return (

        <div
            className='w-full flex flex-col mx-auto gap-20'>
            <Navbar />
            <Homeslider />
            <NumRange />
            <MainPipline />
            <Homeslider />
            <Homeslider />

        </div>
    )
}

export default Main