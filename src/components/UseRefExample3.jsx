// Use Case:  When you make a fetch request, and the component gets unmounted before handling the response, and you get an error about a memory leak.  This shows you how to fix this error.  (See Todo.jsx file)

import { useState } from 'react'
import Todo from './Todo'
import { Link } from 'react-router-dom'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)
  return (
    <div>
      {showTodo && <Todo />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default UseRefExample3
