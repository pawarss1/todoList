import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Containers/utils.css';

function TaskView(props) {
  return (
    <Container fluid>
      <Row>
        <Col sm="2">
          <div
            onClick={
              props.handleComplete !== undefined
                ? (evt) => props.handleComplete(evt, props.id)
                : null
            }
          >
            <img src={props.ImgSrc} alt="" />
          </div>
        </Col>
        <Col sm="8">
          <p className={props.className}>{props.text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default TaskView;
