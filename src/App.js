import React, { useState, useEffect } from 'react'
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-warpper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component'
import { SubmitForm } from './components/submit-form/submit-form.component'

function App() {

  const [tasks, setTasks] = useState([]);

  const handleDelete = (index) => {
    const newArr = [...tasks];
    newArr.splice(index, 1);
    setTasks(newArr);
  }

  // TODO: try to call POST endpoint to save task on DB in backend side.
  const handleSubmit = (task) => {
    setTasks([...tasks, task]);
  }


  useEffect(() => {
    fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
        .then(response => response.json())
        .then(todos => setTasks(todos));
  },[]);


  //  This was the class implementation, in hooks we will use useEffect() hook method. 
  // This method you can use for lifecycle methods, you can think of useEffect Hook as 
  // componentDidMount, componentDidUpdate, and componentWillUnmount combined.
  //
  // componentDidMount() {
  //   fetch("https://frauenloop-todo-service.herokuapp.com/api/todos")
  //     .then(response => response.json())
  //     .then(todos => this.setState({ tasks: todos }));
  // }

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