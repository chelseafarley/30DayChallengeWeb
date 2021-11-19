import React, { Component } from 'react';

export class ToDo extends Component {
  static displayName = ToDo.name;

  constructor(props) {
    super(props);
    this.state = {
      message: "",
      title: "",
      description: "",
      todos: undefined,
      taskList: undefined,
      isSignedIn: false
    };
  }

  componentDidMount() {
    const element = document.getElementsByTagName("script")[0];
    const fjs = element;
    let js = document.createElement("script");
    js.id = "google-calendar";
    js.src = "https://apis.google.com/js/api.js";
    if (fjs && fjs.parentNode) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      document.head.appendChild(js);
    }
    js.onload = this.callback.bind(this)
  }

  callback() {
    window.gapi.load('client:auth2', this.initClient.bind(this));
  }

  updateSigninStatus(isSignedIn) {
    this.setState({
      isSignedIn: isSignedIn
    });
  }

  addToDo() {
    let todoPage = this;
    window.gapi.client.tasks.tasks.insert({
      tasklist: todoPage.state.taskList.id,
      resource: {
        title: todoPage.state.title,
        notes: todoPage.state.description
      }
    }).then(function (response) {
      let todo = response.result;
      let todos = todoPage.state.todos;
      todos.push(todo);

      todoPage.setState({
        todos: todos
      });
    });

    this.setState({
      title: "",
      description: ""
    })
  }

  loadToDo() {
    let todoPage = this;
    window.gapi.client.tasks.tasklists.list().then(function (response) {
      let taskList = response.result.items.find(taskList => taskList.title === "30 Day Challenge!");
      let tasks = [];
      if (taskList === undefined) {
        // If no task list exists create one
        window.gapi.client.tasks.tasklists.insert({
          title: "30 Day Challenge!"
        }).then(function (response) {
          taskList = response.result;

          todoPage.setState({
            todos: tasks,
            taskList: taskList
          });
        });
      } else {
        // If task list exists, get its tasks
        window.gapi.client.tasks.tasks.list({ tasklist: taskList.id }).then(function (response) {
          todoPage.setState({
            todos: response.result.items === undefined ? tasks : response.result.items,
            taskList: taskList
          });
        });
      }
    });
  }

  getAuthButton() {
    return !this.state.isSignedIn ?
      <button className="btn btn-primary" onClick={() => window.gapi.auth2.getAuthInstance().signIn()}>Authorize</button> :
      (
        <div>
          <input type="text" className="form-control" placeholder="Title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
          <input type="text" className="form-control" placeholder="Description" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
          <button className="btn btn-primary" onClick={this.addToDo.bind(this)}>Add Task</button>
          <button className="btn" onClick={() => window.gapi.auth2.getAuthInstance().signOut()}>Sign Out</button>
        </div>
      );
  }

  initClient() {
    let todoPage = this;
    window.gapi.client.init({
      clientId: "", //REPLACE WITH YOUR OWN CLIENT ID
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest"],
      scope: "https://www.googleapis.com/auth/tasks"
    }).then(function () {
      // Listen for sign-in state changes.
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(todoPage.updateSigninStatus.bind(todoPage));

      // Handle the initial sign-in state.
      let isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
      todoPage.updateSigninStatus(isSignedIn);
      if (isSignedIn) {
        todoPage.loadToDo();
      }
    }, function (error) {
        this.setState({
          message: error.details
        });
    });
  }

  renderTodos() {
    return (
      <div>
        <h1>My Todos</h1>
        {this.state.todos.map(todo => <div>{todo.title} - {todo.notes}</div>)}
      </div>
    );
  }

  render() {
    let loading = <p><em>Loading...</em></p>;
    let todosContent = this.state.todos === undefined
      ? loading
      : this.renderTodos();

    return (
      <div>
        <h1 id="tabelLabel">To Dos</h1>
        {this.getAuthButton()}
        {todosContent}
      </div>
    );
  }
}
