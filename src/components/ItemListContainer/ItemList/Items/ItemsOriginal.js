import React from 'react';

// const allProducts = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(
//       () =>
//         resolve([
//           {
//             id: 1,
//             nombre: 'producto1',
//             detalle: 'Este es el detalle del producto1',
//             destacado: true,
//           },
//           {
//             id: 2,
//             nombre: 'producto2',
//             detalle: 'Este es el detalle del producto2',
//             destacado: true,
//           },
//           {
//             id: 3,
//             nombre: 'producto3',
//             detalle: 'Este es el detalle del producto3',
//             destacado: false,
//           },
//           {
//             id: 4,
//             nombre: 'producto4',
//             detalle: 'Este es el detalle del producto4',
//             destacado: false,
//           },
//         ]),
//       2000
//     );
//   });
// };

const allProducts = [
  {
    id: 1,
    nombre: 'producto1',
    detalle: 'Este es el detalle del producto1',
    destacado: true,
  },
  {
    id: 2,
    nombre: 'producto2',
    detalle: 'Este es el detalle del producto2',
    destacado: true,
  },
  {
    id: 3,
    nombre: 'producto3',
    detalle: 'Este es el detalle del producto3',
    destacado: false,
  },
  {
    id: 4,
    nombre: 'producto4',
    detalle: 'Este es el detalle del producto4',
    destacado: false,
  },
];

const Producto = ({ titulo, texto, i }) => {
  return (
    <React.Fragment key={i}>
      <h4>{titulo}</h4>
      <p>{texto}</p>
      <button>Comprar</button>
    </React.Fragment>
  );
};

export const Items = () => {
  //   const array = <------ no se como obtner el array de la promise
  const listaProductos = allProducts.map((element, i) => (
    <Producto titulo={element.nombre} texto={element.detalle} i={i} />
  ));
  return <div className="list2Container">{listaProductos}</div>;
};
