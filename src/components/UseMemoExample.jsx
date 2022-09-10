// Use Case:  It helps you save on performance.  If i change the number value, it does call the expensive function, but if you click on Re-Render CTA, it re-renders without calling the expensive function, because its "memo-izing" the value from sqrt, because the input isn't changing, so there's no reason to call the whole thing again.  If you change the number itself, it is going to call the expensive function, because if the input is change, then its not going to get "memo-ized"

import { useState, useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  //const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    //console.log(renders)
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
    console.log(inc)
  }

  return (
    <div>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-primary'>
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>

      <Link to='/'>Back to Home</Link>
    </div>
  )
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i)
  }
  console.log('expensive function called')
  return Math.sqrt(n)
}

export default UseMemoExample
