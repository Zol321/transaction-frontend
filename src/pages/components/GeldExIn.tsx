import GreenDot from "../icons/GreenDot";
import UpPersent from "../icons/UpPercent";
import BlueDot from "../icons/BlueDot";
// import MoneySvg from "./MoneySvg";

const GeldExIn = () => {
  return (
    <div className="GeldExIn">
      <div className="InExContainer">

        <div className="Incomediv">
          <div className="InTop">
            <div className="write">
            <GreenDot/>
          Your Income
            </div>
          </div>
          <div className="InBottom">

            <div className="IncomeAmount">   </div>

            <div className="InAmount2"> Your Income Amount </div>
            <div className="UpFromMonth"> <UpPersent/>  % from last month</div>

          </div>
          
        </div>

        <div className="Expensediv">

        <div className="InTop">
        <div className="write">
            <BlueDot/>
          Your Income
            </div>
          </div>
          <div className="InBottom">

            <div className="IncomeAmount">   </div>

            <div className="InAmount2"> Your Income Amount </div>
            <div className="UpFromMonth"> <UpPersent/>  % from last month</div>

          </div>
        </div>



      </div>
     
    </div>
  );
};
export default GeldExIn;
