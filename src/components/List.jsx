import React, { useContext } from "react";
import { todoContext } from "../context/TodoContextProvider";

const List = () => {
  const { todos, deleteTodo } = useContext(todoContext);

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}

            <button onClick={() => deleteTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
