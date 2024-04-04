import { useRouter } from "next/router";
import CategoryTypes from "../components/CategoryTypes";
import GeldIcon from "../icons/GeldIcon";
import Record from "../icons/Record";
import ProfileSvg from "../icons/ProfileSvg";
import { RecordModal } from "../components/Modal";
import { RecordBody } from "../components/RecordBody";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="RecordsMainDiv">
      <div className="RecordNavbar">
        <div className="geldicon">

        </div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"start"}}>
          <GeldIcon />
        <a className="Dashboard" onClick={() => router.push("/")}  style={{fontSize:"18px"}}  >Dashboard</a>
        <h4 style={{ fontFamily: "sans-serif", paddingLeft:"20px"  }}>Records</h4>
        </div>


<div style={{display:"flex", alignItems:"center", marginLeft:"1670px"}}>
  <div style={{paddingRight:"20px"}}>
        <Record />
  </div>
        <div className="Avatar">
          <ProfileSvg />
</div>
        </div>
      </div>

      <div className="RecordBody">
        <div className="RecordsType">
          <h1
            style={{ display: "flex", paddingLeft: "20px", paddingTop: "15px" }}>
            {" "}
            Records{" "}
          </h1>
          <RecordModal edit={false}/>

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
        <div >
          {" "}
          <RecordBody />{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
