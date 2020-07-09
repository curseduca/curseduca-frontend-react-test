import React from 'react';
import {
  ProgressBar, Row, Col, Container
} from 'react-bootstrap';

const Loading = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col className="col-6 m-2">
        <ProgressBar
          animated
          striped
          variant="sucess"
          now={100}
        />
      </Col>
    </Row>
  </Container>
);

export default Loading;
