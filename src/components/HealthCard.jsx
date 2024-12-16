// src/components/StatCard.jsx
import React from 'react';
import GaugeChart from 'react-gauge-chart';
import '../css/HealthCard.css';
import goat from '../assets/goat.png';

function GaugeCard({ title, percentage, color, label }) {
  return (
    <div className="gauge-card">
      <GaugeChart
        id={`gauge-chart-${title.toLowerCase()}`}
        nrOfLevels={20}
        percent={percentage / 100}
        colors={[color, "#D3D3D3"]}
        arcWidth={0.3}
      />
      <h3>{percentage}%</h3>
      <p>Total {title}</p>
      <p style={{ color }}>{label}</p>
    </div>
  );
}

function GoatCountCard({ count }) {
  return (
    <div className="goat-count-card">
      <img src={goat} alt="Goat Icon" className="goat-icon" />
      <h3>Jumlah Kambing</h3>
      <p className="goat-count">{count}</p>
    </div>
  );
}

export default function StatCard() {
  return (
    <div className="stat-card-container">
      <GaugeCard title="Sehat" percentage={0} color="#4CAF50" label="Sehat" />
      <GaugeCard title="Sakit" percentage={0} color="#FF5722" label="Sakit" />
      <GoatCountCard count={0} />
    </div>
  );
}
