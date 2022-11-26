import React, { useRef, useState } from "react";
import "./TodoInput.css";
import { MdAddCircle } from "react-icons/md";

const TodoInput = ({ onAdd }) => {
  const textRef = useRef();
  const [text, setText] = useState("");

  const changeInput = (e) => {
    const { value } = e.target; //e.target(input태그)에서 value(입력된 값)을 추출
    console.log(e.target);
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault(); //새로고침 방지

    if (text === "") return; //text에 아무것도 없을 때 - 공백 입력 방지

    onAdd(text);

    setText("");
    textRef.current.focus();
  };

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
      {/* ref : Dom을 건드려야 할 때 사용 -> useRef 사용하여 ref달기*/}
      <button>
        <MdAddCircle className="icon" size="50"></MdAddCircle>
      </button>
    </form>
  );
};

export default TodoInput;
