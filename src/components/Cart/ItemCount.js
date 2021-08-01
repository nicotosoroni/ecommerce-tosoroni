import React, { useState } from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ min, max, producto, onAdd }) => {
  const [minusDisabled, setMinusDisabled] = useState(false);
  const [addDisabled, setAddDisabled] = useState(false);
  const [count, setCount] = useState(min);

  const handleChangeAdd = () => {
    if (count < max) {
      setCount(count + 1);
      setMinusDisabled(false);
    } else if (count === max) {
      setAddDisabled(true);
    } else {
      setAddDisabled(false);
    }
  };

  const handleChangeMinus = () => {
    if (count > min) {
      setCount(count - 1);
      setAddDisabled(false);
    } else if (count === min) {
      setMinusDisabled(true);
    } else setMinusDisabled(false);
  };

  return (
    <div id={`${producto.id}Count`}>
      <div className="container counter mt-3">
        <div className="d-flex align-items-center justify-content-center mb-1">
          <Button
            className="d-inline"
            type="button"
            onClick={(e) => handleChangeMinus()}
            variant="light"
            disabled={minusDisabled}
          >
            <i className="far fa-minus-square counterButton"></i>
          </Button>
          <span className="counterAmount">{count}</span>
          <Button
            className="d-inline"
            type="button"
            variant="light"
            disabled={addDisabled}
            onClick={(e) => handleChangeAdd()}
          >
            <i className="far fa-plus-square counterButton"></i>
          </Button>
        </div>
        <button
          id={`${producto.id}Agregar`}
          className="btn btn-secondary w-110"
          onClick={() => onAdd(count)}
          disabled={
            producto.stock === 0 || isNaN(producto.stock) ? true : false
          }
        >
          {producto.stock === 0 || isNaN(producto.stock)
            ? 'SIN STOCK'
            : 'AGREGAR AL CARRITO'}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
