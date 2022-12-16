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

  // console.log("chartInfo.transactions", chartInfo.transactions);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("chartInfo", chartInfo.transactions[0]);

  const date = chartInfo.transactions.map((transaction) => {
    return transaction.transaction_date;
  });

  const senderEndBal = chartInfo.transactions.map((transaction) => {
    return transaction.senderEndingBalance;
  });

  // const sb = chartInfo.transactions
  //   .map((transaction) => transaction)
  //   .sort((a, b) => b - a);

  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const y = ["may", "june", "july"];

  const reverseDate = date.reverse();
  const reverseSenderBal = senderEndBal.reverse();

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
        max: 200,
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
