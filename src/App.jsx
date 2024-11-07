import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  console.log(users)

  return (
    <>
      {/* <h1>Hello World</h1> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`Name: ${user.name}, Username: ${user.username}`}</li>
        ))}
      </ul>
    </>
  )
}

export default App
