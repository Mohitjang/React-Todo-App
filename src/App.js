import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import About from "./Components/About";
import AddTodo from "./Components/AddTodo";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (!localStorage.getItem("todos")) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDeleteFunc = (todo) => {
    // console.log("i am onDeleteFunction", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let sno;
  const addTodo = (title, desc) => {
    // console.log("i am addtodo function", title, desc);
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    // array desctructuring
    setTodos([...todos, myTodo]);
    // console.log(myTodo);
  };

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Switch>
          <Route
          exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDeleteFunc} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
