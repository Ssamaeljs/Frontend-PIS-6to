import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement,
} from "chart.js";
import moment from "moment";
import {
  agregarValorAlBuffer,
  getCategoriaPorUV,
  formatearFechaYHora,
} from "../MedicionUV/assets/MedicionUtils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  PointElement,
  LineElement
);


// Genera 50 fechas a partir del momento actual + 10 minutos
const fechas = Array.from({ length: 30 }, (_, index) =>
  moment().add(index * 10, "minutes").format("HH:mm")
);

// Genera 50 valores aleatorios para radiacionUVDispositivoActual y radiacionUVPromedio
const radiacionUVDispositivoActual = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 10) + 1
);
const radiacionUVPromedio = Array.from({ length: 30 }, () =>
  Math.floor(Math.random() * 5) + 1
);

const data = {
  labels: fechas,
  datasets: [
    {
      label: "Radiación UV Promedio",
      data: radiacionUVPromedio,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(255, 99, 132)",
      pointBackgroundColor: "rgba(255, 99, 132)",
    },
    {
      label: "Radiación UV Dispositivo Actual",
      data: radiacionUVDispositivoActual,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgba(75, 192, 192)",
      pointBackgroundColor: "rgba(75, 192, 192)",
    },
    
  ],
};

const options = {
  scales: {
    y: {
      min: 0,
      ticks: { color: "rgb(75, 192, 192)" },
    },
    x: {
      ticks: { color: "rgb(75, 192, 192)" },
    },
  },
};

const GraficoHistorico = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%", // Cambia el ancho del contenedor a 100%
        height: "300px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};



export default GraficoHistorico;
