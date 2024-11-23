import React from 'react'

function Compiler() {
  return (
    <div className='mt-32 p-10'>
        <p>I am creating a compiler written in C++ for a language inspired by that of the "Crafting Interpreters" 
            by Robert Nystrom. 
        </p>
        <br></br>
        <p>So the first step is the <span className='underline'>lexical analysis</span> where we create a scanner
            that takes the linear stream of characters and chunks them toegther into 
            tokens which was straightforward. 
        </p>
        <br></br>
        <p>I enjoyed designating how to tokenize lexemes such as '!' and '!=' since we have to decipher whether ! was a standalone
          character or paired with '='. The same concept goes for determining whether we run into a single '/' as a division operator 
          or the start of a comment which is '//'. 
        </p>


        <br></br>

        <p>Parsing was where I ran into why contructing an AST in C++ is a little tricky.</p>
    </div>
  )
}

export default Compiler