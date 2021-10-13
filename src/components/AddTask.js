import React, {useState} from 'react';


const AddTask = ({addTask}) =>{
    const [taskName, setTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(taskName)
        setTaskName("")
    }

    return(
            
            //Chrome validate will cause "Please fill out this field", this is wanted behaviour. 
            <div>
            <span style={{paddingTop: "1em", display: "block"}}/>
            <form onSubmit={handleSubmit}>
            <label>Add Task:</label>
            <input type="text" value={taskName} required onChange={(e)=>{setTaskName(e.target.value)}}/>
            <input type="submit" value="add task"/>
            </form>
            </div>
    )
}

export default AddTask;