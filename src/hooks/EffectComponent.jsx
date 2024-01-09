import { useState } from "react";
import { useEffect } from "react";

const effect = () => {
  console.log("rendering");
  return () => {
    console.log("cleanup code");
  };
};

const EffectComponent = () => {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState(10);

  useEffect(effect, [age]);

  return (
    <div>
      <h1>
        EffectComponent - {count} - {age}
      </h1>
      <button onClick={() => setCount(count + 1)}>change</button>
      <button onClick={() => setAge(age + 1)}>change age</button>
    </div>
  );
};

export default EffectComponent;
