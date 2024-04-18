import GreenDot from "../icons/GreenDot";

export const GeldExIn = ({
  amount,
  type,
}: {
  amount: number;
  type: string;
}) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "200px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            width: "383px",
            height: "56px",
            backgroundColor: "white",
            display: "flex",
            border: "rgba(226, 232, 240, 1) solid",
            borderRadius: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px",
            }}
          >
            <GreenDot />
            <div style={{ paddingLeft: "5px" }}>
              Your {type === "income" ? "income" : "expense"}
            </div>
          </div>
        </div>

        <div
          style={{
            width: "383px",
            height: "160px",
            backgroundColor: "white",
            border: "rgba(226, 232, 240, 1) solid",
            borderRadius: "12px",
          }}
        >
          <div style={{ paddingTop: "35px", paddingLeft: "20px" }}>
            <h2 style={{fontWeight:"400"}}> {amount} MNT </h2>
            <p style={{ color: "rgba(100, 116, 139, 1)", paddingTop:"35px"
             }}>
              Your {type === "income" ? "income" : "expense"} amount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeldExIn;
