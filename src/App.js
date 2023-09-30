import React, { useState } from 'react';
import Navbar from './Navbar';
import UserGrid from './UserGrid';
import axios from 'axios';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setLoading(false);
  };

  return (
    <div className="App">
      <Navbar onFetchUsers={fetchUsers} />
      {loading ? <div className="loader">Loading...</div> : <UserGrid users={users} />}
    </div>
  );
}

export default App;
