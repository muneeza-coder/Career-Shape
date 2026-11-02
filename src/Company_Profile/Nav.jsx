import React, { useState } from 'react'
import logo from '../assets/logo1.svg'
import { useNavigate } from 'react-router-dom';

const Nav=()=>{
    //  const[finish,setFinish]=useState()
    // const navigate = useNavigate()

    // const onFinish({

    // })
    return(
        
        <div className='w-full px-2 py-1  sm:pl-6 sm:pr-5  xl:pl-40 xl:pr-30  bg-white flex flex-wrap  items-center justify-between '>
            <img src={logo} className='w-33 h-17  block'></img>
            <div className='flex flex-wrap  text-[75%] gap-1'>
                <p>Already registered ? </p>
                <a className='text-[#3D5AFE] font-semibold cursor-pointer' 
                   onClick={()=>{
                           navigate('/Login')
                   }}
                >Login</a>
                <p> | </p>
                <a className='text-[#3D5AFE] font-semibold cursor-pointer'
                   onClick={()=>{
                           navigate('/')
                   }}
                >Back to Website</a>
            </div>
           
        </div>
    )
}
export default Nav