import axios from "axios";
import Lists from "./Lists";
import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";

import MinusCash from "../icons/MinusCash";
import HouseSvg from "../icons/houseSvg";

const LastRecords = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/get-transaction");
      setData(res.data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div className="MainContainer">
      <div>
        <div className="Header">
          <h1> Last Records</h1>
        </div>
        <div className="MainBody">
          
          {data.map((transaction, index) => (
            <ListItem key={index} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastRecords;
