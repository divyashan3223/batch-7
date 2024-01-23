import { useContext, useState } from "react";
import { todoContext } from "../context/TodoContextProvider";

const Form = () => {
  const [title, setTitle] = useState("");

  const { addTodo } = useContext(todoContext);
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    if (title.length) {
      addTodo({
        id: 1,
        title,
        done: false,
      });
      alert("todo added successfully");
      setTitle("");
    } else {
      alert("Please enter a title");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default Form;
