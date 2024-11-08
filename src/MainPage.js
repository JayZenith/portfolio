import React, { useState, useContext, useRef, useEffect } from 'react'
import mainImage from './blackmonolith.webp'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
 return (
    <div className=' mt-16 lg:mt-10 text-black flex flex-col items-center
      justify-center h-auto  w-screen text-2xl lg:text-4xl'>
        <div className=' w-64 lg:w-2/3 h-auto  
        flex flex-col lg:flex-row '>
            <div className='w-80 h-auto lg:mt-10  lg:w-4/5   lg:h-full   lg:pl-16 text-xl flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-black '></p>
                <p className='mt-5 text-2xl lg:text-4xl 
                
                '>My name is Jay Zenith. I'm a developer interested in full stack development but realized im more interested in compilers and such. 
                I have a timeline of a month to get cracked.
                </p> 
                <br />

            </div>
            
            <div className='mt-0 lg:mt-10 w-full lg:w-1/4 lg:pl-16  flex flex-col items-start'>
                <p className='border-dashed border-b-2  border-black text-black'>Links</p>
                <ul className='mt-5 lg:mt-5 w-full '>
                

                    <li className='flex flex-row items-center w-auto h-auto'><i class="bi bi-arrow-right"></i><a href="https://github.com/JayZenith" className='underline text-black '>Github</a></li>
                    <li className='mt-3 text-black '><a href="https://x.com/JayZenith_" className='underline'><i class="bi bi-arrow-right"></i>X</a></li>
                    <li className=' mt-3 flex flex-row text-black underline break-all '><i class="bi bi-arrow-right"></i><ButtonMailto label="jayzenith248@gmail.com" mailto="mailto:jayzenith248@gmail.com" /></li>

                </ul>
            </div>
        </div>
        
    
            

        <div className='mt-10 w-2/3 border-b-8  border-black'></div>
        
        <div className='pt-10 w-64 lg:w-2/3  h-auto lg:h-72 flex flex-col items-start lg:flex-row '>
            <div className='mt-10 lg:mt-0 w-full lg:w-3/4 lg:pl-16 flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-black text-black '>Project 1</p>
                <p className='mt-5 text-black'>
                    I am a review site made with React, ExpressJS, NodeJS, MySQL. 
                </p>
           
            </div>
            <div className='mt-10 lg:mt-0 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '>Click.</li>
                <div className='=w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="http://starfront.s3-website.us-east-2.amazonaws.com" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full 
                          transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>

        <p className='mt-10 w-2/3 h-auto  border-b-8 border-black'></p>

        <div className='pt-10 w-64 lg:w-2/3  h-auto lg:h-72 flex flex-col items-start lg:flex-row '>
            <div className='mt-10 lg:mt-0 w-full lg:w-3/4 lg:pl-16 flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-black text-black '>Project 2</p>
                <p className='mt-5 text-black'>
                    I am an Images app made with React, ExpressJS, NodeJS, MongoDB.
                </p>
           
            </div>
            <div className='mt-10 lg:mt-0 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '>Click.</li>
                <div className='=w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="https://github.com/JayZenith/TheCollage" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full       transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>

        <p className='mt-20 w-2/3 border-b-8 border-black'></p>


        <div className='pt-10 w-64 lg:w-2/3  h-auto lg:h-72 flex flex-col items-start lg:flex-row '>
            <div className='mt-10 lg:mt-0 w-full lg:w-3/4 lg:pl-16  flex flex-col items-start'>
                <p className='border-dashed border-b-4  border-black text-black '>Project 3</p>
                <p className='mt-5 text-black
                
                '>
                    I am a Speech Recognition app made with React Native, Expo, NodeJS, ExpressJS, Google Speech-To-Text API. 
                </p>
           
            </div>
            <div className=' mt-10 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '>Click.</li>
                <div className='=w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="https://github.com/JayZenith/Speech-To-Text" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full       transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>


        <p className='mt-20 w-2/3 border-b-8 border-black'></p>


        
    </div>
    
   
 )
}


export default MainPage
