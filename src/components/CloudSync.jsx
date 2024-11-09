// src/components/CloudSync.jsx
import React from 'react';
import '../css/CloudSync.css';

const CloudSync = () => (
  <section className="cloud-sync">
    <h2>Sinkronisasi Cloud</h2>
    <label htmlFor="cloud-service">Pilih Layanan Cloud</label>
    <select id="cloud-service">
      <option>Google Drive</option>
      <option>Drop Box</option>
      <option>One Drive</option>
    </select>
    <div className="cloud-buttons">
      <button className="upload-button">Unggah ke Cloud</button>
      <button className="download">Unduh dari Cloud</button>
    </div>
    <div className="sync-status">
      <p>Status Sinkronisasi</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: '0%' }}>0%</div>
      </div>
    </div>
  </section>
);

export default CloudSync;
