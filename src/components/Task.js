import React from 'react';

const taskNameToId = name => {
  return `task-${name}`;
}

const Task = ({ name, selectTask, task }) => {
  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        margin: '1rem 1rem 0 1rem' }}
      data-testid={taskNameToId(name)}
      onClick={() => selectTask(task)}
    >
      {name}
    </div>
  );
}

export default Task;
