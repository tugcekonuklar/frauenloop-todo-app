import React from 'react'
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-warpper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component'
import {SubmitForm} from './components/submit-form/submit-form.component'

class App extends React.Component {

  state = {
    tasks: ['task1', 'task2', 'task3', 'task4']
  }

  handleDelete = (index) =>{
    const newArr = [...this.state.tasks];
    newArr.splice(index,1);
    this.setState({tasks: newArr});
  }

  handleSubmit = (content) => {
    this.setState({tasks: [...this.state.tasks,content]})
  }

  render() {
    return (
      <div className="App">
        <AppWrapper>
          <Header numberTodos={this.state.tasks.length}></Header>
          <SubmitForm onCreate={this.handleSubmit}></SubmitForm>
          <TodoList tasks={this.state.tasks} onDeleteItem={this.handleDelete}></TodoList>
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