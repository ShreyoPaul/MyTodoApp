import './App.css';
import Header from "./MyComponent/Header";
import { AddTask } from "./MyComponent/AddTask";
import { Footer } from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
import { About } from "./MyComponent/About";
// import { TodoItem } from "./MyComponent/TodoItem";
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  // initialize todo array with local storage
  let initTodo
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const dltAll = () => {
    initTodo = [];
    setTodos([]);
  }

  //Adding tasks
  const addTodo = (title, desc) => {

    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const task = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, task]);
    console.log(task);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  //rating 
  const [ratings, setRatings] = useState(1);
  function RateUs() {
    if (ratings !== 5) return setRatings(ratings + 1);
    else alert("Thank You So much for your LOVE 😍")
  }

  //deleting func
  const onDelete = (todo) => {
    alert("Are you sure to delete this task!");
    setTodos(todos.filter((e) => {
      // console.log(e,"&")
      // console.log(todo)
      return e !== todo;
    }))
    console.log(todo);
  }

  // if todos changes useEffect func update that to the loacalstorage
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <Router>
        <Header title="MyTodo List" searchBar={false} />
        <Switch>
          <Route exact path="/">
              <AddTask addTodo={addTodo} dltAll={dltAll} />
              <Todos todos={todos} key={todos.sno} onDelete={onDelete} />
        
        
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        

        <div style={{textAlign: "Center"}}>
        😊 Having good experience ! Rate us Please .
        <div>
          <div className='star'>{ratings} ⭐</div>
          <div className='btn btn-primary' onClick={RateUs}>Rate us</div>

        </div>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
