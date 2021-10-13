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
            {counterChange === 0 ? <p>Great News, you have nothing to do!</p>: counterChange === 1 ? <p>You have {toLiteral(counterChange)} task to do</p> :counterChange <=6 ? <p>You have {toLiteral(counterChange)} tasks to do.</p> : <p>{toLiteral(counterChange)} Tasks left, just leave it for tomorrow:)</p>
            

            }
        </div>
    )

}

export default Counter