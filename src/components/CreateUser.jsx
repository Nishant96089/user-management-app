import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Submit form to create a new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', user);
      navigate('/');  // Redirect to users list
      alert('User created successfully');  // Success message
      console.log('User created:', response.data);  
    } catch (error) {
      setError('Error creating user');
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
        <button type="submit">Create</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
};

export default CreateUser;
