import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render(){
    return(<ul>
      {
      this.props.todos.map(todo => {
        return(<Todo key={todo.id} handleTaskClick={this.props.handleTaskClick} todo={todo}></Todo>);
      })}
    </ul>)
  }
}
