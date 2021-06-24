import React, { useEffect, useState } from 'react';
import Item from './Items/Items';

const ItemList = () => {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const items = [
      {
        id: 1,
        nombre: 'producto1',
        detalle: 'Este es el detalle del producto1',
        precio: 100,
        stock: 5,
      },
      {
        id: 2,
        nombre: 'producto2',
        detalle: 'Este es el detalle del producto2',
        precio: 100,
        stock: 5,
      },
      {
        id: 3,
        nombre: 'producto3',
        detalle: 'Este es el detalle del producto3',
        precio: 100,
        stock: 5,
      },
      {
        id: 4,
        nombre: 'producto4',
        detalle: 'Este es el detalle del producto4',
        precio: 100,
        stock: 5,
      },
    ];

    const getItem = (productos) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };

    getItem(items)
      .then((result) => setLocalItems(result))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="row productos mt-3">
      {localItems.map((element) => {
        return <Item element={element} />;
      })}
    </div>
  );
};

// const ItemList = () => {
//   return (
//     <div>
//       <Items />
//     </div>
//   );
// };

export default ItemList;
