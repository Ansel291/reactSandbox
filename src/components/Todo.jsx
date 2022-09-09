import { useState, useEffect, useRef } from 'react'

function Todo() {
  const [loading, setLoading] = useState(true)
  const [todo, setTodo] = useState({})

  const isMounted = useRef(true)

  useEffect(() => {
    /*
    const isMountedAgain = isMounted.current
    */
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            /*
          if (isMountedAgain === true) {
        */
            //if (isMounted.current === false) {
            setTodo(data)
            setLoading(false)
          }
          //setTodo(data)
          //setLoading(false)
        }, 3000)
      })

    // Runs when component is unmounted
    return () => {
      console.log(123)
      //console.log(isMounted.current)

      isMounted.current = false

      /*
      isMountedAgain = false
      */

      //console.log(isMounted.current)
    }
  }, [isMounted])

  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo
