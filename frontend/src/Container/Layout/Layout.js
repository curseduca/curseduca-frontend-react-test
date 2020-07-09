import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => (
  <Container>
    <Row>
      <Col>
        {children}
      </Col>
    </Row>
  </Container>
);

export default Layout;
