import React from 'react';
import Item from './Item';

const ItemList = ({ localItems }) => {
  return (
    <div className="row productos mt-3">
      {localItems.map((localItems, id) => {
        return <Item localItems={localItems} key={id} />;
      })}
    </div>
  );
};

export default ItemList;
