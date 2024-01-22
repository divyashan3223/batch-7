import { memo } from "react";

const Child = () => {
  console.log("child rendering");
  return <div>Child</div>;
};

const MemoizedChild = memo(Child);

export default MemoizedChild;
