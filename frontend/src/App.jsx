import {useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState('');
  const [username, setUsername] = useState('');

  const createUser = () => {
    const formData = {
      index: parseInt(index),
      username: username
    }
    axios.post('http://127.0.0.1:8000/create_user', formData).then((response) => {
      console.log(response.data)
    })
  }

  const getUsers = () => {
    axios.get('http://127.0.0.1:8000/').then((response) => {
      setUsers(Object.entries(response.data.data))
    })
  }
  return (
    <>
      <div className="new container w-50 mx-auto mt-5 shadow-lg px-5 py-3 rounded-4">
        <h4>Create new user</h4>
        <input className='form-control' type="text" name="" id="" placeholder='Age' value={index} onChange={(e) => setIndex(e.target.value)}/>
        <input className='form-control mt-1' type="text" name="" id="" placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button className='btn btn-primary mt-2' onClick={() => createUser()}>Create</button>
      </div>
      <div className="users container w-50 mx-auto shadow-lg px-5 py-3 rounded-4 mt-5">
        <h4>Users List</h4>
        <ul>
          {users.map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
        <button className='btn btn-primary' onClick={() => getUsers()}>Get</button>
      </div>
    </>
  )
}

export default App
