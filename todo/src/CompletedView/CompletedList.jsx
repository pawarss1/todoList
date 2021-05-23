import React from 'react';
import '../Containers/utils.css';
import CompletedTask from './CompletedTask';

function CompletedList(props) {
  return (
    <div>
      {props.completedList.map((task, index) => {
        return (
          <div key={index}>
            <CompletedTask
              task={task}
              handleUpDown={props.handleUpDown}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CompletedList;
