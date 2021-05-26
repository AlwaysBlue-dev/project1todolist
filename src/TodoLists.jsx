import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const TodoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <CloseIcon
          className="fa-items"
          onClick={() => {
            props.onSelect(props.id);
          }}
        />
        <li>{props.text}</li>;
      </div>
    </>
  );
};
export default TodoLists;