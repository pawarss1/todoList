import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './utils.css';
import { errMsgGlobal, todoTitle, completedTitle } from '../globalData';
import TodoList from './TodoList';
import CompletedList from './CompletedList';

function TaskBar() {
  const [taskValue, setTaskValue] = useState('');
  const [inputVisibleFlag, setInputVisibleFlag] = useState(false);
  const [errFlag, setErr] = useState(false);
  const [todoList, setTodoList] = useState([
    'zsca casd ads',
    'asd sda',
    'bsf asd',
  ]);
  const [completedList, setCompletedList] = useState([
    'zsca casd ads',
    'asd sda',
    'vbasda',
  ]);

  const sort = (list) => {
    let bufferList = [...list];
    return bufferList.sort();
  };

  const handleSort = () => {
    setTodoList(sort(todoList));
    setCompletedList(sort(completedList));
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > 20) {
      setErr(true);
      return;
    }
    setErr(false);
    setTaskValue(event.target.value);
  };
  const handleClick = () => {
    setInputVisibleFlag(!inputVisibleFlag);
  };
  return (
    <Container fluid>
      <Row>
        <Col sm="8">
          {inputVisibleFlag === true ? (
            <input
              className="btn"
              onChange={handleInputChange}
              value={taskValue}
            ></input>
          ) : (
            <button className="btn" onClick={handleClick}>
              Add Task
            </button>
          )}
        </Col>
        <Col sm="2">
          <button>Add</button>
        </Col>
        <Col sm="2">
          <button onClick={handleSort}>Sort</button>
        </Col>
      </Row>
      <Row>{errFlag && <p>{errMsgGlobal}</p>}</Row>
      <Row>
        <Col>
          <h1 className="titleInside">{todoTitle}</h1>
          <TodoList todoList={todoList} />
        </Col>
        <Col>
          <h1 className="titleInside">{completedTitle}</h1>
          <CompletedList completedList={completedList} />
        </Col>
      </Row>
    </Container>
  );
}

export default TaskBar;
