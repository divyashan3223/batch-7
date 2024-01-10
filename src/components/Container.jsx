import { useEffect, useState } from "react";
import Form from "./Form";
import Box from "./Box";
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
const balanceInit = {
  income: 0,
  expense: 0,
  balance: 0,
};

const Container = () => {
  // step-2
  const [transactions, setTransactions] = useState(initialState);
  const [balance, setBalance] = useState(balanceInit);

  useEffect(() => {
    const income = transactions
      .filter((trans) => trans.type === "income")
      .map((trans) => trans.amount)
      .reduce((acc, trans) => acc + Number(trans), 0);
    const expense = transactions
      .filter((trans) => trans.type === "expense")
      .map((trans) => trans.amount)
      .reduce((acc, trans) => acc + Number(trans), 0);

    const balance = income - expense;
    setBalance({
      expense,
      income,
      balance,
    });
  }, [transactions]);

  // step-11
  const handleAddTransaction = (newTransaction) => {
    const updatedTransaction = [...transactions, newTransaction];
    setTransactions(updatedTransaction);
    console.log({ transactions });
  };

  return (
    <div style={{ display: "flex" }}>
      {/* step-4 */}
      <Form onSubmit={handleAddTransaction} /> {/* step-12 passing prop*/}
      <section>
        <Box {...balance} />
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
      </section>
    </div>
  );
};

export default Container;
