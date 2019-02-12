import React, { Component } from 'react';
import './App.css';
import ClassTodo from './TodoClass';
import FnTodo from './TodoFunction';
 
const TODOS = [
  {
    id: 1,
    description: 'Buy beer'
  },
  {
    id: 2,
    description: 'Buy food'
  },
  {
    id: 3,
    checked: true,
    description: 'Feed the cats'
  },
  {
    id: 4,
    description: 'Random text 1'
  },
  {
    id: 5,
    description: 'Random text 2'
  },
  {
    id: 6,
    description: 'Random text 3'
  }
];
 
class App extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      todos: [],
    }
  }
 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ todos: TODOS })
    }, 2000);
  }
 
  renderTodos(todos, TodoComponent) {
    return todos.map(todo => <TodoComponent key={todo.id} {...todo} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />)
  }
 
  createTodo = (description) => {
    const { todos } = this.state;
 
    todos.push({
      description,
      id: todos.length + 1
    });
 
    this.setState({ todos });
  }
 
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(x => x.id !== id);
    this.setState({ todos });
  }
 
  updateTodo = (checked, id) => {
    const todos = this.state.todos.map(x => {
      if (id === x.id) {
        x.checked = checked;
      }
 
      return x;
    });
 
    this.setState({ todos });
  }
 
  render() {
    const { todos } = this.state;
 
    return (
      <div>
        <div className="app">
          <div className="todo-list">
            <h2>TODO list</h2>
            {this.renderTodos(todos, FnTodo)}
            {this.renderTodos(todos, ClassTodo)}
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;
