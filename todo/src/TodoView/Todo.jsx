import React from 'react';
import '../Containers/utils.css';
import NotChecked from '../assets/not-checked.svg';
import TaskView from '../Utils/TaskView';

function Todo(props) {
  return (<TaskView
    ImgSrc={NotChecked}
    className="leftAllign"
    text={props.task.task}
    handleComplete={props.addToCompleted}
    id={props.task.id}
  />
    // <Container fluid>
    //   <Row>
    //     <Col sm="2">
    //       <div
    //         onClick={(event) => {
    //           props.addToCompleted(event, props.task.id);
    //         }}
    //       >
    //         <img src={NotChecked} alt="" />
    //       </div>
    //     </Col>
    //     <Col sm="8">
    //       <p className="leftAllign">{props.task.task}</p>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Todo;
