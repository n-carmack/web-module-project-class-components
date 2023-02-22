import React from 'react'


export default class Form extends React.Component {
  constructor() {
    super();
    this.state= {
      input: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props);
    this.props.handleAdd(this.state.input);
  }
  handleChange = (e) => {
    this.setState({
      ...this.setState,
      input: e.target.value
    })
  }
  handleClear = () => {
    this.setState({
      ...this.state,  
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false);
      })
    });
  }
  render() {
    return (
      <div>
        <form>
          <input onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Add todo</button>
          <button onClick={this.props.handleClear}>Clear Completed</button>
        </form>
      </div>
    )
  }
}
