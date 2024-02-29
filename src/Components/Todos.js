import TodoItem from "./TodoItem";

const Todos = ({ todos , onDelete}) => {
let myStyle = {
  minHeight :"70vh",
  margin:"40px auto"

}

  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="h2 my-3">Todos List</h3>
      {todos.length === 0 ? "no todos to display!" :todos.map((todo) => {
        return (
          <TodoItem key={todo.sno} todo={todo} onDelete={onDelete} />
        );
      })}
      
    </div>
  );
};

export default Todos;
