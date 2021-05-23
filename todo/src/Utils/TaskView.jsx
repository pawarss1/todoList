import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Containers/utils.css';
import UpArrow from '../assets/up-arrow.svg';
import downArrow from '../assets/down-arrow.png';

function TaskView(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm="3">
          <div className="orderingCls">
            <img
              src={UpArrow}
              alt=""
              className="arrows"
              onClick={(evt) => props.handleUpDown(props.taskType, 'UP', props.id, props.index)}
            ></img>
            <img
              src={downArrow}
              alt=""
              className="arrows"
              onClick={(evt) => props.handleUpDown(props.taskType, 'DOWN', props.id, props.index)}
            ></img>
            <div
              onClick={
                props.handleComplete !== undefined
                  ? (evt) => props.handleComplete(evt, props.id)
                  : null
              }
            >
              <img src={props.ImgSrc} alt="" className="hoverCls" />
            </div>
          </div>
        </Col>
        <Col sm="9">
          <p className={props.className}>{props.text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskView;
