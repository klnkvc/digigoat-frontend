// src/pages/Manajemen.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Metrics from '../components/Metrics';
import Calendar from '../components/Calendar';
import Notes from '../components/Notes';
import '../css/ManagementSystem.css';

const Management = () => (
  <div className="manajemen">
    <Navbar />
    <main className="manajemen-content">
      <Metrics />
      <Calendar />
      <Notes />
    </main>
    <Footer />
  </div>
);

export default Management;
