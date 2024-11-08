// src/pages/DataRecovery.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImportSettings from '../components/ImportSettings';
import ExportSettings from '../components/ExportSettings';
import InfoBanner from '../components/InfoBanner';
import CloudSync from '../components/CloudSync';
import '../css/DataRecovery.css';

const DataRecovery = () => (
  <div className="data-recovery-page">
    <Navbar />
    <main className="data-recovery-content">
      <div className="import-export-section">
        <ImportSettings />
        <ExportSettings />
      </div>
      <InfoBanner />
      <CloudSync />
    </main>
    <Footer />
  </div>
);

export default DataRecovery;
