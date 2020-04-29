import React, { Component } from "react";
import "./App.css";

// Import Component
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      tasks:[
      ]
    }
  }
  componentWillMount(){
      if(localStorage && localStorage.getItem("tasks")){
        let tasks = JSON.parse(localStorage.getItem("tasks"))
        this.setState({
          tasks:tasks
        })
      }
  }
  onGenerateDate=()=>{
    let tasks = [
      {
        id:this.generateID(),
        name:'Học lập trình',
        status:true
      },
      {
        id:this.generateID(),
        name:'Đi bơi',
        status:false
      },
      {
        id:this.generateID(),
        name:'Ngủ',
        status:true
      }
    ]
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }
  s4(){
    return Math.floor((1+Math.random())*0x1000).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +this.s4() + 
    this.s4() + '-' + this.s4() + this.s4() + this.s4()
  }
  render() {
    let {tasks} = this.state //var tasks = this.state.tasks
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Component Taskform */}
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary mr-1">
              <span className="fa fa-plus mr-1"></span>Thêm Công Việc
            </button>
            <button 
            type="button" 
            className="btn btn-danger"
            onClick={this.onGenerateDate}
            >
             Generate Data
            </button>
            {/* search and sort */}
            <Control />
            {/* List */}
            <TaskList 
            tasks= {tasks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
