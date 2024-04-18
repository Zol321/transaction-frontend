import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import GeldIcon from "./icons/GeldIcon";
import GeldExIn from "./components/GeldExIn";
import GeldCard from "./components/GeldCard";
// import DoughChart from "./components/DoughChart";
import LastRecords from "./components/LastRecords";
import ProfileSvg from "./icons/ProfileSvg";
import axios from "axios";

type Transaction = {
  amount: number;
  category: string;
  createdAt: Date | string;
  note: string;
  incomeTitle: string;
  transactionType: string;
  __v: number;
  _id: string;
};

const Dashboard = () => {
  const router = useRouter();
  const [data, setData] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://transaction-backend-resb.onrender.com/get-transaction"
      );
      setData(res.data);
    };
    fetchData();
  }, []);
  let totalIncome = 0;
  let totalExpense = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i].transactionType === "income") {
      totalIncome = totalIncome + data[i].amount;
    } else {
      totalExpense = totalExpense + data[i].amount;
    }
  }

  return (
    <div className="NavContainer">
      <div className="navbar">
        <div className="navdiv">
          <div className="Recdiv">
            <GeldIcon />
            <div className="div">
              <div>
              <h3 style={{cursor: 'pointer', paddingLeft:"20px", fontWeight:"400"}}>Dashboard</h3>
              </div>
              <h3 style={{cursor:"pointer", paddingLeft:"20px", fontWeight:"400"}} onClick={() => router.push("/records")}>Records</h3>
            </div>
          </div>

          <div className="Profile">
            <div className="ARD"></div>
            <ProfileSvg />
          </div>
        </div>

        <div className="Main">
          <div className="main">
            <div className="ExIn">
              <GeldCard />
              <GeldExIn amount={totalIncome} type={"income"} />
              <GeldExIn amount={totalExpense} type={"expense"} />
            </div>
          </div>

          {/* <BarChart/>  */}

          <div className="DoughChart">
            {/* <DoughChart />   */}
          </div>

          <div className="LastRecord">
            <LastRecords transactions={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
