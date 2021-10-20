import React, { useEffect, useState } from 'react';
import AddTask from './AddTask'
import Counter from './Counter'
import './Todo.css'


const Todo = ()=> {
    const [taskList, setTaskList] = useState([])
    


    useEffect(()=>{
        
        fetch('https://jsonplaceholder.typicode.com/todos').then(request=>{
            return request.json()
        }).then(apilist=>{
            let array = ''
            let random = Math.round(Math.random()*9)
            
            random += "0"
            ++random
            --random
            array = apilist.slice(random,random+10)
            array = array.map(obj => 
                 {  let randomcoloricon = Math.round(Math.random()*6)
                     return {color: randomcoloricon,icon: randomcoloricon, userId: obj.userId,title: obj.title, id: obj.id, completed: obj.completed}} 
            )  
            
            setTaskList(array)
            
            
        })
    },[])
    

    const addTask = (taskName) =>{
        
        setTaskList([{userId: Math.round((Math.random()*10)),id: new Date().getTime(),title:taskName,completed: false},...taskList])
           //tasklist.length is bad idea for key value, maybe miliseconds.    
    }

    const handleDelete = (id) =>{
        const updatedTaskList = taskList.filter((task)=>{
            return task.id !== id
        })
        setTaskList(updatedTaskList)
        
    }
    
    const handleComplete = (id) =>{
        const updatedTaskList = taskList.map(obj => 
            obj.id === id ? { color: obj.color, icon: obj.icon, userId: obj.userId,title: obj.title, id: obj.id, completed: !obj.completed } : obj)
            
            setTaskList(updatedTaskList)
        
    }

    return(
        
        <div className="container">
        <div className="transparent">
        
        {false && <Counter counterChange = {taskList.length} />}
        {true && <AddTask addTask={addTask}/>}
        {taskList.map((task)=>{
           return(
                
                <div className="card" style={{backgroundColor:`${task.icon === 0 ? "#00A19D": task.icon === 1 ? "#FFB344": task.icon === 2? "#E05D5D": task.icon === 3? "#112031": task.icon === 4? "#22577A": task.icon === 5? "#C36839": task.icon === 6? "#911F27": ""}`}}  key={task.id} >
                    <div>
                        <p className={task.icon === 0 ? "bebas": task.icon === 1 ? "im": task.icon === 2? "it": task.icon === 3? "lobster": task.icon === 4? "pt": task.icon === 5? "qahiri": task.icon === 6? "roboto": ""}onClick={()=>{handleComplete(task.id)}}>{task.title} </p>
                    </div>
                    <button style={{marginLeft: "1em"}} onClick={()=>{handleDelete(task.id)}}>Done</button>
                </div>
            )
        })}

        </div>
        
        </div>

        
    

        
    )
}

export default Todo

