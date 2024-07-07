import React, { useState } from 'react';
import { loginUser } from '../Api'; // Import the loginUser function
import '../Css/Userlogin.css'
import Footer from '../Components/Footer';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
   const  navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      console.log(response); // Handle success response
      localStorage.setItem('token', response.token); // Store token in localStorage
      navigate('/')
      // Redirect or show success message
    } catch (error) {
      console.error(error); // Handle error response
      // Show error message to user
    }
  };

  return (
    <div className="user-login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <Footer />
    </div>
  );
};

export default UserLogin;
