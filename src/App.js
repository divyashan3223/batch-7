import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import { createTodo } from "./api/todo";
import Container from "./components/Container";

const App = () => {
  const [title, setTitle] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title.length > 2) {
      await createTodo({
        done: false,
        title,
      });
      setTitle("");
    }
  };
  return (
    <main>
      <section>
        <h1>things to do:</h1>
        <form onSubmit={handleSubmit}>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
          <Button type="submit">Add Todo</Button>
        </form>
        <Container />
      </section>
    </main>
  );
};

export default App;
