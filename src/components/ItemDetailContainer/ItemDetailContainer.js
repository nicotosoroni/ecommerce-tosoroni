import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
function ItemDetailContainer() {
  const [detailProducto, setDetailProducto] = useState([]);
  const { idItems } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('productos');
    const item = itemCollection.where('titulo', '==', idItems);
    item.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No hay resultados.');
      }
      querySnapshot.docs.map((doc) =>
        setDetailProducto([...detailProducto, { ...doc.data(), id: doc.id }])
      );
    });
  }, [idItems]);

  const items = [
    {
      id: 'uno',
      nombre: 'Shipwrecked Pirate',
      detalle: 'Este es el detalle del producto1',
      precio: 100,
      type: 'pirate',
      pictureUrl: 'https://images.brickset.com/sets/images/1733-1.jpg',
      stock: 5,
    },
    {
      id: 'dos',
      nombre: 'Pirate Lookout',
      detalle: 'Este es el detalle del producto2',
      precio: 100,
      type: 'pirate',
      pictureUrl: 'https://images.brickset.com/sets/images/1696-1.jpg',
      stock: 5,
    },
    {
      id: 'tres',
      nombre: 'Treasure Surprise',
      detalle: 'Este es el detalle del producto3',
      precio: 100,
      type: 'castle',
      pictureUrl: 'https://images.brickset.com/sets/images/1747-1.jpg',
      stock: 5,
    },
    {
      id: 'cuatro',
      nombre: 'Pirates of Barracuda Bay',
      detalle: 'Este es el detalle del producto4',
      precio: 100,
      type: 'pirate',
      pictureUrl:
        'https://images.brickset.com/sets/images/21322-1.jpg?202003240103',
      stock: 5,
    },
  ];

  return (
    <div>
      {items.map((detailProducto, id) => (
        <ItemDetail detailProducto={detailProducto} key={id} />
      ))}
    </div>
  );
}
export default ItemDetailContainer;
