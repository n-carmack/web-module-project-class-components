import React from 'react'

class Todo extends React.Component {
  handleClick = () => {
    this.props.handleTaskClick(this.props.todo.id);
  }
  render(){
    return(<li onClick={this.handleClick} >{this.props.todo.name} {this.props.todo.completed?<span>*Complete*</span> : <span></span>}</li>);
  };

}
export default Todo;  