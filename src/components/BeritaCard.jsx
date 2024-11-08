import React from 'react';
import { Link } from 'react-router-dom';
import featuredImage from '../assets/1.png'; // Import gambar langsung
import '../css/BeritaCard.css';

const FeaturedArticle = () => (
  <div className="featured-article">
    <img
      src={featuredImage} // Gunakan variabel yang diimpor
      alt="Featured"
      className="featured-article-image"
    />
    <div className="featured-article-content">
      <h2 className="featured-article-title">
        Semangat Bomber Persik Kediri Isi Libur Kompetisi dengan Ternak Kambing.
      </h2>
      <p className="featured-article-description">
        Kediri - Striker Persik Kediri Mochammad Kamal sangat sibuk mengisi libur kompetisi.
        Ia punya kegiatan yang tidak bisa diabaikan, yakni merawat kambing. Kegiatan ini
        merupakan bagian dari perencanaan...
      </p>
      <Link to="/article" className="featured-article-button">Baca Selengkapnya</Link>
    </div>
  </div>
);

export default FeaturedArticle;
