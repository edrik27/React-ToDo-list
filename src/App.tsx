import { useState } from 'react'
import './App.css'
import type { toDo } from './interface/todo'

function App() {

  return (
    <>
      <ToDoList/>
    </>
  )
}

function ToDoList() {
  const [todos, setTodos] = useState<toDo[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTodo = () => {

    const newTodo: toDo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([newTodo, ...todos])
    setInputValue('');
  }

  const completeTask = (id: number) => {

    const newTodoList = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = true;
        return todo;
      }

      return todo;
    });

    console.log('Click', newTodoList);
    

    setTodos(newTodoList);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input 
          type="text" 
          placeholder="Write a new To Do" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li 
            key={todo.id}
            className={todo.completed ? "todo-completed" : ""}
            onClick={() => completeTask(todo.id)}>
              {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
