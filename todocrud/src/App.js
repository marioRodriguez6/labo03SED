import React, { Component } from 'react';

class App extends Component {
  state = { }

  addTodo = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;

    let todo = {
      name: name,
      description: description
    }
    let todos = this.state.todos;
    todos.push(todo);

    
    this.setState({
      todos: todos
    });
  }

  constructor(){
    super();
    this.state = {
      todos: [],
      title: 'Simple todo app'
    };
  }

  render() {
    return (
      <div>
        <h1>Todo List CRUD</h1>
        <form>
          <input type="text" ref="name" placeholder="Name of the todo "/>
          <input type="text" ref="description" placeholder="description of the todo" />
          <button onClick={this.addTodo} type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;