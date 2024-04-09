import GreenDot from "../icons/GreenDot";
import UpPersent from "../icons/UpPercent";
import BlueDot from "../icons/BlueDot";
import DownPercent from "../icons/DownPercent";

const GeldExIn = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "200px" }}>
      <div style={{ display: "flex", flexDirection: "column", borderRadius: "12px" }}>
        <div style={{ width: "383px", height: "56px", backgroundColor: "white", display: "flex", border: "rgba(226, 232, 240, 1) solid", borderRadius: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
            <GreenDot />
            <div style={{ paddingLeft: "5px" }}>Your income</div>
          </div>
        </div>

        <div style={{ width: "383px", height: "160px", backgroundColor: "white", border: "rgba(226, 232, 240, 1) solid", borderRadius: "12px" }}>
          <div style={{ paddingTop: "65px", paddingLeft: "20px" }}>
            <p style={{ color: "rgba(100, 116, 139, 1)" }}>Your income amount</p>
            <p style={{ display: "flex", alignItems: "center" }}> <UpPersent />from last month </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ width: "383px", height: "56px", backgroundColor: "white", display: "flex", border: "rgba(226, 232, 240, 1) solid", borderRadius: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", paddingLeft: "10px" }}>
            <BlueDot />
            <div style={{ paddingLeft: "5px" }}>Your expense</div>
          </div>
        </div>

        <div style={{ width: "383px", height: "160px", backgroundColor: "white", border: "rgba(226, 232, 240, 1) solid", borderRadius: "12px" }}>
          <div style={{ paddingTop: "65px", paddingLeft: "10px" }}>
            <p style={{ color: "rgba(100, 116, 139, 1)" }}>Your expense amount</p>
            <p style={{ display: "flex", alignItems: "center" }}> <DownPercent />from last month </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeldExIn;
