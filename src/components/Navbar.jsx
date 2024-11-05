import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="DigiGoat Logo" className="logo-img" />
                <span className="navbar-title">DigiGoat</span>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Beranda</a></li>
                <li><a href="/AboutUs">Tentang Kami</a></li>
                <li><a href="/management">Manajemen Sistem</a></li>
                <li><a href="/berita">Berita</a></li>
                <li><a href="/pemulihan">Pemulihan Data</a></li>
            </ul>
            <button className="login-button" onClick={handleLoginClick}>Masuk</button>
        </nav>
    );
};

export default Navbar;
