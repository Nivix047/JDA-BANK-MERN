import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Usage() {
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        label: "Dataset 1",
        data: [8, 7, 8, 6, 8, 7, 5, 6],
        backgroundColor: "transparent",
        borderColor: "rgb(44, 209, 71)",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: [3, 4, 8, 5, 1, 6, 9, 6],
        backgroundColor: "transparent",
        borderColor: "rgb(227, 154, 227)",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => "$" + value,
        },
      },
    },
  };
  return (
    <div style={{ width: "80%", height: "80vh", marginleft: "20px" }}>
      <Line data={data} options={options}></Line>
    </div>
  );
}

export default Usage;
