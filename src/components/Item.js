import React from 'react';
import ItemCount from './ItemCount';
import { NavLink } from 'react-router-dom';

const Item = ({ element }) => {
  const onAdd = (amount) => {
    amount === 1
      ? alert(`Agregaste ${amount} unidad al carrito`)
      : alert(`Agregaste ${amount} unidades al carrito`);
  };
  return (
    <div className="card col-2">
      <img src={element.pictureUrl} height="150" width="150" alt=" " />
      <div>
        <h5>{element.nombre}</h5>
        <p>{element.detalle}</p>
        <p>Precio: {element.precio}</p>
        <ItemCount initial={1} stock={element.stock} onAdd={onAdd} />
        <NavLink to={`/list/${element.id}`}>Detalle</NavLink>
      </div>
    </div>
  );
};

export default Item;
