import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
export const BotonFinalizar = ({ confirmEmail, email, newId }) => {
  const { productosAgregados } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  async function generarLinkDePago() {
    handleShow();
    const productosLinkPago = productosAgregados.map((el) => ({
      title: el.titulo,
      category_id: el.id,
      quantity: Number(el.cantidad),
      currency_id: 'ARS',
      unit_price: Number(el.precio),
    }));
    const response = await fetch(
      'https://api.mercadopago.com/checkout/preferences',
      {
        method: 'POST',
        headers: {
          Authorization:
            'Bearer TEST-3184992409945438-052000-10633f2ed0872603dcc4509d25209bf7-608112048',
        },
        body: JSON.stringify({
          items: productosLinkPago,
        }),
      }
    );
    const data = await response.json();
    window.open(data.init_point, '_blank');
    console.log(JSON.stringify(productosLinkPago));
  }
  return (
    <div>
      <Button
        variant="outline-warning"
        type="submit"
        onClick={() => generarLinkDePago()}
        disabled={confirmEmail === email ? false : true}
      >
        Finalizar
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Compra finalizada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Te dirigiremos a la aplicación de Mercado Pago para que finalices tu
          compra!
        </Modal.Body>
        <Modal.Body>ID compra: {newId}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
