import React from 'react'
import assembly from './assembly.png'
import hy from './hy.png'

function Compiler() {

  return (
    <div className='pl-28 pr-28 flex flex-col whitespace-pre-wrap pt-24 lg:h-screen  w-full bg-red-800 text-white text-xl font-bold '>
        <h3>A Compiler is not Magic</h3>
        <p>using nasm for the assembler and GNU Linker. </p>
        <p>nasm -felf64 out.asm && ld -o out out.o
            nasm -felf64 out.asm will create the object code 
            but need to link it using: ld out.o -o out 
            and thus out is the executable 
        </p>
        <p>Have to communicate with the Kernel through assembly sys calls
            which is the lowest level way of communicating with the OS. So, use 
            registers to communicate.  
        </p>
        <p>Linux syscalls. For example, exit syscall is syscall number 60. 
            To specify that, put in rax register. 
        </p>
        <div className='flex h-auto w-auto'>
            <img src={assembly} height="200" width="300" />
            <p>A very simple assembly program.</p>
            <p>Tells Linux we are exiting. Move exit argument into syscall</p>
            <p>rdi only reads 8 bits so return value must be between 0-255. </p>
        </div>
        <p>So we are going to read a file with a made up language</p>
        <div className='flex h-auto w-auto'>
            <img  src={hy} height="100" width="300" />
            <p>Whitespace and semicolons ignored in this language. 
               The point is to convert this langauge into assembly.
               Lexical Analysis and Tokenization to convert text into meaningful tokens.
            </p>
        </div>
        <p>
            isalpha(c) then we read alphabetic letter into buffer. then
            can read alphanumeric characters. 
            {/*tokens.push_back({.type=TokenType::_return});*/}
            WIll be the first element pushed onto vecotr and will be 
            an object with TokenType return and no value.
            {/*value={std::optional<std::string>} */} is a value type of 
            null or no value. 
        </p>
        <p>
            Typically, you tokenize then parse, and then take parse tree, and
            turn that into assembly. We are just taking tokens and turning into 
            assembly first just to get something working. Will work on the parsing later. 

        </p>
        

      
        
    </div>
  )
}

export default Compiler