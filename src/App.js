import { useState } from "react";
import ChildOne, { ChildThree, ChildTwo } from "./components/Child";

const App = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(5);
  console.log("parent");
  return (
    <main>
      <div>Parent</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setAge(age + 1)}>change</button>
      <ChildOne count={count} />
      <ChildTwo />
      <ChildThree age={age} />
    </main>
  );
};

export default App;
