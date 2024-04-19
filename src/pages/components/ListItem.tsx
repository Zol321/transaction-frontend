import HouseSvg from "../icons/houseSvg";
import RecordModal  from "./Modal";
import DeleteConfirmation from "./DeleteConformation";

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

 const ListItem = ({ transaction }: { transaction: Transaction }) => {
  const timestamp = new Date(transaction.createdAt);
  const year = timestamp.getFullYear();
  const month = String(timestamp.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(timestamp.getDate()).padStart(2, "0");

  const formattedDate = `${year}/${month}/${day}`;
  console.log(formattedDate); // Output: "2024/04/18"

  const whichTransaction = (transactionType: string) => {
    if (transactionType === "income") {
      return "green";
    } else {
      return "red";
    }
  };

  return (
    <div className="cat">
      <div className="dog">
        <HouseSvg />
        <div className="Torol" style={{ marginLeft: "12px" }}>
          <div className="trans">{transaction.category}</div>
          <div className="time">{formattedDate}</div>
        </div>
        <div style={{paddingLeft:"20px", display:"flex", alignItems:"center"}}>
     {transaction.note}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: whichTransaction(transaction.transactionType) }}>
          <div style={{ marginRight: "30px" }}>
            {transaction.transactionType === "income" ? "" : "-"}
            {transaction.amount}
          </div>
        </div>
        <div>
          <RecordModal edit={true} transaction={transaction} />
        </div>
        <div>
          <DeleteConfirmation transaction={transaction} />
        </div>
      </div>
    </div>
  );
};

export default ListItem