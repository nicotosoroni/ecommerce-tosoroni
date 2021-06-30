import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ element }) => {
  const [isClicked, setIsClicked] = useState(false);
  const onAdd = (cantidad) => {
    setIsClicked(true);
  };

  console.log(element);
  return (
    <div className="card mb-3 itemdetailcontainer">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={element.pictureUrl} width="400" alt="imagen del producto" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 className="card-title">{element.title}</h5>
            <p className="card-text">{element.description}</p>
            <p className="card-text">Precio: {element.price}</p>
          </div>
        </div>
        {isClicked ? (
          <Link to="/cart" className="btn btn-primary mt-3">
            Terminar compra
          </Link>
        ) : (
          <ItemCount stock={element.stock} initial={0} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};
export default ItemDetail;
