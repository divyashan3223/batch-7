import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(10);
  console.log("parent rendering");
  const handleChange = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div className="App">
      <h3>Parent Component -{count}</h3>
      <button onClick={() => setCount(count + 1)}>click</button>

      <Child handleChange={handleChange} />
    </div>
  );
}

export default App;
