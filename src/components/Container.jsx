import { useState } from "react";
import Form from "./Form";
// step -1
const initialState = [
  {
    id: 1,
    title: "sample title",
    for: "rent",
    by: "upi",
    date: new Date(),
    type: "expense",
    amount: 2000,
  },
  {
    id: 2,
    title: "trip",
    for: "petrol",
    by: "card",
    date: new Date(),
    type: "expense",
    amount: 1000,
  },
  {
    id: 3,
    title: "salary",
    for: "salary",
    by: "cash",
    date: new Date(),
    type: "income",
    amount: 10000,
  },
];

const Container = () => {
  // step-2
  const [transactions, setTransactions] = useState(initialState);

  // step-11
  const handleAddTransaction = (newTransaction) => {
    const updatedTransaction = [...transactions, newTransaction];
    setTransactions(updatedTransaction);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* step-4 */}
      <Form onSubmit={handleAddTransaction} /> {/* step-12 passing prop*/}
      <ul>
        {/* step-3 */}
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
            }}
          >
            <span>{transaction.title}</span>
            <span>{transaction.type}</span>
            <span>{transaction.for}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.by}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Container;
