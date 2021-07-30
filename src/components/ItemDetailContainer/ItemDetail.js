import React, { useContext } from 'react';
import ItemCount from '../Cart/ItemCount';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';

// const ItemDetail = ({ detailProducto }) => {
// const [isClicked, setIsClicked] = useState(false);
// const onAdd = (cantidad) => {
//   setIsClicked(true);
// };
export const ItemDetail = ({ detailProducto }) => {
  console.log(detailProducto);
  const history = useHistory();
  const { productosAgregados, setProductosAgregados } = useContext(CartContext);

  const agregarCart = (count) => {
    const productoCarrito = productosAgregados.find(
      (el) => el.id === detailProducto.id
    );
    if (productoCarrito) {
      setProductosAgregados(
        productosAgregados.map((el) =>
          el.id === detailProducto.id
            ? {
                ...productoCarrito,
                cantidad: productoCarrito.cantidad + count,
              }
            : el
        )
      );
    } else {
      setProductosAgregados([
        ...productosAgregados,
        {
          nombre: detailProducto.nombre,
          id: detailProducto.id,
          cantidad: count,
          precio: detailProducto.precio,
        },
      ]);
    }

    var c = document.getElementById(`${detailProducto.id}Count`);
    var t = document.getElementById(`${detailProducto.id}Terminar`);
    var a = document.getElementById(`${detailProducto.id}Agregar`);
    if (t.style.display === 'none') t.style.display = 'block';
    a.style.display = 'none';
    c.style.display = 'none';
  };

  const cancelChangeStye = () => {
    var c = document.getElementById(`${detailProducto.id}Count`);
    var t = document.getElementById(`${detailProducto.id}Terminar`);
    var a = document.getElementById(`${detailProducto.id}Agregar`);
    if (t.style.display === 'block') t.style.display = 'none';
    a.style.display = 'block';
    c.style.display = 'block';
  };

  const styleButton = {
    display: 'none',
  };

  return (
    <div className="detailGeneral">
      <div className="fotoDetail">
        <img
          src={detailProducto.pictureUrl}
          className="fotoDetailImg"
          alt="FotoDetail"
        />{' '}
      </div>
      <div className="infoDetail">
        <h1 className="tituloDetail">{detailProducto.nombre}</h1>
        <h3 className="precioDetail"> ${detailProducto.precio}</h3>
        <ItemCount
          min={1}
          max={detailProducto.stock}
          producto={detailProducto}
          onAdd={agregarCart}
        />
        <div id={`${detailProducto.id}Terminar`} style={styleButton}>
          {' '}
          <Button
            variant="outline-dark"
            onClick={(e) => history.push('/cart')}
            className="finalizarButton"
          >
            Finalizar Compra
          </Button>{' '}
          <Button variant="outline-danger" onClick={(e) => cancelChangeStye()}>
            Cancelar
          </Button>{' '}
        </div>
        <Button variant="outline-info" onClick={(e) => history.push('/list')}>
          Volver a productos
        </Button>{' '}
      </div>{' '}
    </div>

    // <div className="card mb-3 itemdetailcontainer">
    //   <div className="row g-0">
    //     <div className="col-md-4">
    //       <img
    //         src={detailProducto.pictureUrl}
    //         width="400"
    //         alt="imagen del producto"
    //       />
    //     </div>
    //     <div class="col-md-8">
    //       <div class="card-body">
    //         <h5 className="card-title">{detailProducto.title}</h5>
    //         <p className="card-text">{detailProducto.description}</p>
    //         <p className="card-text">Precio: {detailProducto.price}</p>
    //       </div>
    //     </div>
    //     {isClicked ? (
    //       <Link to="/cart" className="btn btn-primary mt-3">
    //         Terminar compra
    //       </Link>
    //     ) : (
    //       <ItemCount stock={detailProducto.stock} initial={0} onAdd={onAdd} />
    //     )}
    //   </div>
    // </div>
  );
};
