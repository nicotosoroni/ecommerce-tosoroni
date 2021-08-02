import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { getFirestore } from '../firebase/firebase';
import { useForm } from 'react-hook-form';
import { BotonFinalizar } from './BotonFinalizar';
export const Formulario = ({ totalPrice }) => {
  const { productosAgregados } = useContext(CartContext);
  const [error, setError] = useState(false);
  const [newId, setOrderIds] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmEmail, setConfirmEmail] = useState();
  const [phone, setPhone] = useState();
  const { handleSubmit } = useForm();

  const updateStock = () => {
    const db = getFirestore();
    const itemCollection = db.collection('items');
    const btc = db.batch();

    productosAgregados.forEach((item) => {
      btc.update(itemCollection.doc(item.id), {
        stock: item.stock - item.cantidad,
      });
    });

    btc
      .commit()
      .then(() => {
        console.log('Bache en orden');
      })
      .catch((e) => console.log(e));
  };

  const createOrder = () => {
    const db = getFirestore();
    const order = db.collection('order');
    const newOrder = {
      buyer: {
        name: name,
        phone: phone,
        email: email,
      },
      items: productosAgregados.map((item) => ({
        id: item.id,
        producto: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
      })),
      total: totalPrice,
    };
    order
      .add(newOrder)
      .then(({ id }) => {
        setOrderIds(id);
        console.log(id);
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      })
      .finally(() => {
        updateStock();
      });
  };
  return (
    <form className="formularioContacto" onSubmit={handleSubmit(createOrder)}>
      <h4>Datos de Contacto</h4>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Confirma tu Email</label>
        <input
          type="email"
          className="form-control"
          id="confirmemail"
          placeholder="Confirma tu Email"
          onChange={(event) => setConfirmEmail(event.target.value)}
        />
      </div>
      {confirmEmail === email ? (
        ''
      ) : (
        <div className="emailDiferentes">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-triangle"
            viewBox="0 0 16 16"
          >
            <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
            <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
          </svg>
          <p>Los mails son distintos</p>
        </div>
      )}
      <div className="form-group">
        <label>Celular</label>
        <input
          type="number"
          className="form-control"
          id="phone"
          placeholder="+54"
          onChange={(event) => setPhone(event.target.value)}
        />
        <BotonFinalizar
          email={email}
          confirmEmail={confirmEmail}
          newId={newId}
        />
      </div>
    </form>
  );
};
