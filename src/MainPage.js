import React, { useState, useContext, useRef, useEffect } from 'react'
import mainImage from './blackmonolith.webp'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
 return (
    <div className='p-10 mt-36 lg:mt-10 text-black flex flex-col items-center
      justify-center h-auto lg:text-4xl'>
        <div className='lg:w-2/3 h-auto lg:flex-row '>
            <div className='h-auto lg:mt-10  lg:w-4/5  lg:h-full  lg:pl-16 '>
                <div className=' w-full border-b-8 border-black text-3xl'>Intro.</div>
                <br />
                <p className='text-xl lg:text-4xl'>
                My name is Jay Zenith. I'm a developer fascinated in deconstructing how computers work
                under the hood and will document my journey here.
                </p> 
                <br />
                <p className='text-xl lg:text-4xl'>
                    I graduated with a Computer Science degree from UCSC 
                    but i'm now on a mission to not be a mediocre dev. 
                </p>
                <br />
                <p className='text-xl lg:text-4xl'>
                    I am currently working on building a compiler using the 
                    Crafting Interpreters book by Robert Nystrom as a main resource. 
                </p>
                <br />

            </div>
            
            
        </div>
            

        <div className='mt-10 w-full border-b-8 border-black text-3xl'>Projects</div>
       
        
        <div className='mt-10 lg:w-2/3 h-auto lg:h-72 lg:flex-row '>
            <div className='lg:w-3/4 lg:pl-16 '>
                <p className='text-black text-2xl'>Project 1</p>
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
