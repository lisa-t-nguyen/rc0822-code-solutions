import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.componentDidMount = this.componentDidMount(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      });
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        let shallowCopy = this.state.todos.slice();
        shallowCopy = shallowCopy.concat(newTodo);
        this.setState({ todos: shallowCopy });
      });

  }

  toggleCompleted(todoId) {
    for (let i = 0; i < this.state.todos.length; i++) {
      if (todoId === this.state.todos[i].todoId) {
        const completed = this.state.todos[i].isCompleted;
        const newObject = {
          isCompleted: !completed
        };
        fetch(`/api/todos/${todoId}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newObject)
        })
          .then(response => response.json())
          .then(data => {
            const shallowCopy = this.state.todos.slice();
            shallowCopy[i] = data;
            this.setState({ todos: shallowCopy });
          });
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
