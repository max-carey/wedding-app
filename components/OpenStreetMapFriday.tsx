'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const containerStyle = {
  width: '500px',
  height: '750px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

// Custom popup style
const popupStyle = {
  backgroundColor: '#2d4a1e',
  color: '#ffffff',
  padding: '10px',
  borderRadius: '4px',
  fontSize: '14px',
  border: 'none'
};

// Wedding location coordinates in Mexico City
const position: [number, number] = [19.429894360240656, -99.15299641373737];

const OpenStreetMapFridayComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = L.map(mapRef.current).setView(position, 15);
      
      // Using Stadia Maps' Alidade Smooth tiles for a forest green theme
      L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(leafletMapRef.current);

      // Add marker with custom styling
      const marker = L.marker(position).addTo(leafletMapRef.current);
      marker.bindPopup('Calle Gral. Prim 32, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX', {
        className: 'custom-popup',
        ...popupStyle
      }).openPopup();
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

export default OpenStreetMapFridayComponent; 