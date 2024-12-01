import React from 'react'
import fsm from './turnstile.png';
import rustFSM from './fsm.png';

function Regex() {
    return (
        <div className='mt-32 p-10'>
            <p>So creating a Regex Library in Rust...
            </p>
            <br></br>
            <p>Starting with <span className='underline'>Finite State Machines (FSM)</span>, 
                regular expressions are patterns that can be recognized by a FSM.
                A FSM has states that can be designated as <span className='underline'>locked and unlocked</span>.
                With those states, we have transitions between them designated as <span className='underline'>events.</span>
                <a className='underline text-black'><img className='w-3/4 h-2/3 lg:h-1/4 lg:w-1/4
                        '  src={fsm}></img></a>
            </p>
            <br></br>
            <p>I model this FSM below 
            </p>
            <a className='underline text-black'><img className='w-3/4 h-2/3 md:h-1/4 md:w-1/4
                        '  src={rustFSM}></img></a>
    
    
    
        </div>
      )
}

export default Regex