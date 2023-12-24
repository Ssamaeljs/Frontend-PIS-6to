import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import data from "./assets/data.json";
import Markers from "./VenueMarkers";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GET } from "../../../hooks/Conexion";
import { getToken } from "../../../utilidades/Sessionutil";

const MapView = () => {
  const [llDispositivos, setLlDispositivos] = useState(false);
  const [dispositivos, setDispositivos] = useState([]);

  const [forceUpdate, setForceUpdate] = useState(false);
  const [state, setState] = useState({
    currentLocation: { lat: "-4.030666556110944", lng: "-79.19964490854842" },
    zoom: 13,
    dispositivos: dispositivos,
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
  useEffect(() => {
    if (!llDispositivos) {
      GET("listar/dispositivo", getToken()).then((info) => {
        if (info.code !== 200) {
        } else {
          setDispositivos(info.info);
          setState((prevState) => ({
            ...prevState,
            dispositivos: info.info,
          }));
          setLlDispositivos((prev) => !prev);
        }
      });
    }
  }, [llDispositivos, dispositivos]);

  return (
    <div
      className="card text-center"
      style={{ maxWidth: "50rem", maxHeight: "70rem" }}
    >
      {llDispositivos && dispositivos.length > 0 && (
        <>
          <div className="card-header">
            <h5 className="card-title" style={{ fontWeight: "bold" }}>
              Ubicación Geográfica
            </h5>
          </div>
          <div
            className="card-body"
            style={{ width: "40rem", height: "40rem" }}
          >
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
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers dispositivos={state.dispositivos} />
              </MapContainer>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MapView;
