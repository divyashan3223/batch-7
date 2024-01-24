import { useState } from "react";
import ChildOne, { ChildThree, ChildTwo } from "./components/Child";

const App = () => {
  const [count, setCount] = useState(10);
  console.log("parent");
  return (
    <main>
      <div>Parent</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <ChildOne />
      <ChildTwo />
      <ChildThree />
    </main>
  );
};

export default App;
