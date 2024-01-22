import { useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(10);
  console.log("parent rendering");
  return (
    <div className="App">
      <h3>Parent Component -{count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
      <Child />
    </div>
  );
}

export default App;
