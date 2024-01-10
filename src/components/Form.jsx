import { useState } from "react";
// step-5
const initialState = {
  title: "",
  for: "",
  by: "",
  type: "",
  amount: 0,
};
/* step-13 receiving props*/
const Form = ({ onSubmit }) => {
  // step-6
  const [transaction, setTransaction] = useState(initialState);
  // step-7
  const handleChange = (event) => {
    const { value, name } = event.target;
    setTransaction({ ...transaction, [name]: value });
  };

  // step-9
  const handleSubmit = (event) => {
    event.preventDefault();
    // step-10
    onSubmit(transaction);
    setTransaction(initialState);
  };

  return (
    // step-8
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Title</label>
        <input type="text" name="title" value={transaction.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="">Amount</label>
        <input type="number" name="amount" value={transaction.amount} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="">For</label>
        <label htmlFor="">
          <input type="radio" name="for" id="" value="food" onChange={handleChange} />
          food
        </label>
        <label htmlFor="">
          <input type="radio" name="for" id="" value="rent" onChange={handleChange} />
          rent
        </label>
        <label htmlFor="">
          <input type="radio" name="for" id="" value="petrol" onChange={handleChange} />
          petrol
        </label>
      </div>
      <div>
        <label htmlFor="">By</label>
        <label htmlFor="">
          <input type="radio" name="by" id="" value="cash" onChange={handleChange} />
          Cash
        </label>
        <label htmlFor="">
          <input type="radio" name="by" id="" value="upi" onChange={handleChange} />
          upi
        </label>
        <label htmlFor="">
          <input type="radio" name="by" id="" value="card" onChange={handleChange} />
          Card
        </label>
      </div>
      <div>
        <label htmlFor="">Type</label>
        <label htmlFor="">
          <input type="radio" name="type" id="" value="income" onChange={handleChange} />
          income
        </label>
        <label htmlFor="">
          <input type="radio" name="type" id="" value="expense" onChange={handleChange} />
          expense
        </label>
      </div>
      <input type="submit" value="Add Transaction" />
    </form>
  );
};

export default Form;
