import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      createBtn: true,
      moveBtn: true,
      backBtn: true,
      deleteBtn: true,
      success: false,
      taskSelected: '',
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }


  newTask = (e) => {
    this.setState({task: e.target.value, createBtn: false});

  }
  
  createNewTask = () => {
    const {task} = this.state;
    let tasks = [...this.state.tasks, {name: task, stage: 0}];
    
    this.setState({tasks, task: '', createBtn: true})
  }

  selectTask = (task) => {
    this.setState({
      taskSelected: task, 
      moveBtn:false,
      backBtn: false,
      deleteBtn: false,
    });
  


  }

  deleteTask = (element) => {
      const tasksList = this.state.tasks;
      const tasks = tasksList.filter(task => {
       return task.name !== element.name;

      })

      this.setState({
        tasks, 
        taskSelected: '',
        moveBtn:true,
        backBtn: true,
        deleteBtn: true,
      });
  }

  moveForward = (element) => {
    const tasksEle = this.state.tasks;
    
    let tasks = tasksEle.filter(task => {
      if(task.name === element.name && task.stage !== 3){
        task.stage += 1;
        task.stage === 3 ?  this.setState({moveBtn: true, backBtn:false}) : this.setState({backBtn: false})

        
      }
  
     return  [...this.state.tasks, {task}];
    })

    this.setState({tasks});
  }

  moveBack = (element) => {
    const tasksEle = this.state.tasks;
    
    let tasks = tasksEle.filter(task => {
      if(task.name === element.name && task.stage !== 0){

         task.stage -= 1;
         task.stage === 0 ?  this.setState({moveBtn: false, backBtn: true}) : this.setState({moveBtn: false})

      }
  
     return  [...this.state.tasks, {task}];
    })
    this.setState({tasks});

  }

  stagesTasks = (tasks) => {
    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
    return stagesTasks;

  }

  render() {
    const { tasks, taskSelected, moveBtn, backBtn, deleteBtn, task, createBtn} = this.state;

  
    return (
      <div className="App">
        <Controls 
          createBtn={createBtn}
          initialValue={task}
          taskName={this.newTask}
          moveBtn={moveBtn}
          backBtn={backBtn}
          deleteBtn={deleteBtn}
          deleteTask={this.deleteTask}
          moveForward={this.moveForward}
          moveBack={this.moveBack}
          taskSelected={taskSelected} 
          createTask={this.createNewTask}/>
        <Board
          selectTask={this.selectTask}
          stagesTasks={this.stagesTasks(tasks)}
          stagesNames={this.stagesNames}
        />
      </div>
    );
  }
}

export default App;
