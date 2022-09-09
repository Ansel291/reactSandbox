// Use Case:  Creating a reference, or getting a Specific Reference to a DOM Element, by allowing you to target that Element in the DOM, essentially allowing you to Traverse the DOM.  Note:  Example does not appear to be working, as console.log(123) appears during Mount & Unmount via Todo.js, line 32, will skip for now

import { useRef } from 'react'
import { Link } from 'react-router-dom'

function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current)
    //console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          ref={inputRef}
          id='name'
          className='form-control mb-2'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>
          Hello
        </p>
      </form>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}

export default UseRefExample1
