import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import TodoList from './todolist';



var destination = document.querySelector("#container");

ReactDOM.render(
  <TodoList/>,
  
  destination
);