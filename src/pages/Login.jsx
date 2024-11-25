import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login berhasil!');

        // Menyimpan data di localStorage setelah login berhasil
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);  // Menyimpan email
        localStorage.setItem('username', data.username);  // Menyimpan username yang dikirim dari server
        localStorage.setItem('password', password);  // Menyimpan password

        navigate('/');  // Navigate to home page after login
      } else {
        setMessage(data.message || 'Login gagal. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Terjadi kesalahan pada server.');
    }
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate back to home
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-home-button" onClick={handleGoHome}>
          &#8592;
        </button>
        <img src={logo} alt="DigiGoat Logo" className="auth-logo" />
        <h2>DigiGoat</h2>
        <h3>SELAMAT DATANG!</h3>
        <p>Log in to continue access to DigiGoat</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Masukan kata sandimu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle"
            >
              {passwordVisible ? '👁️' : '🙈'}
            </button>
          </div>

          <a href="#" className="forgot-password">
            Lupa kata sandi?
          </a>
          <button type="submit" className="auth-button">
            Masuk
          </button>
        </form>

        {message && <p className="auth-message">{message}</p>}

        <p className="auth-footer">
          Belum punya akun DigiGoat? <a href="/Register">Daftar</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
