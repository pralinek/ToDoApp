import React, { useState } from 'react';

const Task = ({taskId, task, deleteTask}) =>{
    const [id, setId] = useState(taskId)

    const handleDelete = () =>{
        deleteTask(id)
    }

    return(
        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
            <div>{task}</div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )

}

export default Task;