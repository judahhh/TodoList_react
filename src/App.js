import "./App.css";
import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoBoard from "./components/TodoBoard";
import TodoItem from "./components/TodoItem";
import TodoEdit from "./components/TodoEdit";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일1",
      checked: true,
    },
    {
      id: 2,
      text: "할일2",
      checked: true,
    },
    {
      id: 3,
      text: "할일3",
      checked: true,
    },
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current++;
  }, []);
  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id == id
          ? {
              ...todo,
              checked: !todo.checked,
            }
          : todo
      )
    );
  }, []);
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}></TodoInsert>
        <TodoBoard todos={todos}>
          <TodoItem onRemove={onRemove} onToggle={onToggle}></TodoItem>
        </TodoBoard>
        <TodoEdit></TodoEdit>
      </TodoTemplate>
    </div>
  );
}

export default App;
