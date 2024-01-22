import { memo } from "react";

const Child = ({ handleChange, count }) => {
  console.log("child rendering");
  return (
    <div>
      Child -{count}
      <button onClick={handleChange}>change</button>
    </div>
  );
};

export default memo(Child);
