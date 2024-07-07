// EmployeeTable.js
import React from 'react';

const EmployeeDetails = ({ employees }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Employee ID</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Designation</th>
          <th>Address</th>
          {/* Add other relevant headers */}
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
            {/* Add other relevant columns */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeDetails;
