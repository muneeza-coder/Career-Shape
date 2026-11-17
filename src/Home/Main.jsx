import React, { useState } from 'react'
import Navbar from './Navbar'
import ComanyHome from './ComanyHome'
import Jobseekerhome from './Jobseekerhome'
import Homeslider from './Homeslider'
import NumRange from './NumRange'
import MainPipline from './MainPipline'
import Lastbox from './Lastbox'

import Footer from './Footer'
import HomeContext from './HomeContext/HomeContext'

const Main = () => {

    return (

        <HomeContext>
            {/* fadeIn = animation name.
1s = animation duration (1 second).
ease-in-out = starts slowly, speeds up, then slows down. */}
            <div
                className='animate-[fadeIn_1s_ease-in-out] w-full flex flex-col mx-auto gap-20 '>
                <Navbar />
                <Homeslider />
                <NumRange />
                <MainPipline />
                <Lastbox />
                <Footer />
            </div>
        </HomeContext>
    )
}

export default Main