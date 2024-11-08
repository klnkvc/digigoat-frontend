import React, { useState } from 'react';
import '../css/Register.css';
import logo from '../assets/logo.png';

function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-card">
          <img src={logo} alt="DigiGoat Logo" className="signup-logo" />
          <h2>DigiGoat</h2>
          <h3>SELAMAT DATANG!</h3>
          <p>Daftar untuk mengakses DigiGoat</p>

          <form className="signup-form">
            <label>Nama Lengkap</label>
            <input type="text" placeholder="Nama Lengkap" />
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Sandi</label>
            <div className="signup-password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Sandi"
              />
              <span
                onClick={togglePasswordVisibility}
                className="signup-password-toggle"
              >
                {passwordVisible ? "👁️" : "🙈"}
              </span>
            </div>
            <label>Konfirmasi Sandi</label>
            <div className="signup-password-container">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="Konfirmasi Sandi"
              />
              <span
                onClick={toggleConfirmPasswordVisibility}
                className="signup-password-toggle"
              >
                {confirmPasswordVisible ? "👁️" : "🙈"}
              </span>
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
            <p className="signup-footer">
              Kembali ke Halaman <a href="/login">Masuk</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
