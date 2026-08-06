import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);



  return (
  <div className="container">
    <div className="todo-box">
      <h1>TODO APP</h1>
    
    <TodoForm
    todos={todos}
    setTodos={setTodos}
    />
    <TodoList
    todos={todos} 
    setTodos={setTodos}
    />
    </div>
  </div>
    
  )
}

export default App
