import React from 'react'
import { useState } from 'react'

const TodoForm = ({todos,setTodos}) => {
    const [task,setTask] = useState("");

    const addTask = () => {
       if(task.trim() === ""){
        return;
       }

       const newTodo={
        id:Date.now(),
        task:task,
        completed:false,
       };

       setTodos([...todos,newTodo]);
       setTask("");
    }       
  return (

     <div className="input-section">
        <input
        type='text'
        placeholder='Enter a Task...'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>
            Add
        </button>

      </div>
  )
}

export default TodoForm