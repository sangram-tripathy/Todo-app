import React from 'react'

const TodoItem = ({todo,todos,setTodos}) => {

    const deleteTask = () => {
        setTodos(todos.filter((t)=> t.id !== todo.id))
    }   
    
  return (
    <div className='todo-item'>
        <span>{todo.task}</span>

        <button onClick={deleteTask}>
          Delete
        </button>
    </div>
  )
}

export default TodoItem