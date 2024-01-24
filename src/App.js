import { useCallback, useMemo, useState } from "react";
import ChildOne, { ChildThree, ChildTwo } from "./components/Child";

const App = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(10);
  console.log("parent");
  const handleChange = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  return (
    <main>
      <div>Parent</div>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setAge(age + 1)}>change</button>

      <ChildOne count={count} />
      <ChildTwo />
      <ChildThree handleChange={handleChange} />
    </main>
  );
};

export default App;
