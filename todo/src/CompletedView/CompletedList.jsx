import React, { useEffect, useState } from 'react';
import '../Containers/utils.css';
import CompletedTask from './CompletedTask';

function CompletedList(props) {
  return (
    <div>
      {props.completedList.map((task, id) => {
        return (
          <div key={id}>
            <CompletedTask task={task}/>
          </div>
        );
      })}
    </div>
  );
}

export default CompletedList;
