import React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const onAdd = (amount) => {
    alert(`Compraste ${amount} productos`);
  };

  return (
    <div>
      <h1>Tienda LEGO</h1>
      <ItemList />
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;
