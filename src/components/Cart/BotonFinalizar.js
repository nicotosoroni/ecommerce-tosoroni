import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export const BotonFinalizar = () => {
  return (
    <div>
      <Button variant="outline-warning" type="submit">
        Finalizar
      </Button>

      <Modal backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Compra finalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Te dirigiremos a la aplicación de Mercado Pago para que finalices tu
          compra!:){' '}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
