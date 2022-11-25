import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id}></TodoItem>
        ))}
      </ul>
    </div>
  );
};

export default TodoBoard;
