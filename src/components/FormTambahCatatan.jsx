import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/FormTambahCatatan.css";

const FormTambahCatatan = () => {
  const [formData, setFormData] = useState({
    idKambing: "",
    tanggal: "",
    umurKambing: "",
    berat: "",
    jenisKelamin: "",
    pakan: "",
    jumlahPakan: "",
    catatan: "",
    perawatan: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token"); // Mengambil token dari localStorage
    if (!token) {
      alert("Token tidak ditemukan! Pastikan Anda sudah login.");
      navigate("/login"); // Redirect ke halaman login jika token tidak ada
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Menambahkan token ke header Authorization
        },
        body: JSON.stringify(formData), // Mengirimkan data form
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Data berhasil ditambahkan!");
        navigate("/management"); // Redirect ke halaman riwayat catatan setelah berhasil
      } else {
        const errorData = await response.json();
        alert(`Gagal menambahkan data: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan. Coba lagi.");
    }
  };
  

  return (
    <div className="form-tambah-catatan-container">
      <h1>Tambah Catatan</h1>
      <form className="form-tambah-catatan-form" onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-tambah-catatan-group" key={key}>
            <label className="form-tambah-catatan-label">
              {key.replace(/([A-Z])/g, " $1").toUpperCase()}
            </label>
            {key === "jenisKelamin" || key === "pakan" ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-tambah-catatan-select"
              >
                <option value="">Pilih {key.replace(/([A-Z])/g, " $1").toUpperCase()}</option>
                {key === "jenisKelamin" ? (
                  <>
                    <option value="jantan">Jantan</option>
                    <option value="betina">Betina</option>
                  </>
                ) : (
                  <>
                    <option value="rumput">Rumput</option>
                    <option value="lainnya">Lainnya</option>
                  </>
                )}
              </select>
            ) : (
              <input
                type={key === "tanggal" ? "date" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-tambah-catatan-input"
              />
            )}
          </div>
        ))}
        <div className="form-tambah-catatan-button-container">
          <button
            type="button"
            className="form-tambah-catatan-button"
            onClick={() => window.history.back()}
          >
            Batal
          </button>
          <button type="submit" className="form-tambah-catatan-button">
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormTambahCatatan;
