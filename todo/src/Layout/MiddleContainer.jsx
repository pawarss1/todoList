import React from 'react';
import './layout.css';
import { title } from '../globalData';
import TaskBar from '../Containers/TaskBar';

function MiddleContainer() {
  return (
    <div className="layout">
      <h1 className="title">{title}</h1>
      <TaskBar />
    </div>
  );
}

export default MiddleContainer;
