import { useRef } from "react";

const Form = () => {
  const valueRef = useRef(21);
  console.log(valueRef);
  return (
    <div>
      <h1>Current value - {valueRef.current}</h1>
      <button
        onClick={() => {
          valueRef.current++;
          console.log(valueRef);
        }}
      >
        change
      </button>
    </div>
  );
};

export default Form;
