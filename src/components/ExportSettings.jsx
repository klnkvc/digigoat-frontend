// src/components/ExportSettings.jsx
import React from 'react';
import '../css/ExportSettings.css';

const ExportSettings = () => (
  <section className="export-settings">
    <h2>Pengaturan Ekspor Data</h2>
    <label htmlFor="format-export">Format Ekspor</label>
    <select id="format-export">
      <option>CSV</option>
      <option>EXCEL</option>
      <option>JSON</option>
    </select>
    
    <label htmlFor="date-range">Rentang Bulan</label>
    <select id="date-range">
      <option>Januari</option>
      <option>Februari</option>
      <option>Maret</option>
      <option>April</option>
      <option>Mei</option>
      <option>Juni</option>
      <option>Juli</option>
      <option>Agustus</option>
      <option>September</option>
      <option>Oktober</option>
      <option>November</option>
      <option>Desember</option>
    </select>
    
    <button className="export-button">Ekspor Data</button>
  </section>
);

export default ExportSettings;
