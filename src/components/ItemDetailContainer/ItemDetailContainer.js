import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   const [detailProducto, setLocalItems] = useState([]);
//   useEffect(() => {
//     const items =

function ItemDetailContainer() {
  const [detailProducto, setDetailProducto] = useState([]);
  const { idItems } = useParams();
  const promiseDetailProducto = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          resolve([
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
          ]),
        2000
      );
    });
  };

  useEffect(() => {
    promiseDetailProducto().then((detailProducto) => {
      const dataFiltradaDetail = detailProducto.filter(
        (element) => element.id === idItems
      );
      setDetailProducto(dataFiltradaDetail);
    });
  }, [idItems]);
  return (
    <div className="pruebaaa">
      {detailProducto.map((detailProducto, id) => (
        <ItemDetail detailProducto={detailProducto} key={id} />
      ))}
    </div>
  );
}

//     const getItem = (productos) => {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve(productos);
//         }, 2000);
//       });
//     };

//     getItem(items)
//       .then((result) => setLocalItems(result))
//       .catch((error) => console.log(error.message));
//   }, [id]);

//   return (
//     <div className="row productos mt-3">
//       <ItemDetail detailProducto={detailProducto} />
//     </div>
//   );
// };

export default ItemDetailContainer;
