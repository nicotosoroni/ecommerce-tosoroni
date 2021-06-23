import React, { useState, useEffect } from 'react';

const Items = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          { id: 1, nombre: 'producto1', destacado: true },
          { id: 2, nombre: 'producto2', destacado: true },
          { id: 3, nombre: 'producto3', destacado: false },
          { id: 4, nombre: 'producto4', destacado: false },
        ]),
      2000
    );
  });
};

export const Respuesta = () => {
  const [dataShow, setDataShow] = useState([]);

  const ejecutarRespuesta = () => {
    Items().then((data) => {
      const dataFiltrada = data.filter((element) => element.destacado);
      setDataShow(dataFiltrada);
    });
  };

  useEffect(() => {
    ejecutarRespuesta();
  }, []);

  return (
    <>
      <ul>
        {dataShow.map((element, i) => (
          <li key={i}>{element.nombre}</li>
        ))}
      </ul>
    </>
  );
};
