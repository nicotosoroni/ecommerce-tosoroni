import React from 'react';
import Item from './Item';

const ItemList = ({ localItems }) => {
  return (
    <div className="row productos mt-3">
      <Item element={localItems} />;
    </div>
  );
};

export default ItemList;
