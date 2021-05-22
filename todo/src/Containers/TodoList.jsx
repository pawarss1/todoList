import React from 'react';

function TodoList(props) {
  return (
    <div>
      {props.todoList.map((task, id) => {
        return <p key={id}>{task}</p>;
      })}
    </div>
  );
}

export default TodoList;
