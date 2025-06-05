'use client';
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const position: [number, number] = [19.429894360240656, -99.15299641373737];

const OpenStreetMapFridayComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<any>(null);

  useEffect(() => {
    let leafletInstance: any;
    // Importa Leaflet y los assets solo en el cliente
    import('leaflet').then(L => {
      import('leaflet/dist/images/marker-icon.png').then(icon => {
        import('leaflet/dist/images/marker-shadow.png').then(iconShadow => {
          let DefaultIcon = L.icon({
            iconUrl: icon.default.src,
            shadowUrl: iconShadow.default.src,
            iconSize: [25, 41],
            iconAnchor: [12, 41]
          });
          L.Marker.prototype.options.icon = DefaultIcon;

          if (mapRef.current && !leafletMapRef.current) {
            leafletInstance = L.map(mapRef.current).setView(position, 15);
            leafletMapRef.current = leafletInstance;

            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
              attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
              maxZoom: 19
            }).addTo(leafletInstance);

            const marker = L.marker(position).addTo(leafletInstance);
            marker.bindPopup('Calle Gral. Prim 32, Juárez, Cuauhtémoc, 06600 Ciudad de México, CDMX', {
              className: 'custom-popup'
            }).openPopup();
          }
        });
      });
    });

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-[90vw] md:max-w-[500px] max-w-[360px] h-[400px] md:h-[750px] rounded-lg shadow-md z-0 mx-auto"
    />
  );
};

export default OpenStreetMapFridayComponent;
