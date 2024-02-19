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

const GraficoHistorico = ({ radiacionUVDispositivoActual, radiacionUVPromedio }) => {
  const fechas = Array.from({ length: 30 }, (_, index) =>
    moment().add(index * 10, "minutes").format("HH:mm")
  );

  const dataPromedio = {
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
    ],
  };

  const dataDispositivoActual = {
    labels: radiacionUVDispositivoActual.map((_, index) => `Dispositivo ${index + 1}`),
    datasets: [
      {
        label: "Radiación UV Dispositivos Actuales",
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

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "35%", height: "100%"}}>
        <Line data={dataPromedio} options={options} />
      </div>
      <div style={{ width: "35%" , height: "100%"}}>
        <Line data={dataDispositivoActual} options={options} />
      </div>
    </div>
  );
};

export default GraficoHistorico;
