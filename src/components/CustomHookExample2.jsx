// Using Custom Hook to create Local Storage for your App

import useLocalStorage from '../hooks/useLocalStorage'
import { Link } from 'react-router-dom'

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (e) => {
    //console.log('submitted, wahoo')
    e.preventDefault()

    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    }

    setTasks([...tasks, taskObj])
  }

  return (
    <>
      <form onSubmit={onSubmit} className='w-50'>
        <div className='mb-3'>
          <label className='form-label'>Task</label>
          <input
            className='form-control'
            type='text'
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
      <Link to='/'>Back to Home</Link>
    </>
  )
}

export default CustomHookExample2
