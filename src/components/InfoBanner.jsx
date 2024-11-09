import React from 'react';
import '../css/InfoBanner.css';
import bannerImage from '../assets/11.png'; // Pastikan path ini sesuai dengan lokasi gambar

const InfoBanner = () => (
  <div className="info-banner">
    <img src={bannerImage} alt="Pemulihan Data" className="info-banner-image" />
  </div>
);

export default InfoBanner;
