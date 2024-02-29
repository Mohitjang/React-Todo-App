import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!title.trim() || !desc.trim()) {
      alert("Title and Descripton can not be blank");
      return;
    } else {
      //  passing this data to the App component
      addTodo(title, desc);
    }
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container my-3">
      <h2>Add a Todo</h2>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />
        </div>

        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
