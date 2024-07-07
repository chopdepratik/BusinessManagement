import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../Components/Footer';
import { registeremp } from '../Api'; // Adjust import paths as needed
import '../Css/StyleS.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    empId: '',
    empEmail: '',
    empContact: '',
    designation: '',
    empAddress: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchEmp();
  }, []);

  const fetchEmp = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3000/api/v2/business/getemp', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployees(response.data.employee); // Make sure this matches your backend response structure
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      handleUpdate();
    } else {
      handleRegister();
    }
  };

  const handleRegister = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/v2/business/registeremp', formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('API response:', response);
      fetchEmp(); // Fetch employees after successful registration
      setFormData({
        name: '',
        empId: '',
        empEmail: '',
        empContact: '',
        designation: '',
        empAddress: '',
      });
    } catch (error) {
      console.error('Error registering employee:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/api/v2/business/deleteemp/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchEmp();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const handleEdit = (employee) => {
    setIsEditing(true);
    setEditId(employee._id);
    setFormData({
      name: employee.name,
      empId: employee.empId,
      empEmail: employee.empEmail,
      empContact: employee.empContact,
      designation: employee.designation,
      empAddress: employee.empAddress,
    });
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:3000/api/v2/business/updateemp/${editId}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('API response:', response);
      fetchEmp();
      setIsEditing(false);
      setEditId(null);
      setFormData({
        name: '',
        empId: '',
        empEmail: '',
        empContact: '',
        designation: '',
        empAddress: '',
      });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="service-details">
      <h2>Employee Management</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="empId">Employee ID:</label>
        <input type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} required />

        <label htmlFor="empEmail">Employee Email:</label>
        <input type="email" id="empEmail" name="empEmail" value={formData.empEmail} onChange={handleChange} required />

        <label htmlFor="empContact">Employee Contact:</label>
        <input type="text" id="empContact" name="empContact" value={formData.empContact} onChange={handleChange} required />

        <label htmlFor="designation">Designation:</label>
        <input type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />

        <label htmlFor="empAddress">Employee Address:</label>
        <textarea id="empAddress" name="empAddress" value={formData.empAddress} onChange={handleChange}></textarea>

        <button type="submit">{isEditing ? 'Update' : 'Submit'}</button>
      </form>
      <div>
        <h3>Employee List</h3>
        <table border={2}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Designation</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.empId}</td>
                <td>{employee.empEmail}</td>
                <td>{employee.empContact}</td>
                <td>{employee.designation}</td>
                <td>{employee.empAddress}</td>
                <td>
                  <button onClick={() => handleEdit(employee)}>Edit</button>
                  <button onClick={() => handleDelete(employee._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default EmployeeManagement;
