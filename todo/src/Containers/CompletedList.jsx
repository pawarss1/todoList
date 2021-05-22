import React, {useEffect, useState} from 'react';
import './utils.css';

function CompletedList(props) {
  useEffect(() => {
    console.log(props.completedList);
  }, [props.completedList])
  return (
    <div>
      {props.completedList.map((task, id) => {
        return <p key={id}>{task}</p>;
      })}
    </div>
  );
}

export default CompletedList;
