import React, { useState, useContext, useRef, useEffect } from 'react'
import mainImage from './templeos.webp'
import redBox from './redbox.jpeg'
import ButtonMailto from "./ButtonMailto";


function MainPage() {
 
 return (
    <div className='bg-white flex flex-col mt-15 h-screen w-screen items-center font-mono'>
        <div className='mt-10 lg:mt-10 w-64 lg:w-2/3  h-auto lg:h-1/5 bg-white flex flex-col lg:flex-row '>
            <div className='bg-white w-full h-full lg:w-1/4 lg:h-full mt-0 lg:mt-0'>
                <img className='w-full h-full lg:h-full lg:w-full' src={mainImage}></img>
            </div>
            <div className='mt-10 w-full h-full lg:bg-white lg:w-1/2   lg:h-full   lg:pl-16 text-xl flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-red-800 text-red-800 '>About Me</p>
                <p className='mt-5 text-red-800 '>My name is Jay Zenith. I'm a developer interested in full stack development, machine learning, distributed systems, and the future
                    of computing. 
                </p>
            </div>
            
            <div className='bg-white mt-10 w-full lg:w-1/4 lg:pl-16 text-xl flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-red-800 text-red-800'>Links</p>
                <ul className='mt-5 lg:mt-5 bg-white w-full'>
                    <li><a href="https://github.com/JayZenith" className='underline text-red-800 '>Github</a></li>
                    <li className='mt-3 text-red-800 '><a href="https://x.com/JayZenith_" className='underline'>X</a></li>
                    <li className='mt-3 text-red-800 underline'><ButtonMailto  label="jayzenith248@gmail.com " mailto="mailto:jayzenith248@gmail.com" /> </li>
                    {/*<li className='mt-3 text-red-800 '><a className='underline'>Email</a></li>*/}
                </ul>
            </div>
        </div>
        
    
        <div className='pt-20 w-2/3 h-0 border-dashed border-b-4  border-red-800'></div>
        
        <div className='pt-10 lg:mt-10 w-64 lg:w-2/3  h-3/5 lg:h-1/5 bg-white flex flex-col lg:flex-row '>
            <div className='bg-white w-full h-full lg:w-1/4 lg:h-full mt-0 lg:mt-0'>
                <img className='w-full h-full lg:h-full lg:w-full' src={redBox}></img>
            </div>
            <div className='mt-10 w-full h-full lg:bg-white lg:w-1/2   lg:h-full   lg:pl-16 text-xl flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-red-800 text-red-800 '>Project 1</p>
                <p className='mt-5 text-red-800 '>
                    A review demo app. 
                </p>
            </div>
            
            <div className='bg-white mt-10 w-full lg:w-1/4 lg:pl-16 text-xl flex flex-col items-start'>
                {/*<p className='underline text-red-800 '>Links</p>*/}
                <ul className='mt-2 lg:mt-5 bg-white w-full'>
                    <li><a href="http://starfront.s3-website.us-east-2.amazonaws.com" className='underline text-red-800 '>Go to the app</a></li>
                </ul>
            </div>
        </div>
        <p className='mt-20 w-2/3  border-dashed border-b-4  border-red-700'></p>
    </div>
    
   
 )
}


export default MainPage
