import React from 'react';
import '../Containers/utils.css';
import Checked from '../assets/checked.svg';
import TaskView from '../Utils/TaskView';

function CompletedTask(props) {
  return (
    <TaskView
      ImgSrc={Checked}
      className="completedText"
      text={props.task.task}
      id={props.task.id}
    />
  );
}

export default CompletedTask;
