import React from 'react';
import '../Containers/utils.css';
import NotChecked from '../assets/not-checked.svg';
import TaskView from '../Utils/TaskView';

function Todo(props) {
  return (
    <TaskView
      ImgSrc={NotChecked}
      className="leftAllign"
      text={props.task.task}
      handleComplete={props.addToCompleted}
      id={props.task.id}
      handleUpDown={props.handleUpDown}
      taskType="TODO"
      index={props.index}
    />
  );
}

export default Todo;
