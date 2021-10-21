import React, {useState} from 'react';
import './AddTask.css'

const AddTask = ({addTask, counterChange}) =>{
    const [taskName, setTaskName] = useState("")
 

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskName)
        setTaskName("")
    }
    
    return (
           
            <div className="addtask">
            
            
            <form onSubmit={handleSubmit}>
            <h1 className="title">To Do</h1>
            <input type="text"  value={taskName} required onChange={(e)=>{setTaskName(e.target.value)}} autoFocus/>
            <button type="submit" className="submit"><span className="plus"> </span></button>
            <div className="lettert"></div>
            <div className="lettero"></div>
            <div className={counterChange>9 ? "none": "letterd"}>D</div>
            <span className="letteroo"
                style={{color:`${
                          counterChange === 0
                            ? "#00A19D"
                            : counterChange === 1
                            ? "#FFB344"
                            : counterChange === 2
                            ? "#E05D5D"
                            : counterChange === 3
                            ? "#3DB2FF"
                            : counterChange === 4
                            ? "#22577A"
                            : counterChange === 5
                            ? "#C36839"
                            : counterChange === 6
                            ? "#E02401"
                            : counterChange === 7
                            ? "#F78812"
                            : counterChange === 8
                            ? "#4AA96C"
                            : counterChange === 9
                            ? "#FF4C29"
                            : counterChange > 9
                            ? "#E02401" : ''
                        }`

                  }}>{counterChange}</span>
       
            
         
            </form>
            
            </div>
            
    )
}

export default AddTask;