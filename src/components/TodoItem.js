import React from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
const TodoItem = ({ todo, onRemove, onToggle }) => {
  const id = todo.id;
  const text = todo.text;
  const checked = todo.checked;
  return (
    <>
      <div className="TodoItem">
        {/* { checked=true일 때 checked라는 class를 추가 } */}
        <div className="{cn('checkbox',{checked})}" onClick={onToggle}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div>{text}</div>
        <div className="edit">
          <MdModeEditOutline />
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
