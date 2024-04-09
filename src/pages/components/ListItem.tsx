import HouseSvg from "../icons/houseSvg";
import { RecordModal } from "./Modal";
import { DeleteConfirmation } from "./DeleteConformation";

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

export const ListItem = ({ transaction }: { transaction: Transaction }) => {
  const date1 = new Date(transaction.createdAt);
  const date2 = new Date();

  const diffrentMs = Number(date2) - Number(date1);

  const diffrentHours = Math.round(diffrentMs / (1000 * 60 * 60));

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
          <div className="time">{diffrentHours}</div>
        </div>
      </div>
      <div style={{ color: whichTransaction(transaction.transactionType) }}>
        {transaction.transactionType === "income" ? "" : "-"}
        {transaction.amount}
      </div>
      <div>
        <RecordModal edit={true} transaction={transaction} />
      </div>
      <div>
        <DeleteConfirmation transaction={transaction}/>
      </div>
    </div>
  );
};
