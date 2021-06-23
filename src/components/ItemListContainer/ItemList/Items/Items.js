import React from 'react';

const data = [
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

export const Items = () => {
  return (
    <div className="list2Container">
      {data.map((element, i) => (
        <React.Fragment key={i}>
          <h4>{element.nombre}</h4>
          <p>{element.detalle}</p>
          <button>Comprar</button>
        </React.Fragment>
      ))}
    </div>
  );
};
