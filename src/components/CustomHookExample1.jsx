// This is an example of a Custom Hook so that you don't have to use the useEffect inside the component, you can still get your loading state, error and so on

import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

function CustomHookExample1() {
  // Commented out, but to be used for lines 20-30
  /*
    const res = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  */

  // Destructured from Line 4, use for lines 33-43
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  //console.log(res)

  /*
  if (res.loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {res.data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
  */

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <div>
        {data.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
      <Link to='/'>Back to Home</Link>
    </>
  )
}

export default CustomHookExample1
