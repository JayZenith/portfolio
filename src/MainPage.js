import React, { useState, useContext, useRef, useEffect } from 'react'
import redBox from './redBox.png'
import ButtonMailto from "./ButtonMailto";
import 'bootstrap-icons/font/bootstrap-icons.css';


function MainPage() {
 
 return (
    <div className='p-10 mt-24 lg:mt-10 text-black flex flex-col items-center
      justify-center h-auto lg:text-xl'>
    
        <div className='mt-5 border-b-4 w-full lg:w-2/3 border-black text-lg font-bold'>Intro.</div>
       
        <div className='lg:w-2/3 h-auto lg:flex-row '>
            <div className='h-auto lg:w-4/5  lg:h-full  '>
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
            <div className='mt-10 w-full border-b-4 border-black text-xl font-bold'>Projects.</div>

            
        </div>

        <div className='mt-2 h-auto  lg:w-2/3 lg:h-72 lg:flex-row '>
            <div className='lg:w-3/4 lg:pl-16 '>
                <p className='text-lg'>Project 1</p>
                <p className='mt-2 '>
                    C++ Interpreter for the Lox Language. 
                </p>
           
            </div>
            <div className='mt-5 lg:mt-0 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '><i class="bi bi-arrow-down font-bold text-2xl"></i></li>
                <div className='w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="https://github.com/JayZenith/CppLoxInterpreter" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full 
                          transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>

        <div className='mt-2 h-auto  lg:w-2/3 lg:h-72 lg:flex-row '>
            <div className='lg:w-3/4 lg:pl-16 '>
                <p className='text-lg'>Project 2</p>
                <p className='mt-2 '>
                    C++ compiler for my own language targeting x86 architecture. 
                </p>
           
            </div>
            <div className='mt-5 lg:mt-0 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '><i class="bi bi-arrow-down font-bold text-2xl"></i></li>
                <div className='w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="https://github.com/JayZenith/CompilerForTestLang" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full 
                          transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>


        <div className='mt-2 h-auto  lg:w-2/3 lg:h-72 lg:flex-row '>
            <div className='lg:w-3/4 lg:pl-16 '>
                <p className='text-lg'>Project 3</p>
                <p className='mt-2 '>
                <div className='mt-4'>I talk about my process of building a Regex Library in Rust <span className=''></span><span className='text-red-700 underline'><a className="" href="/regex">here</a></span></div>
                    Regex library written in Rust. 
                </p>
           
            </div>
            <div className='mt-5 lg:mt-0 flex flex-col lg:items-center  items-center  '>
                <li className='list-none  '><i class="bi bi-arrow-down font-bold text-2xl"></i></li>
                <div className='w-32 h-32 lg:w-32 lg:h-32'>
                    <a href="https://github.com/JayZenith/RustRegexEngine" className='underline text-black'><img className='w-full h-full lg:h-full lg:w-full 
                          transition-transform duration-500 ease-in-out  hover:rotate-180'  src={redBox}></img></a>
                </div>
            </div>
        </div>




        <p className='mt-10 w-2/3 border-b-4 border-black'></p>
        <div className='mt-5'>
            <p>
                Thank you for visiting. Hit me on <a href="https://twitter.com/jayz3nith"><span className='underline text-red-600'>X</span></a>
            </p>
        </div>


        
    </div>
    
   
 )
}


export default MainPage
