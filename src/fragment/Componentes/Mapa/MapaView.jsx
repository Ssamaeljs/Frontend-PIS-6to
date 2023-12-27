import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import Markers from "./VenueMarkers";

const MapView = (props) => {
  const { setSelectedUVData } = props;
  const [forceUpdate, setForceUpdate] = useState(false);
  const [state, setState] = useState({
    currentLocation: { lat: "-4.030666556110944", lng: "-79.19964490854842" },
    zoom: 15,
    dispositivos: props.dispositivos,
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
          dispositivos: prevState.dispositivos.concat({
            identificador: "Tu ubicación",
            latitud: currentLocation.lat,
            longitud: currentLocation.lng,
            medicion: [
              {
                uv: 0,
              },
            ],
          }),
        }));
        // Cambiar el estado para forzar la actualización del componente
        setForceUpdate((prev) => !prev);
      },
      function (error) {},
      {
        enableHighAccuracy: true,
      }
    );
  }, [setForceUpdate]);

  return (
    <div
      className="card text-center"
      style={{ maxWidth: "70rem", maxHeight: "70rem" }}
    >
      <>
        <div className="card-header">
          <h5 className="card-title" style={{ fontWeight: "bold" }}>
            Ubicación Geográfica
          </h5>
        </div>
        <div className="card-body" style={{ width: "60rem", height: "40rem" }}>
          <div
            className="row"
            style={{ maxWidth: "69rem", maxHeight: "69rem" }}
          >
            <MapContainer
              key={forceUpdate ? "force-update" : "normal-update"}
              center={state.currentLocation}
              zoom={state.zoom}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://github.com/Ssamaeljs">SamaelJS</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Markers
                dispositivos={state.dispositivos}
                setSelectedUVData={setSelectedUVData}
              />
            </MapContainer>
          </div>
        </div>
      </>
    </div>
  );
};

export default MapView;
