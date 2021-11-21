import React, { Component } from 'react';

class App extends Component {
  state = { }

  deleteTodo = (index) => {
    let todos = this.state.todos;

    let originalArray = todos.filter((todo) => {
      return todo.counter !== index;
    })

    this.setState({
      todos: originalArray
    })
  }
  addTodo = (event) => {
    event.preventDefault();
    let name = this.refs.name.value;
    let description = this.refs.description.value;
    let counter = this.state.counter;

    let todo = {
      name: name,
      description: description,
      counter: counter
    }

    counter+=1;

    let todos = this.state.todos;
    todos.push(todo);


    this.setState({
      todos: todos,
      counter: counter
    });

    this.refs.todoForm.reset();

  }

  constructor(){
    super();
    this.state = {
      todos: [],
      title: 'Simple todo app',
      counter: 0
    };
  }

  render() {
    let todos = this.state.todos;
    return (
      <div>
        <h1>Todo List CRUD</h1>
        <form ref="todoForm">
          <input type="text" ref="name" placeholder="Name of the todo "/>
          <input type="text" ref="description" placeholder="description of the todo" />
          <button onClick={this.addTodo} type="submit">Add</button>
        </form>

        <pre>
          {JSON.stringify(todos)}
        </pre>

        <ul>
          {todos.map((todo) => (
             <li key={todo.counter}>{todo.name}
              <button onClick={this.deleteTodo.bind(null,todo.counter)}>Delete</button>
             </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default App;