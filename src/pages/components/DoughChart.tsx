import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const categories = ["Bills", "Food", "Shopping", "Insurance", "Clothing"];
const expenses = [300, 50, 100, 200, 150];
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`, `#F2901C`];

const sum = expenses.reduce((a, b) => a + b, 0);

const dataSet = {
  labels: categories,
  datasets: [
    {
      data: expenses,
      backgroundColor: colors,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function DoughChart() {
  return (
    <div style={{width:"630px", border:"rgba(226, 232, 240, 1) solid", borderRadius:"10px",display:"flex", justifyContent:"center", height:"370px", alignItems:"center", backgroundColor:"white"}} >

    <div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "588px",
        borderRadius: "12px",
        border: "rgba(226, 232, 240, 1) solid",
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}>
        <h3>Expenses</h3>
        <p>Total: {sum}$</p>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: "1px",
          margin: "10px 0",
        }}
        />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Doughnut
          data={dataSet}
          options={options}
          style={{ maxHeight: "156px", maxWidth: "156px" }}
          />
        <Labels />
      </div>
    </div>
          </div>
</div>
  );
}

const Labels = () => {
  return (
    <div>
      {categories.map((category, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{ display: "flex", alignItems: "center", width: "150px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: colors[index],
                margin: "5px",
                borderRadius: "50%",
              }}
              />
            <p style={{ marginRight: "10px" }}>{category}</p>
          </div>
          <div style={{ width: "100px" }}>{expenses[index]}$</div>
          <div style={{ width: "100px" }}>{(expenses[index] * 100) / sum}%</div>
        </div>
      ))}
    </div>
  );
};

export default DoughChart;