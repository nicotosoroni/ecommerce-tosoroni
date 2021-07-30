import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const Item = ({ localItems }) => {
  return (
    <div className="card col-2">
      <img src={localItems.pictureUrl} height="150" width="150" alt=" " />
      <div>
        <h5>{localItems.nombre}</h5>
        <p>{localItems.detalle}</p>
        <p>Precio: {localItems.precio}</p>

        <Link to={`/item/${localItems.id}`}>Detalle</Link>
      </div>
    </div>
  );
};

export default Item;
