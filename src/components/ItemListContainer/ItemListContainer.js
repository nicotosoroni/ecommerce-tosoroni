import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const items = [
      {
        id: 1,
        nombre: 'Shipwrecked Pirate',
        detalle: 'Este es el detalle del producto1',
        precio: 100,
        pictureUrl: 'https://images.brickset.com/sets/images/1733-1.jpg',
        stock: 5,
      },
      {
        id: 2,
        nombre: 'Pirate Lookout',
        detalle: 'Este es el detalle del producto2',
        precio: 100,
        pictureUrl: 'https://images.brickset.com/sets/images/1696-1.jpg',
        stock: 5,
      },
      {
        id: 3,
        nombre: 'Treasure Surprise',
        detalle: 'Este es el detalle del producto3',
        precio: 100,
        pictureUrl: 'https://images.brickset.com/sets/images/1747-1.jpg',
        stock: 5,
      },
      {
        id: 4,
        nombre: 'Pirates of Barracuda Bay',
        detalle: 'Este es el detalle del producto4',
        precio: 100,
        pictureUrl:
          'https://images.brickset.com/sets/images/21322-1.jpg?202003240103',
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
    <div>
      <h1>Tienda LEGO</h1>
      {localItems.map((localItems) => {
        return <ItemList localItems={localItems} />;
      })}
    </div>
  );
};

export default ItemListContainer;
