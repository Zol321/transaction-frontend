// import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bar } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const data = {
//   labels,
//   datasets: [
//     {
//       label: "Income",
//       data: labels.map(() => {

//         return Math.random() * 3000000;
//       }),
//       backgroundColor: "#84CC16",
//       barPercentage: 0.7, 
//       borderRadius: 0, 
//     },
//     {
//       label: "Expense",
//       data: labels.map(() => {
//         return Math.random() * 3000000;
//       }),
//       backgroundColor: "#F97316",
//       barPercentage: 0.7, 
//       borderRadius: 0, 
//     },
//   ],
// };

// function BarChart() {
//   return <Bar data={data} />;
// }

// export default BarChart;



import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => Math.random() * 3000000),
      backgroundColor: "#84CC16",
      barPercentage: 0.7,
      borderRadius: 0,
    },
    {
      label: "Expense",
      data: labels.map(() => Math.random() * 3000000),
      backgroundColor: "#F97316",
      barPercentage: 0.7,
      borderRadius: 0,
    },
  ],
};

const options = {
  maintainAspectRatio: false, // Set to false to allow responsive sizing
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
  responsive: true,
  width: 100, // Set the desired width
  height: 200, // Set the desired height
};

function BarChart() {
  return <Bar data={data} options={options} />;
}

export default BarChart;
