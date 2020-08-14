import React, { Component } from 'react';

import Stage from './Stage';

class Board extends Component{
  render(){
    const { stagesNames, stagesTasks, selectTask } = this.props;
  return (
    <div>
      <h1>Kanban board</h1>
      <div style={{
        display: 'flex',
      }}>
        {stagesTasks.map((tasks, idx) => (
          <Stage
            stageId={idx}
            key={stagesNames[idx]}
            name={stagesNames[idx]}
            tasks={tasks}
            selectTask={selectTask}
          />
        ))}
      </div>
    </div>
  );
}
}

export default Board;
