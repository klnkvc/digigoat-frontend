// src/pages/Manajemen.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import HealthCard from '../components/HealthCard';
import Notes from '../components/Notes';
import '../css/ManagementSystem.css';

const Management = () => (
  <div className="management-page">
    <Navbar />
    <main className="management-content">
      <HealthCard />
      <Calendar />
      <Notes />
    </main>
    <Footer />
  </div>
);

export default Management;
