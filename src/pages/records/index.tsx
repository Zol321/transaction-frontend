/* eslint-disable max-lines */
import { useRouter } from "next/router";
import CategoryTypes from "../components/CategoryTypes";
import GeldIcon from "../icons/GeldIcon";
import ProfileSvg from "../icons/ProfileSvg";
import  RecordModal  from "../components/Modal";
import { RecordBody } from "../components/RecordBody";
import { MouseEventHandler, useEffect, useState } from "react";
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
  const [transactionType, setTransactionType] = useState("all");
  const [data, setData] = useState<Transaction[]>([]);

  const filteredData =
    transactionType === "expense"
      ? data.filter((data) => data.transactionType === "expense")
      : transactionType === "income"
      ? data.filter((data) => data.transactionType === "income")
      : data;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://transaction-backend-resb.onrender.com/get-transaction"
      );
      setData(res.data);
    };
    fetchData();
  }, []);
  const filterByAll: MouseEventHandler<HTMLInputElement> = () => {
    setTransactionType("All");
  };
  const filterByIncome: MouseEventHandler<HTMLInputElement> = () => {
    if (transactionType !== "income") {
      setTransactionType("income");
    }
  };
  const filterByExpense: MouseEventHandler<HTMLInputElement> = () => {
    if (transactionType !== "expense") {
      setTransactionType("expense");
    }
  };

  return (
    <div className="RecordsMainDiv">
      <div className="RecordNavbar">
        <div className="geldicon"></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <div onClick={() => router.push("/")}>
            <GeldIcon />
          </div>
          <a
            className="Dashboard"
            onClick={() => router.push("/")}
            style={{ fontSize: "18px", cursor:"pointer" }}
          >
            Dashboard
          </a>
          <h4 style={{ fontFamily: "sans-serif", paddingLeft: "20px", cursor:"pointer", fontWeight:"400" }}>
            Records
          </h4>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "1670px",
          }}
        >
          <div style={{ paddingRight: "20px" }}></div>

          <div className="Avatar">
            <ProfileSvg />
          </div>
        </div>
      </div>

      <div className="RecordBody">
        <div className="RecordsType">
          <h1
            style={{ display: "flex", paddingLeft: "20px", paddingTop: "15px" }}
          >
            Records
          </h1>
          <div style={{paddingTop:"20px"}}>
          <RecordModal edit={false} />
          </div>

          <h4 className="RecordsText2">Types</h4>
          <div className="CheckDiv">
            <div className="checkdiv">
              <input
                className="checkbox"
                type="radio"
                defaultChecked={transactionType === "all"}
                onClick={filterByAll}
              />
              <h5>All</h5>
            </div>
            <div className="checkdiv">
              <input
                className="checkbox"
                type="radio"
                defaultChecked={transactionType === "income"}
                onClick={filterByIncome}
              />
              <h5>Income</h5>
            </div>

            <div className="checkdiv">
              <input
                className="checkbox"
                type="radio"
                defaultChecked={transactionType === "expense"}
                onClick={filterByExpense}
              />
              <h5>Expense</h5>
            </div>
          </div>
          <div className="Minordiv">
            <h4>Category</h4>
          </div>

          <CategoryTypes />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 className="Record">Records</h1>
          <div>
            <RecordBody filteredData={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
