import './Counter.css'

import React from 'react';

const Counter = ({counterChange}) => {
    
    function toLiteral(counterChange) {
        switch(counterChange){
        case 1 :  return "one"
        
        case 2 :  return "two"
       
        case 3 :  return "three"
        
        case 4 :  return "four"
        
        case 5 :  return "five"
        
        case 6 :  return "six"
        
        default: return counterChange
        }

    }

    return(
        
           
            
        <div>
            {counterChange === 0 ? <h4>Great News, you have nothing to do!</h4>: counterChange === 1 ? <h4>You have {toLiteral(counterChange)} task to do</h4> :counterChange <=6 ? <h4>You have {toLiteral(counterChange)} tasks to do.</h4> : <h4>{toLiteral(counterChange)} Tasks left, just leave it for tomorrow:)</h4>}

        </div>
        
    )

        }

export default Counter