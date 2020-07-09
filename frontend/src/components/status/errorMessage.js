import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ErrorMessage = ({ data }) => {
  const [show, setShow] = useState(true);
  const { message, status } = data;

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
    >
      <Modal.Header closeButton show>
        <Modal.Title>Algo deu errado!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Código do erro: {status}</p>
        <p> Mensagem: {message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          onClick={handleClose}
        >Retornar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorMessage;
