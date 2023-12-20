import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import data from "./assets/data.json";
import Markers from "./VenueMarkers";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
const MapView = () => {
  const [forceUpdate, setForceUpdate] = useState(false);
  const [state, setState] = useState({
    currentLocation: { lat: "-4.030666556110944", lng: "-79.19964490854842" },
    zoom: 17,
    data,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        setState((prevState) => ({
          ...prevState,
          currentLocation,
          data: {
            venues: prevState.data.venues.concat({
              name: "Tu ubicación",
              geometry: [currentLocation.lat, currentLocation.lng],
            }),
          },
        }));
        // Cambiar el estado para forzar la actualización del componente
        setForceUpdate((prev) => !prev);
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, [setForceUpdate]);

  return (
    <div className="card text-center" style={{ maxWidth: "30rem" }}>
      <div className="card-header">
        <h5 className="card-title" style={{ fontWeight: "bold" }}>
          Ubicación Geográfica
        </h5>
      </div>
      <div className="card-body">
        <div className="row">
          <MapContainer
            key={forceUpdate ? "force-update" : "normal-update"}
            center={state.currentLocation}
            zoom={state.zoom}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers venues={state.data.venues} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
