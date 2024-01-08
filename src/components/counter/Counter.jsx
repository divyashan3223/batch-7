// const Counter = () => {
//   let count = 10;

//   const handleIncrement = () => {
//     count++;
//     console.log({ count });
//   };
//   const handleDecrement = () => {
//     count--;
//     console.log({ count });
//   };
//   return (
//     <>
//       <h1>Count - {count}</h1>
//       <button onClick={handleIncrement}>increment</button>
//       <button onClick={handleDecrement}>Decrement</button>
//     </>
//   );
// };
// export default Counter;

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>Decrement</button>{" "}
    </>
  );
};

export default Counter;