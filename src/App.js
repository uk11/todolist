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
    background-color: powderblue;
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
      checked: true,
    },
    {
      id: 3,
      text: '알고리즘 공부하기',
      checked: false,
    },
  ]);

  // submit으로 item 추가
  const todoCreate = (text) => {
    const todo = {
      id: nextId,
      text,
      check: false
    }
    setTodos(todos => todos.concat(todo))  // concat으로상태 불변성 지키기
    nextId++
  }

  const onCheck = (id) => {
    setTodos(todos => todos.map(todo => (todo.id === id ? {...todo, checked: !todo.checked} : todo)))
  }

  return (
    <>
      <GlobalStyle />

      <Template>
        <Header todoLen={todos.length}/>
        <List todos={todos} />
        <Create todoCreate={todoCreate} />
      </Template>
    </>
  );
}

export default App;
