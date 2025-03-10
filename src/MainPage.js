import React, { useState, useContext, useRef, useEffect } from 'react'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
 return (
    <div className='p-10 mt-24 lg:mt-10 text-black flex flex-col items-center
      justify-center h-auto lg:text-xl'>
    
        <div className='mt-5 border-b-4 w-full border-black text-lg font-bold'>Intro.</div>
       
        <div className=' h-auto lg:flex-row '>
            <div className='h-auto  lg:h-full  '>
                <br />
                <p className=''>
                I am Jay. I'm a developer fascinated with deconstructing how computers work
                under the hood and will document my journey here.
                </p> 
                <br />
                
                <br />
                <p className=''>
                    I am interested in compilers/interpreters, programming langauge theory, and ML. 
                </p>
                <br />

            </div>
          
            
        </div>

       
        

        <p className='mt-10 w-full border-b-4 border-black'></p>
        <div className='mt-5'>
            <p>
                Thank you for visiting. Hit me on <a href="https://twitter.com/jayz3nith"><span className='underline text-red-600'>X</span></a>
            </p>
        </div>


        
    </div>
    
   
 )
}


export default MainPage
