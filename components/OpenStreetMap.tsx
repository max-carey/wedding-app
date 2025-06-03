'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const containerStyle = {
  width: '500px',
  height: '750px'
};

// Wedding location coordinates in Mexico City
const position: [number, number] = [19.42809936877832, -99.16142492012331];

const OpenStreetMapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current).setView(position, 15);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(leafletMapRef.current);
      L.marker(position).addTo(leafletMapRef.current)
        .bindPopup('Wedding Venue: Calle Gral. Prim 32, Col. Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX')
        .openPopup();
    }
    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <div ref={mapRef} style={containerStyle}></div>
  );
};

export default OpenStreetMapComponent; 