import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ producto }) => {
  console.log(producto);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={producto.pictureUrl}
        style={{ height: '10rem', width: '10rem' }}
        className="cardEstilo"
        width="100"
      />
      <Card.Body>
        <Card.Title className="tituloCard">{producto.nombre}</Card.Title>
        <Card.Text className="precio">${producto.precio}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button className="botonVerMas">
          <Link
            to={`/item/${producto.nombre}`}
            className="botonVerMasLink-items"
          >
            Ver más
          </Link>
        </button>
      </Card.Footer>
    </Card>
  );
};
