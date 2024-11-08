// src/components/Navbar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="DigiGoat Logo" className="logo-img" />
                <span className="navbar-title">DigiGoat</span>
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/" className={isActive('/') ? 'active-link' : ''}>Beranda</a>
                </li>
                <li>
                    <a href="/aboutus" className={isActive('/aboutus') ? 'active-link' : ''}>Tentang Kami</a>
                </li>
                <li>
                    <a href="/management" className={isActive('/management') ? 'active-link' : ''}>Manajemen Sistem</a>
                </li>
                <li>
                    <a href="/news" className={isActive('/news') ? 'active-link' : ''}>Berita</a>
                </li>
                <li>
                    <a href="/recovery" className={isActive('/recovery') ? 'active-link' : ''}>Pemulihan Data</a>
                </li>
            </ul>
            <button className="login-button" onClick={handleLoginClick}>Masuk</button>
        </nav>
    );
};

export default Navbar;
