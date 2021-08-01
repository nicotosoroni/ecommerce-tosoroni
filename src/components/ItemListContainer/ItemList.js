import React from 'react';
import { Item } from './Item';
import Col from 'react-bootstrap/Col';

export const ItemList = ({ productos }) => {
  console.log(productos);
  return (
    <div className="row productos mt-3">
      {productos.map((productos, id) => {
        return (
          <Col>
            <Item producto={productos} key={id} />
          </Col>
        );
      })}
    </div>
  );
};
