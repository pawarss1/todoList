import React, {useEffect} from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todoList.map((task, id) => {
        return (
          <div key={id}>
            <Todo task={task} addToCompleted={props.addToCompleted}/>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
