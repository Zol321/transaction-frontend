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

export const RecordBody = ({filteredData}:{filteredData: Transaction[]}) => {

  return (
    <div>
      {filteredData.map((transaction, index) => (
        <ListItem key={index} transaction={transaction} />
      ))}
    </div>
  );
};
