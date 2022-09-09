// Only use this if you are having performance issues, don't just use it for the hell of it, if you notice certain things are slow in your App and you have "expensive" function calls, then you want to consider using this hook

import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  /*
  // Console Log "Some Task" message renders/appears in DOM Console everytime you click on "Add Task" CTA
  const addTask = () => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }
  */

  // Console Log "Some Task" only appears once in DOM Console on intial pageload, it does NOT appear everytime you click on the "Add Task" CTA, although the "Some Task" will continue appearing onto the page everytime you click on "Add Task"
  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
