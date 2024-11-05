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
    <div className="auth-container">
      <div className="auth-card">
        <img src={logo} alt="DigiGoat Logo" className="auth-logo" />
        <h2>DigiGoat</h2>
        <h3>SELAMAT DATANG!</h3>
        <p>Log in to continue access to DigiGoat</p>

        <form className="auth-form">
          <label>Daftar</label>
          <input type="text" placeholder="Nama Lengkap" />
          <input type="email" placeholder="Email" />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Sandi"
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle"
            >
              {passwordVisible ? "👁️" : "🙈"}
            </span>
          </div>
          <div className="password-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Konfirmasi Sandi"
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="password-toggle"
            >
              {confirmPasswordVisible ? "👁️" : "🙈"}
            </span>
          </div>
          <button type="submit" className="auth-button">Sign Up</button>
          <p className="auth-footer">
          Kembali ke Halaman <a href="/Login">Masuk</a>
        </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
