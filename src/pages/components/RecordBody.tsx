import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import axios from "axios";

export const RecordBody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://transaction-backend-resb.onrender.com/get-transaction");
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((transaction, index) => (
        <ListItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};
