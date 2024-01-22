import { useMemo, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(10);
  const [age, setage] = useState(10);
  console.log("parent rendering");

  const person = useMemo(() => {
    return {
      name: "ragnar",
      course: "python",
    };
  }, [count]);

  return (
    <div className="App">
      <h3>Parent Component -{count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setage(count + 1)}>age</button>
      <Child person={person} />
    </div>
  );
}

export default App;
