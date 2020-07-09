import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Feed = () => {
  const mockedPost = {
    id: 1,
    title: 'Minha primeira postagem',
    text: 'Essa é a minha <b>primeira postagem</b>!',
    id_category: 3,
    id_user: 2,
    date: '2020-07-07 14:00:00'
  };

  return (
    <Card>
      <Card.Header>
        <Row>
          <Col>
            <p className="text-left">Postado em: {mockedPost.date}</p>
          </Col>
          <Col>
            <p className="text-right">#{mockedPost.id}</p>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={3}>
            <span>(O)</span>
            <p>posted by: {mockedPost.id_user}</p>
            <p>category:{mockedPost.id_category} </p>
          </Col>
          <Col sm={9}>
            <Card.Title>{mockedPost.title}</Card.Title>
            <Card.Text>{mockedPost.text}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Feed;
