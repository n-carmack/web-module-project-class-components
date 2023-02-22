import React from 'react';

import TodoList from './TodoList';

import Form from './Form';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  
  handleAdd = (task) => {
    
    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleTaskClick = (selectedID) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === selectedID){
          return{...todo,
          completed: !todo.completed}
        } return todo

        
      })
    })
  }
  render() {
    const{ todos }= this.state;
    return (
      <div>
        <TodoList handleTaskClick={this.handleTaskClick}  todos={todos}></TodoList>
        <Form handleAdd={this.handleAdd} handleClear={this.handleClear}/>
      </div>
    )
  }
}
