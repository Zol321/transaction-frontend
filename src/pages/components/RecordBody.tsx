import { useEffect, useState } from "react";
import { ListItem } from "./ListItem";
import axios from "axios";

export const RecordBody = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/get-transaction");
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
