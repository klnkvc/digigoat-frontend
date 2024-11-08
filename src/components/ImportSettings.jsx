// src/components/ImportSettings.jsx
import React from 'react';
import '../css/ImportSettings.css';

const ImportSettings = () => (
  <section className="import-settings">
    <h2>Pengaturan Impor Data</h2>
    <label htmlFor="import-format">Format Impor</label>
    <select id="import-format">
      <option>Format File</option>
      <option>CSV</option>
      <option>EXCEL</option>
      <option>JSON</option>
    </select>
    <label htmlFor="import-file">Impor Data</label>
    <input type="file" id="import-file" />
    <button className="import-button">Import Data</button>
  </section>
);

export default ImportSettings;
