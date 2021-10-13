import React, { useState } from 'react';
import AddTask from './AddTask'
import Counter from './Counter'

const Todo = ()=> {
    const [taskList, setTaskList] = useState([
        {task: "Login to Amelia:)", id: 1},
        {task: "Remember about Oneppm", id: 2},
        {task: "chat ... chat .. chat.", id:3}
    ])
    
    
    

    const addTask = (taskName) =>{
        
        setTaskList([...taskList, {task:taskName, id: new Date().getTime()}])    //tasklist.length is bad idea for key value, maybe miliseconds.    
    }

    const handleDelete = (id) =>{
        const updatedTaskList = taskList.filter((taskList)=>{
            return taskList.id !== id
        })
        setTaskList(updatedTaskList)
        
    }
 
   

    return(
        <div>
        <Counter counterChange = {taskList.length} />
        <div>{taskList.map((taskList)=>{
            return(
                <div className="task" key={taskList.id}>
                    {taskList.task}
                    <button style={{marginLeft: "1em"}} key={taskList.id} onClick={()=>{handleDelete(taskList.id)}}>Done</button>
                </div>
            )
        })}
        </div>
        <AddTask addTask={addTask}/>
        </div>
    )
}

export default Todo