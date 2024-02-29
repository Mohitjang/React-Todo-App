import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4 className="my-3">{todo.title}</h4>
      <p className="">{todo.desc}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>  
      <hr />
    </div>
  );
};

export default TodoItem;
