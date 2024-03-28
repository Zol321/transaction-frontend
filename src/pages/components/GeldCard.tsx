import Card from '../../../public/Card.png'

export const GeldCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Card.src})`,
        width: "384px",
        height: "216px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 20,
          left: 15,
        }}>
            <p style={{margin:0, opacity:"50%", fontSize:"16px", color:"white"}}>Cash</p>
            <p style={{margin:0, fontSize:"24px", color:"white"}}>10,000,000</p>
        </div>
    </div>
  );
};

export default GeldCard;
