import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { dispositivos } = props;
  const venues = dispositivos.map((dispositivo) => {
    let uv = 0;
    dispositivo.medicion.map((medicion) => {
      uv = medicion.uv;
    });
    return {
      geometry: [dispositivo.latitud, dispositivo.longitud],
      name: dispositivo.identificador,
      uv: uv,
    };
  });

  const markers = venues.map((venue, i) => (
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={venue} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
