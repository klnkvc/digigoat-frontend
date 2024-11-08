// src/components/ArticleGrid.jsx
import React from 'react';
import '../css/BeritaPage.css';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import image5 from '../assets/5.png';
import image6 from '../assets/6.png';
import image7 from '../assets/7.png';

const articles = [
  {
    image: image2, // Menggunakan import gambar
    title: 'Kebahagiaan Carya di Kala Usia Senja, Dapat Bantuan Usaha Ternak',
    date: '06 Mei 2024',
  },
  {
    image: image3,
    title: 'Kisah Bhabinkamtibmas Polres Jepara, Nyambi Ternak Kambing Raup Cuan Jutaan',
    date: '28 Oktober 2023',
  },
  {
    image: image4,
    title: 'Kisah Sukses Yuda Jadi Peternak Kambing Perah Separa Beromzet Puluhan Juta',
    date: '4 Maret 2023',
  },
  {
    image: image5,
    title: 'Desa Siru Bakal Jadi Sentra Ternak Kambing, Incar Warung Sate Labuan Bajo',
    date: '16 Nov 2022',
  },
  {
    image: image6,
    title: 'Pasutri Petani Milenial dari Magelang, Ekspor Gula Semut-Ternak Ratusan Kambing',
    date: '---',
  },
  {
    image: image7,
    title: 'Kisah Agung Peternak Muda yang Sukses Gemukkan Kambing dengan Pakan Fermentasi',
    date: '28 Agustus 2022',
  },
];

const ArticleGrid = () => (
  <div className="article-grid">
    {articles.map((article, index) => (
      <div className="article-card" key={index}>
        <img src={article.image} alt={article.title} className="article-image" />
        <div className="article-content">
          <div className="article-header">
            <h3 className="article-title">{article.title}</h3>
            <p className="article-date">{article.date}</p>
          </div>
          <button className="read-more-button">Baca Sekarang</button>
        </div>
      </div>
    ))}
  </div>
);

export default ArticleGrid;
