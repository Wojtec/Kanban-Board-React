import React, { Component } from 'react';

class Controls extends Component {
  render() {
    const { 
       createBtn, 
       initialValue,
       taskName,
       deleteTask, 
       createTask,
       taskSelected,
       moveForward, 
       moveBtn, 
       backBtn, 
       deleteBtn, 
       moveBack} = this.props;

    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex' }}>
        <input
            type="text"
            name="newTask"
            value={initialValue}
            placeholder="New task name"
            style={{ fontSize: '1rem' }}
            data-testid="new-task-name-input"
            onChange={taskName}
          />          
          <button
            style={{ marginLeft: '1rem' }}
            disabled= {createBtn}
            data-testid="create-task-btn"
            onClick={() => createTask()}
          >
            Create
          </button>
        </div>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            value={taskSelected.name || ''}
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
          />
          <button
            style={{ marginLeft: '1rem' }}
            disabled={backBtn}
            onClick={()=> moveBack(taskSelected)}
            data-testid="move-back-btn"
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            disabled={moveBtn}
            onClick={() => moveForward(taskSelected)}
          >
            Move forward
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            disabled={deleteBtn}
            data-testid="delete-btn"
            onClick={()=> deleteTask(taskSelected)}
          >
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
