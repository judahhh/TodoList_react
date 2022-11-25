import React, { useCallback } from "react";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //박스 안 value값 초기화
      e.preventDefault(); //기본이벤트인 새로고침 방지
    },
    [onInsert, value]
  );
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        type=""
        placeholder="할일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
