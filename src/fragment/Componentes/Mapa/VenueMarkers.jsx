import React from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";
<<<<<<< HEAD
import VenueLocationIconDisable from "./VenueLocationIconDisable";

const VenueMarkers = (props) => {
  const { dispositivos, setSelectedUVData } = props;
=======

const VenueMarkers = (props) => {
  const { dispositivos, setSelectedUVData } = props;

>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
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
<<<<<<< HEAD
      estado: dispositivo.estado,
=======
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
    };
  });

  const markers = venues.map((venue, i) => (
<<<<<<< HEAD
    <Marker
      key={i}
      position={venue.geometry}
      icon={venue.estado ? VenueLocationIcon : VenueLocationIconDisable}
    >
=======
    <Marker key={i} position={venue.geometry} icon={VenueLocationIcon}>
>>>>>>> 2a375fe5c13082d0fb2ef989aff1fd94a5caa0e2
      <MarkerPopup data={venue} setSelectedUVData={setSelectedUVData} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default VenueMarkers;
