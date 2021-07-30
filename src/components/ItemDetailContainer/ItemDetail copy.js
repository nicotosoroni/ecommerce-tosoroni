import React, { useState } from 'react';
import ItemCount from '../Cart/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ detailProducto }) => {
  const [isClicked, setIsClicked] = useState(false);
  const onAdd = (cantidad) => {
    setIsClicked(true);
  };
  return (
    <div className="card mb-3 itemdetailcontainer">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={detailProducto.pictureUrl}
            width="400"
            alt="imagen del producto"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 className="card-title">{detailProducto.title}</h5>
            <p className="card-text">{detailProducto.description}</p>
            <p className="card-text">Precio: {detailProducto.price}</p>
          </div>
        </div>
        {isClicked ? (
          <Link to="/cart" className="btn btn-primary mt-3">
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={detailProducto.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
