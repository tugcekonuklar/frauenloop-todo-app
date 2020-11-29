import React, { useState} from "react";
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-warpper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component'
import {SubmitForm} from './components/submit-form/submit-form.component'

function App() {
  const [tasks, setTasks] = useState(['task1', 'task2', 'task3', 'task4']);

  function handleDelete (index){
    const newArr = [...tasks];
    newArr.splice(index,1);
    setTasks(newArr);
  }

  function handleSubmit (content) {
    setTasks([...tasks,content]);
  }

    return (
      <div className="App">
        <AppWrapper>
          <Header numberTodos={tasks.length}></Header>
          <SubmitForm onCreate={handleSubmit}></SubmitForm>
          <TodoList tasks={tasks} onDeleteItem={handleDelete}></TodoList>
        </AppWrapper>
      </div>
    );
  }

export default App;




{/* 
      <AppWrapper>
        <Header></Header>
        <SubmitForm></SubmitForm>
        <TodoList>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
          <Todo></Todo>
        </TodoList>
      </AppWrapper> */}