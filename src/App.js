// import './App.css';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItems } from './TodoItems';
import { TodoList } from './TodoList';
import { CreateButtom } from './CreateButtom';

const todos = [
  {text: "Hola1", completed: false},
  {text: "Hola2", completed: false},
  {text: "Hola3", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      {/* <h2>Has completado 2 de 3 cursos </h2> */}
      <TodoSearch />
      {/* <input placeholder="Cebolla" /> */}
      <TodoList>
        {todos.map(todo => (
          <TodoItems key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateButtom />
      {/* <button>+</button> */}
    </React.Fragment>
  );
}

export default App;
