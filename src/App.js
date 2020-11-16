import React from 'react'
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-warpper.component';
import { Header } from './components/header/header.component';
import {TodoList} from './components/todo-list/todo-list.component'

class App extends React.Component {

  state = {
    tasks : ['task1','task2','task 3', 'task4']
  }

  render() {
    return (
      <div className="App">
        <AppWrapper>
            <Header numberTodos={this.state.tasks.length}></Header>
            <TodoList tasks={this.state.tasks}></TodoList>
        </AppWrapper>
      </div>
    );
  }
  
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