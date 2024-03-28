import { useRouter } from "next/router";
import CategoryTypes from "../components/CategoryTypes";
import GeldIcon from "../icons/GeldIcon";
import Record from "../icons/Record";
import ProfileSvg from "../icons/ProfileSvg";
import { RecordModal } from "../components/Modal";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="RecordsMainDiv">
      <div className="RecordNavbar">
        <div className="geldicon">
          <GeldIcon />
        </div>

        <div className="div">
          <a className="Dashboard" onClick={() => router.push("/")}>
            Dashboard
          </a>
          <h4 style={{ fontFamily: "sans-serif" }}>Records</h4>
        </div>

        <Record />
        <div className="Avatar">
          <ProfileSvg />
        </div>
      </div>

      <div className="RecordBody">
        <div className="RecordsType">
          <h1> Records </h1>
          <RecordModal/>
          <div className="InputDiv">
            <input
              className="RecordsInput"
              placeholder="Search"
              type="text"
            />
          </div>

          <h4 className="RecordsText2">Types</h4>
          <div className="CheckDiv">
            <div className="checkdiv">
              <input className="checkbox" type="radio" />
              <h5>All</h5>
            </div>
            <div className="checkdiv">
              <input className="checkbox" type="radio" />
              <h5>Income</h5>
            </div>

            <div className="checkdiv">
              <input className="checkbox" type="radio" />
              <h5>Expense</h5>
            </div>
          </div>
          <div className="Minordiv">
            <h4>Category</h4>
            <h4 className="color">Clear</h4>
          </div>
          <CategoryTypes />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
