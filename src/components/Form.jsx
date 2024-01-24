import { useEffect } from "react";
import { useRef } from "react";

const Form = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const handleClick = () => {};
  return (
    <div>
      <form>
        <div>
          <label htmlFor="">UserName</label>
          <input type="text" ref={inputRef} />
        </div>
      </form>
      <button onClick={handleClick}>focus</button>
    </div>
  );
};

export default Form;
