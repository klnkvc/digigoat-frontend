import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Notes.css";

function HistoryTable() {
  const [notes, setNotes] = useState([]); // State untuk menyimpan catatan
  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
  const navigate = useNavigate();

  // Fungsi untuk memuat data dari backend
  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Token tidak ditemukan! Pastikan Anda sudah login.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/notes", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`, // Kirim token di header
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data dari API:", data); // Debug: tampilkan data yang diterima
        setNotes(data); // Menyimpan data ke state
      } else {
        const errorData = await response.json();
        alert(`Gagal mengambil data: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    fetchNotes(); // Memuat data saat komponen dirender
  }, []);

  const handleTambahCatatan = () => {
    navigate("/tambah");
  };

  // Filter catatan berdasarkan query pencarian
  const filteredNotes = notes.filter((note) =>
    note.idKambing.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="history-container">
      <div className="search-bar">
        <h1 className="history-title">Riwayat Catatan</h1>
        <input
          type="text"
          placeholder="Cari ID Kambing..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
            <th>Jumlah Pakan (Kg)</th>
            <th>Perawatan (Obat/Vaksin)</th>
            <th>Catatan</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <tr key={note._id}>
                <td>{index + 1}</td>
                <td>{note.idKambing}</td>
                <td>{note.tanggal}</td>
                <td>{note.umurKambing}</td>
                <td>{note.berat}</td>
                <td>{note.jenisKelamin}</td>
                <td>{note.kesehatan}</td>
                <td>{note.pakan}</td>
                <td>{note.jumlahPakan}</td>
                <td>{note.perawatan}</td>
                <td>{note.catatan}</td>
                <td>
                  <button>Edit</button>
                  <button>Hapus</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="empty-row">
                Data kosong
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;
