import React from "react";

const Box = ({ balance = 0, income = 0, expense = 0 }) => {
  return (
    <article>
      <h3>Balance:{balance}</h3>
      <h3>income:{income}</h3>
      <h3>expense:{expense}</h3>
    </article>
  );
};

export default Box;
