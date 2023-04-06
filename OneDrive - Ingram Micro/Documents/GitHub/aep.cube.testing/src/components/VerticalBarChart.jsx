import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { LinearScale } from "chart.js";

function VerticalBarChart({ labels, positiveData, negativeData, title }) {
  // Chart data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Positive",
        backgroundColor: "rgba(25, 118, 210, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        data: positiveData,
      },
      {
        label: "Negative",
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        data: negativeData,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        type: "linear",
      },
    },
    plugins: {
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
        },
        padding: {
          bottom: 10,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 5, // or any other value you like
      },
    },
  };

  // Register linear scale on component mount
  useEffect(() => {
    Chart.register(LinearScale);
  }, []);

  return (
    <div style={{ width: "550px", height: "275px" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default VerticalBarChart;
