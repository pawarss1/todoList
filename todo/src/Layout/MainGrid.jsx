import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MiddleContainer from './MiddleContainer';

function MainGrid() {
  return (
    <Container fluid>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8">
          <MiddleContainer />
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Container>
  );
}

export default MainGrid;
