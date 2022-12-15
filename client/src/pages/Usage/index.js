import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";
import { QUERY_ME } from "../../utils/queries";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function Usage() {
  if (!Auth.loggedIn()) {
    window.location.replace("/login");
  }

  const { chart, loading } = useQuery(QUERY_ME);
  const chartInfo = chart?.me || {};
  console.log("chartInfo", chartInfo, chart);

  const x = ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"];
  const y = [8, 7, 8, 6, 8, 7, 5, 6];
  const z = [3, 4, 8, 5, 1, 6, 9, 6];

  console.log(x);
  const data = {
    labels: x,
    datasets: [
      {
        label: "Dataset 1",
        data: y,
        backgroundColor: "transparent",
        borderColor: "rgb(44, 209, 71)",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        label: "Dataset 2",
        data: z,
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
