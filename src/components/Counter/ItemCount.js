import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [items, setItems] = useState(initial);

  const addItems = () => {
    console.log(items);
    items < stock ? setItems(items + 1) : alert('No hay mas stock');
  };

  const subtractItems = () => {
    console.log(items);
    // items < 0 ? setItems(items - 1) : alert("No puede ser menor a 0(cero)")
    if (items !== 0) {
      setItems(items - 1);
    } else {
      alert('No puede ser menor a 0(cero)');
    }
  };

  return (
    <div className="container counter mt-3">
      <div className="d-flex align-items-center justify-content-center mb-1">
        <i
          className="far fa-minus-square counterButton"
          onClick={subtractItems}
        ></i>
        <span className="counterAmount">{items}</span>
        <i className="far fa-plus-square counterButton" onClick={addItems}></i>
      </div>
      <button className="btn btn-secondary w-110" onClick={() => onAdd(items)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
