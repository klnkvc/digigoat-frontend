import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BeritaCard from '../components/BeritaCard';
import BeritaPage from '../components/BeritaPage';

const News = () => {
    return (
        <div>
            <Navbar />
            <BeritaCard />
            <BeritaPage />
            <Footer />
        </div>
    );
};

export default News;
