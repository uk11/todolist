import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./component/Template";
import Header from "./component/Header";
import List from "./component/List";
import Create from "./component/Create";

let nextId = 4;

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: white
  }`

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '일어나기',
      checked: true,
    },
    {
      id: 2,
      text: '째깍이 깨우기',
      checked: false,
    },
    {
      id: 3,
      text: '알고리즘 공부하기',
      checked: false,
    },
  ]);

  // submit
  const todoCreate = text => {
    const todo = {
      id: nextId,
      text,
      check: false
    }
    setTodos(todos => todos.concat(todo))  // concat으로상태 불변성 지키기
    nextId++
  }

  // checked
  const onCheck = id => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  }

  // remove
  const onRemove = id => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <>
      <GlobalStyle />

      <Template>
        <Header todos={todos}/>
        <List todos={todos} onCheck={onCheck} onRemove={onRemove} />
        <Create todoCreate={todoCreate} />
      </Template>
    </>
  );
}

export default App;
