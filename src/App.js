import { useMemo, useState } from "react";
import ChildOne, { ChildThree, ChildTwo } from "./components/Child";

const App = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(10);
  console.log("parent");

  const person = useMemo(() => {
    return {
      name: "ragnar",
      age: 21,
    };
  }, [count]);

  return (
    <main>
      <div>Parent</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setAge(age + 1)}>change</button>
      <ChildOne count={count} />
      <ChildTwo />
      <ChildThree person={person} />
    </main>
  );
};

export default App;
