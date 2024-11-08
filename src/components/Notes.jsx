// src/components/HistoryTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Notes.css";

function HistoryTable() {
  const navigate = useNavigate();

  const handleTambahCatatan = () => {
    navigate('/tambah');
  };

  return (
    <div className="history-container">
      <div className="search-bar">
        <h1 className="history-title">Riwayat Catatan</h1>
        <input type="text" placeholder="Cari..." className="search-input" />
        <button className="search-button">
          <span role="img" aria-label="search">🔍</span>
        </button>
        <button className="add-button" onClick={handleTambahCatatan}>
          Tambah Catatan <span className="plus-icon">+</span>
        </button>
      </div>
      <table className="history-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID Kambing</th>
            <th>Tanggal</th>
            <th>Umur Kambing</th>
            <th>Berat (Kg)</th>
            <th>Jenis Kelamin</th>
            <th>Kesehatan</th>
            <th>Pakan</th>
            <th>Jumlah Pakan(Kg)</th>
            <th>Perawatan (Obat/Vaksin)</th>
            <th>Catatan</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="12" className="empty-row">Data kosong</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
