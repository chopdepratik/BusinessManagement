import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { registerUser } from '../Api'; // Import the registerUser function
import { useNavigate } from 'react-router-dom'; 
import '../Css/UserRegistration.css';
import UserLogin from './Userlogin';

const UserRegistration = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    busiName: '',
    busiType: '',
  });
 // Use the useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await registerUser(formData);
      console.log(response); // Handle success response
      // Redirect to login page
      navigate('/login')
      
    } catch (error) {
      console.error(error); // Handle error response
      // Show error message to user
    }
  };

  return (
    <div className="user-registration-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="text" name="busiName" placeholder="Business Name" value={formData.busiName} onChange={handleChange} required />
        <input type="text" name="busiType" placeholder="Business Type" value={formData.busiType} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegistration;
