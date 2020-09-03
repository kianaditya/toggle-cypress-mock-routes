import React, { useState, useEffect } from 'react'
import Axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/todos'

const App = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await Axios.get(URL)
    setTodos(response.data)
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default App
