import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { dispositivos, setSelectedUVData } = props;

  const venues = dispositivos.map((dispositivo) => {
    let uv = 0;
    let fecha;
    dispositivo.medicion.map((medicion) => {
      fecha = medicion.fecha;
      uv = medicion.uv;
    });
    return {
      geometry: [dispositivo.latitud, dispositivo.longitud],
      name: dispositivo.identificador,
      uv: uv,
      fecha: fecha,
    };
  });

  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} setSelectedUVData={setSelectedUVData} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
