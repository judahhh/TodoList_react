import React from "react";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div>TodoList</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
