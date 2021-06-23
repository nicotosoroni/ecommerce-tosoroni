import React from 'react';
import ItemCount from '../Counter/ItemCount';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {
  const onAdd = (amount) => {
    alert(`Compraste ${amount} productos`);
  };

  return (
    <div>
      <h1>Tienda LEGO</h1>
      <ItemList />
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </div>
  );
};

export default ItemListContainer;
