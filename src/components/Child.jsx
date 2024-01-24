import { memo } from "react";

const ChildOne = memo(({ count }) => {
  console.log("one");
  return <div>ChildOne-{count}</div>;
});

export const ChildTwo = memo(() => {
  console.log("two");
  return <div>ChildTwo</div>;
});

export const ChildThree = memo(() => {
  console.log("three");
  return <div>ChildThree</div>;
});

export default ChildOne;
