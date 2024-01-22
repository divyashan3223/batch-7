import { memo } from "react";

const Child = ({ person }) => {
  console.log("child rendering");
  return <div>Child -{person.name}</div>;
};

export default memo(Child);
