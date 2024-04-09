import { useRouter } from "next/router";
import React from "react";
import GeldIcon from "./icons/GeldIcon";
import GeldExIn from "./components/GeldExIn";
import GeldCard from "./components/GeldCard";
import DoughChart from "./components/DoughChart";
import LastRecords from "./components/LastRecords";
import ProfileSvg from "./icons/ProfileSvg";
// import BarChart from './components/BarChart';

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="NavContainer">
      <div className="navbar">
        <div className="navdiv">
          <div className="Recdiv">
            <GeldIcon />
            <div className="div">
              <h3 className="Dashboard">Dashboard</h3>
              <a
                className="RecordsText"
                onClick={() => router.push("/records")}
              >
                Records
              </a>
            </div>
          </div>

          <div className="Profile">
            <div className="ARD">

                </div>
            <ProfileSvg/>
          </div>
        </div>

        <div className="Main">
          <div className="main">
            <div className="ExIn">
              <GeldCard   />
              <GeldExIn />
            </div>
          </div>

          {/* <BarChart/>  */}

          <div className="DoughChart">
            <DoughChart />
          </div>

          <div className="LastRecord">
            <LastRecords />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
