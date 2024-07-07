import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import '../Css/StyleS.css';
import EmployeeManagement from './EmployeeManagement';

const services = [
  {
    id: 'employeemanage',
    title: 'Employee Management',
    description: 'Manage employee records, track attendance, and oversee performance evaluations efficiently. Our Employee Management service ensures that your workforce is productive and well-organized, making it easier for you to focus on growing your business.'
  },
  {
    id: 'taskmanage',
    title: 'Task Management',
    description: 'Create, assign, and track tasks to ensure all your projects are completed on time. Stay on top of your to-do list and never miss a deadline with our Task Management service, designed to enhance your team’s productivity and collaboration.'
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'Plan, execute, and monitor projects with tools to manage resources and timelines effectively. Our Project Management service provides you with the tools you need to ensure successful project delivery, keeping everything on track and within budget.'
  },
  {
    id: 'financial-management',
    title: 'Financial Management',
    description: 'Oversee financial activities, generate reports, and ensure accurate bookkeeping. Our Financial Management service helps you stay financially healthy by offering detailed insights and easy-to-use tools to manage your business finances with confidence.'
  }
];

const ServicePage = () => {
  return (
    <div className="service-page">
      <header className="hero-section">
        <h1>Our Services</h1>
        <p>Explore our wide range of services to help streamline your business operations.</p>
      </header>
      <div className="services-list">
        {services.map((service) => (
          <Link to={`/services/${service.id}`} key={service.id} className="service-item">
            <h2>{service.title}</h2>
            <p className="service-summary">{service.description.split('.')[0] + '...'}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
