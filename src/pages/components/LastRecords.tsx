import { ListItem } from "./ListItem";

type Transaction = {
  amount: number;
  category: string;
  createdAt: Date | string;
  note: string;
  incomeTitle: string;
  transactionType: string;
  __v: number;
  _id: string;
};


const LastRecords = ({transactions}: {transactions: Transaction[]}) => {
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
          {transactions.map((transaction, index) => (
            <ListItem key={index} transaction={transaction} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastRecords;
