import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const onAdd = (amount) => {
    alert(`Compraste ${amount} productos`);
  };

  return (
    <div>
      <h1>Tienda LEGO</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
