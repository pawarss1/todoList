import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './utils.css';
import {
  errMsgGlobal,
  todoTitle,
  completedTitle,
  errMsgEmpty,
} from '../globalData';
import TodoList from '../TodoView/TodoList';
import CompletedList from '../CompletedView/CompletedList';
import { useSelector } from 'react-redux';
import { tasksDataSlice } from '../Store/tasksDataSlice';
import { useDispatch } from 'react-redux';
import AddBlue from '../assets/add-blue.svg';

function TaskBar() {
  const tasksGlobal = useSelector((globalStore) => globalStore.tasks);
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState('');
  const [inputVisibleFlag, setInputVisibleFlag] = useState(false);
  const [errFlag, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  const addToCompleted = (event, taskId) => {
    const payload = {
      taskId: taskId,
    };
    dispatch(tasksDataSlice.actions.markTaskCompleted(payload));
  };

  const seggregateTodos = (taskList) => {
    let tempCompletedList = [];
    let tempTodoList = [];
    taskList.forEach((task) => {
      task.completed === true
        ? tempCompletedList.push(task)
        : tempTodoList.push(task);
    });
    setTodoList(tempTodoList);
    setCompletedList(tempCompletedList);
  };

  useEffect(() => {
    seggregateTodos(tasksGlobal);
  }, [tasksGlobal]);

  const sort = (list) => {
    let bufferList = [...list];
    bufferList.sort(function (a, b) {
      if (a.task > b.task) return 1;
      if (a.task < b.task) return -1;
      return 0;
    });
    return bufferList;
  };

  const handleSort = () => {
    setTodoList(sort(todoList));
    setCompletedList(sort(completedList));
  };

  const handleInputChange = (event) => {
    if (event.target.value.length > 20) {
      setErr(true);
      setErrMsg(errMsgGlobal);
      return;
    }
    setErr(false);
    setErrMsg('');
    setTaskValue(event.target.value);
  };
  const handleClick = () => {
    setInputVisibleFlag(!inputVisibleFlag);
  };
  const addTask = () => {
    if (taskValue.length === 0) {
      setErr(true);
      setErrMsg(errMsgEmpty);
      return;
    }
    setErr(false);
    setErrMsg('');
    const payload = {
      id: todoList.length + completedList.length + 1,
      task: taskValue,
      completed: false,
    };
    setTaskValue('');
    dispatch(tasksDataSlice.actions.addNewTask(payload));
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
              <img src={AddBlue} alt="" className="imgCls"></img>
              <p className="textCls">Add Task</p>
            </button>
          )}
        </Col>
        <Col sm="2">
          <button onClick={addTask}>Add</button>
        </Col>
        <Col sm="2">
          <button onClick={handleSort}>Sort</button>
        </Col>
      </Row>
      <Row>{errFlag && <p className="errCls">{errMsg}</p>}</Row>
      <Row>
        <Col>
          <h1 className="titleInside">{todoTitle}</h1>
          <TodoList todoList={todoList} addToCompleted={addToCompleted} />
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
