import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home';
import ServicePage from './Pages/ServicePage';
import UserRegistration from './Pages/UserRegistration';
import EmployeeManagement from './Pages/EmployeeManagement';
import TaskManagement from './Pages/TaskManagement';
import Navbar from './Components/Navbar'; // Assuming Navbar is in the Components folder
import './Css/UserRegistration.css';
import './Css/EmployeeManagement.css';
import './Css/TaskManagement.css';
import './Css/Style.css';
import './Css/StyleS.css';
import'./Css/Userlogin.css';
import Userlogin from './Pages/Userlogin';
import AboutPage from './Pages/AboutPage';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/employeemanage" element={<EmployeeManagement />} />
        <Route path="/services/taskmanage" element={<TaskManagement />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<Userlogin />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
