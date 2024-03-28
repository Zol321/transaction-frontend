import HouseSvg from "../icons/houseSvg";

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
  console.log(diffrentHours);

  return (
    <div className="cat">
      <HouseSvg />
      <div className="dog">
        <div className="Torol">
          <div className="trans">{transaction.category}</div>
          <div className="time">{diffrentHours}</div>
        </div>
      </div>

      <div className="LastRecordAmount">
        <div className="Amount">{transaction.amount}</div>
      </div>
    </div>
  );
};
