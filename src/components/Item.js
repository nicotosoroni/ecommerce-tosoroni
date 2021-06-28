import React from 'react';
import ItemCount from './ItemCount';

const Item = ({ element }) => {
  const onAdd = (amount) => {
    alert(`Compraste ${amount} productos`);
  };
  return (
    <div className="card col-2">
      <img src="" alt=" " />
      <div>
        <h5>{element.nombre}</h5>
        <p>{element.detalle}</p>
        <p>Precio: {element.precio}</p>
        <ItemCount initial={1} stock={element.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Item;
