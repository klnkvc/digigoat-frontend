import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../assets/logo.png';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="DigiGoat Logo" className="auth-logo" />
      <div className="auth-card">
        <h2>DigiGoat</h2>
        <h3>SELAMAT DATANG!</h3>
        <p>Log in to continue access to DigiGoat</p>

        <form className="auth-form">
          <label>Masuk</label>
          <input type="text" placeholder="Masukan Username" />

          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Masukan kata sandimu"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle"
            >
              {passwordVisible ? "👁️" : "🙈"}
            </button>
          </div>

          <a href="#" className="forgot-password">lupa kata sandi?</a>
          <button type="submit" className="auth-button">Masuk</button>
          <button type="button" className="auth-button google-signin">
            <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Icon" /> Masuk dengan Google
          </button>
        </form>

        <p className="auth-footer">
          Belum punya akun DigiGoat? <a href="/Register">Daftar</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
