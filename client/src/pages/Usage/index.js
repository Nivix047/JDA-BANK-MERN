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

  const { data, loading } = useQuery(QUERY_ME);
  // const dummyObj = {
  //   transactions: []
  // };
  const chartInfo = data?.me || {};

  if (loading) {
    return (
      <div>
        <div className="spinner-grow text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>{" "}
      </div>
    );
  }

  // Date info for the x axis
  const date = chartInfo.transactions.map((transaction) => {
    return transaction.transaction_date;
  });

  // Sender's ending balance for running balance
  const senderEndBal = chartInfo.transactions.map((transaction) => {
    return transaction.senderEndingBalance;
  });

  // Balance and dates needs to be reversed due to descending sort order in the backend
  const reverseDate = date.reverse();
  const reverseSenderBal = senderEndBal.reverse();

  // Max balance on the Y Axis to make the running balance render dynamically
  const senderEndBalMax = Math.max(...senderEndBal) + 20;

  const chartData = {
    labels: reverseDate,
    datasets: [
      {
        label: "Running balance",
        data: reverseSenderBal,
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
        max: senderEndBalMax,
        ticks: {
          stepSize: 2,
          callback: (value) => "$" + value,
        },
      },
    },
  };
  return (
    <div style={{ width: "80%", height: "80vh", marginleft: "20px" }}>
      <Line data={chartData} options={options}></Line>
    </div>
  );
}

export default Usage;
