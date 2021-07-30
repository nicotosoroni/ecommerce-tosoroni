import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
const Cart = () => {
  const history = useHistory();
  const { productosAgregados, setProductosAgregados } = useContext(CartContext);

  function eliminarProducto(itemId) {
    const exist = productosAgregados.find((el) => el.id === itemId);
    if (exist.cantidad === 1) {
      setProductosAgregados(
        productosAgregados.filter((el) => el.id !== itemId)
      );
    } else {
      setProductosAgregados(
        productosAgregados.map((el) =>
          el.id === itemId ? { ...exist, cantidad: exist.cantidad - 1 } : el
        )
      );
    }
  }

  function vaciarCarrito() {
    let productosAgregados = [];
    setProductosAgregados(productosAgregados);
  }

  const totalPrice = productosAgregados.reduce(
    (acc, el) => acc + el.precio * el.cantidad,
    0
  );

  return (
    <div>
      <h2>CARRITO</h2>
      <ListGroup>
        <div>
          {productosAgregados.length === 0 && (
            <div>
              El carrito esta vacio{' '}
              <Button variant="outline-info" onClick={(e) => history.push('/')}>
                Volver al inicio
              </Button>{' '}
            </div>
          )}
        </div>
        {productosAgregados.map((producto, i) => (
          <ListGroup.Item variant="dark" key={i}>
            {producto.titulo} Cantidad:{producto.cantidad} Total:
            {producto.precio * producto.cantidad}
            <button
              className="boton-eliminar"
              onClick={() => eliminarProducto(producto.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </ListGroup.Item>
        ))}
        <ListGroup.Item variant="warning">Total:{totalPrice}</ListGroup.Item>
      </ListGroup>
      <Button variant="outline-danger" onClick={(e) => vaciarCarrito()}>
        Borrar Todo
      </Button>{' '}
      <Button variant="outline-warning">Finalizar</Button>{' '}
    </div>
  );
};

export default Cart;
