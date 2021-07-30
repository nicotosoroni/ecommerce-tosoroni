import React, { useState } from 'react';
import './ItemCount.css';
import Button from 'react-bootstrap/Button';

// const ItemCount = ({ initial, stock, onAdd }) => {
//   const [items, setItems] = useState(initial);

//   const addItems = () => {
//     // console.log(items);
//     items < stock ? setItems(items + 1) : alert('No hay mas stock');
//   };

//   const subtractItems = () => {
//     // console.log(items);
//     // items < 0 ? setItems(items - 1) : alert("No puede ser menor a 0(cero)")
//     if (items !== 0) {
//       setItems(items - 1);
//     } else {
//       alert('No puede ser menor a 0(cero)');
//     }
//   };

const ItemCount = ({ min, max, producto, onAdd }) => {
  console.log(producto);
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
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
