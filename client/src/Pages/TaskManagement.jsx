import React, { useState } from 'react';
import '../Css/TaskManagement.css';
import Footer from '../Components/Footer';
import '../Css/Footer.css'

const TaskManagement = () => {
  const [taskData, setTaskData] = useState({
    tid: '',
    title: '',
    description: '',
    assignedTo: '',
    statuss: '',
    dueDate: '',
    progressUpdates: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit task data to the backend
    console.log(taskData);
  };

  return (
    <div className="form-container">
      <h2>Task Management</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="tid" placeholder="Task ID" value={taskData.tid} onChange={handleChange} required />
        <input type="text" name="title" placeholder="Task Title" value={taskData.title} onChange={handleChange} required />
        <input type="text" name="description" placeholder="Task Description" value={taskData.description} onChange={handleChange} />
        <input type="number" name="assignedTo" placeholder="Assigned To" value={taskData.assignedTo} onChange={handleChange} />
        <input type="text" name="statuss" placeholder="Status" value={taskData.statuss} onChange={handleChange} />
        <input type="date" name="dueDate" placeholder="Due Date" value={taskData.dueDate} onChange={handleChange} />
        <textarea name="progressUpdates" placeholder="Progress Updates" value={taskData.progressUpdates} onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
      <Footer />
    </div>
  );
};

export default TaskManagement;
