import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/StargazingWidget.css'; // We will style this next

const StargazingWidget = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.open-meteo.com/v1/forecast?latitude=25.4358&longitude=81.8463&current=cloud_cover,visibility,relative_humidity_2m&timezone=auto'
        );
        setWeatherData(response.data.current);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch astronomy weather conditions", error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  
  const calculateConditions = (cloudCover) => {
    if (cloudCover <= 10) return { status: 'Excellent', color: '#10B981' }; // Green
    if (cloudCover <= 30) return { status: 'Good', color: '#3B82F6' }; // Blue
    if (cloudCover <= 60) return { status: 'Fair', color: '#F59E0B' }; // Yellow
    return { status: 'Poor', color: '#EF4444' }; // Red
  };

  if (loading) return <div className="astro-widget loading">Scanning skies...</div>;
  if (!weatherData) return <div className="astro-widget error">Telemetry offline.</div>;

  const condition = calculateConditions(weatherData.cloud_cover);

  return (
    <div className="astro-widget">
      <h3>Live Sky Conditions (Prayagraj)</h3>
      <div className="metrics-grid">
        <div className="metric">
          <span className="label">Cloud Cover:</span>
          <span className="value">{weatherData.cloud_cover}%</span>
        </div>
        <div className="metric">
          <span className="label">Visibility:</span>
          <span className="value">{(weatherData.visibility / 1000).toFixed(1)} km</span>
        </div>
        <div className="metric">
          <span className="label">Humidity:</span>
          <span className="value">{weatherData.relative_humidity_2m}%</span>
        </div>
      </div>
      <div className="status-indicator" style={{ backgroundColor: condition.color }}>
        Verdict: {condition.status} for Stargazing
      </div>
    </div>
  );
};

export default StargazingWidget;