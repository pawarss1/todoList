import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todoList.map((task, index) => {
        return (
          <div key={index}>
            <Todo
              task={task}
              addToCompleted={props.addToCompleted}
              handleUpDown={props.handleUpDown}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
