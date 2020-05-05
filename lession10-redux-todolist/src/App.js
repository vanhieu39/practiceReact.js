import React, { Component } from "react";
import "./App.css";

// Import Component
import TaskForm from "./components/TaskForm";
import Control from "./components/TaskControl";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDislayForm: false,
      taskEditing: null,
      filter: {
        name: "",
        status: -1,
      },
      keyword:'',
     sortBy:'name',
     sortValue:1
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x1000)
      .toString(16)
      .substring(1);
  }
  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }
  onToggleForm = () => {
    if (this.state.isDislayForm && this.state.taskEditing !== null) {
      this.setState({
        isDislayForm: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDislayForm: !this.state.isDislayForm,
        taskEditing: null,
      });
    }
  };
  onCloseForm = () => {
    this.setState({
      isDislayForm: false,
    });
  };
  onSubmit = (data) => {
    let { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };
  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };
  onShowForm = () => {
    this.setState({
      isDislayForm: true,
    });
  };
  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };
  onSearch=(keyword)=>{
    this.setState({
      keyword:keyword
    })
  }
  onSort = (sortBy,sortValue) =>{
    
    this.setState({
     sortBy:sortBy,
     sortValue:sortValue
    })
    
  }
   render() {
    let { 
      tasks, 
      isDislayForm, 
      taskEditing, 
      filter,
      keyword,
      sortBy,
      sortValue
    } = this.state; //var tasks = this.state.tasks
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        // console.log(filter.status)
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1?true:false);
        }
      });
    }
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if(sortBy === 'name'){
      tasks.sort((a,b)=>{
        if(a.name > b.name) return sortValue
        else if(a.name <b.name) return -sortValue
        else return 0
      })
    }else{
      tasks.sort((a,b)=>{
        if(a.status > b.status) return -sortValue
        else if(a.status <b.status) return sortValue
        else return 0
      })
    }
    let elmTaskForm = isDislayForm ? (
      <TaskForm
        onSubmit={this.onSubmit}
        onCloseForm={this.onCloseForm}
        task={taskEditing}
      />
    ) : (
      ""
    );
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div
            className={
              isDislayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""
            }
          >
            {elmTaskForm}
          </div>
          <div
            className={
              isDislayForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button
              type="button"
              className="btn btn-primary mr-1"
              onClick={this.onToggleForm}
            >
              <span className="fa fa-plus mr-1"></span>Thêm Công Việc
            </button>
            {/* search and sort */}
            <Control 
              onSearch = {this.onSearch}
              onSort = {this.onSort}
              sortBy={sortBy}
              sortValue ={sortValue}
            />
            {/* List */}
            <TaskList
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              tasks={tasks}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
