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
import AddGrey from '../assets/add-gray.svg';

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
    setInputVisibleFlag(false);
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

  const arrangeUtil = (list, taskId, operationType, index) => {
    const updatedList = [...list];
    if (operationType === 'UP') {
      if (index === 0) {
        return updatedList;
      }
      for (let i = 1; i < updatedList.length; i++) {
        if (updatedList[i].id === taskId && index === i) {
          //Swap the Tasks.
          const temp = updatedList[i];
          updatedList[i] = updatedList[i - 1];
          updatedList[i - 1] = temp;
          break;
        }
      }
      return updatedList;
    } else {
      if (index === list.length - 1) {
        return updatedList;
      }
      for (let i = 0; i < updatedList.length - 1; i++) {
        if (updatedList[i].id === taskId && index === i) {
          //Swap the Tasks.
          const temp = updatedList[i];
          updatedList[i] = updatedList[i + 1];
          updatedList[i + 1] = temp;
          break;
        }
      }
      return updatedList;
    }
  };
  const reArrangeTODOList = (operationType, taskId, index) => {
    const updatedList = arrangeUtil(todoList, taskId, operationType, index);
    setTodoList(updatedList);
  };

  const reArrangeCompletedList = (operationType, taskId, index) => {
    const updatedList = arrangeUtil(
      completedList,
      taskId,
      operationType,
      index
    );
    setCompletedList(updatedList);
  };

  const handleUpDown = (taskType, operationType, taskId, index) => {
    taskType === 'TODO'
      ? reArrangeTODOList(operationType, taskId, index)
      : reArrangeCompletedList(operationType, taskId, index);
  };

  return (
    <Container fluid>
      <Row>
        <Col sm="8">
          {inputVisibleFlag === true ? (
            <div>
              <img src={AddGrey} alt="" className="imgCls"></img>
              <input
                className="btn"
                style={{ border: '2px solid black' }}
                onChange={handleInputChange}
                value={taskValue}
              ></input>
            </div>
          ) : (
            <button
              className="btn"
              style={{ backgroundColor: '#FFF', border: '1px solid #E2E7EC' }}
              onClick={handleClick}
            >
              <img src={AddBlue} alt="" className="imgCls"></img>
              <p className="textCls">Add Task</p>
            </button>
          )}
        </Col>
        <Col sm="2">
          <button onClick={addTask} className="utilityBtnCls">
            Add
          </button>
        </Col>
        <Col sm="2">
          <button onClick={handleSort} className="utilityBtnCls">
            Sort
          </button>
        </Col>
      </Row>
      <Row>{errFlag && <p className="errCls">{errMsg}</p>}</Row>
      <Row>
        <Col>
          <br />
          <h1 className="titleInside">{todoTitle}</h1>
          <TodoList
            todoList={todoList}
            addToCompleted={addToCompleted}
            handleUpDown={handleUpDown}
          />
        </Col>
        <Col>
          <br />
          <h1 className="titleInside">{completedTitle}</h1>
          <CompletedList
            completedList={completedList}
            handleUpDown={handleUpDown}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default TaskBar;
