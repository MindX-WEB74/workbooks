import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const resp = await axios.get('http://127.0.0.1:3001/');
      if (resp && resp.data) {
        setUsers(resp.data)
      }
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div className="App">
        {
          users.map((user) => (
            <>
              <div>
                <h6>Full name: {user.fname}</h6>
                <h6>User name: {user.fname}</h6>
                <h6>Gender: {user.gender}</h6>
              </div>
              <hr />
            </>
          ))
        }
    </div>
  );
}

export default App;
