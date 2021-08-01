import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
function ItemDetailContainer() {
  const [detailProducto, setDetailProducto] = useState([]);
  const { idItems } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const item = itemCollection.where('nombre', '==', idItems);
    item.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No hay resultados.');
      }
      querySnapshot.docs.map((doc) =>
        setDetailProducto([...detailProducto, { ...doc.data(), id: doc.id }])
      );
    });
  }, [idItems]);

  return (
    <div>
      {detailProducto.map((detailProducto, id) => (
        <ItemDetail detailProducto={detailProducto} key={id} />
      ))}
    </div>
  );
}
export default ItemDetailContainer;
