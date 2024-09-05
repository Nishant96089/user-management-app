import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [displayedUsers, setDisplayedUsers] = useState(5); // Number of users to display initially
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      alert('User deleted');
      setUsers(users.filter(user => user.id !== id));  // Remove user from list
    } catch (error) {
      alert('Error deleting user');
    }
  };

  // const handleAddUser = (newUser) => {
  //   setUsers([...users, newUser]);
  // };

  const handleShowMore = () => {
    setDisplayedUsers(prevCount => prevCount + 5);   // Show 5 more users
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="container">
      <h1>Users List</h1>
      <Link to="/create" className="button">Create User</Link>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, displayedUsers).map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="action-buttons">
                  <Link to={`/edit/${user.id}`} className="button edit-button">Edit</Link>
                  <button onClick={() => handleDelete(user.id)} className="button delete-button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayedUsers < users.length && (
        <button className="button show-more-button" onClick={handleShowMore}>Show More Users</button>
      )}
    </div>
  );
};

export default UsersList;
