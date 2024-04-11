import axios from "axios";
import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

const LastRecords = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://transaction-backend-resb.onrender.com/get-transaction");
      setData(res.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="MainContainer">
      <div style={{display:"flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{display:"flex", justifyContent:"center"}}>
        <div className="Header">
          <h1>Last Records</h1>
        </div>
        </div>
        <div >  
          <div style={{display:'flex', flexDirection:"column" ,justifyContent:'center',paddingRight:"197px" }}>
          {data.map((transaction, index) => (
            <ListItem key={index} transaction={transaction} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastRecords;
