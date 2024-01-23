import { useContext } from "react";
import { themeContext } from "../context/ThemeContextProvider";

const BoxOne = () => {
  return (
    <div>
      <h1>BoxOne</h1>
      <BoxTwo />
      <BoxThree />
    </div>
  );
};
const BoxTwo = () => {
  return <div>BoxTwo</div>;
};
const BoxThree = () => {
  return (
    <div>
      <h1>BoxThree</h1>
      <BoxFour />
    </div>
  );
};
const BoxFour = () => {
  return (
    <div>
      <h1>BoxFour</h1>
      <BoxFive />
    </div>
  );
};
const BoxFive = () => {
  const theme = useContext(themeContext);
  console.log({ theme });
  return <div>BoxFive</div>;
};

export default BoxOne;
