import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();    // Get user ID from URL parameters
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data for editing
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        setError('Error fetching user');
      }
    };

    fetchUser();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
      navigate('/');    // Redirect to users list
      alert('User updated successfully');   // Success message
    } catch (error) {
      setError('Error updating user');
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Update</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default EditUser;
