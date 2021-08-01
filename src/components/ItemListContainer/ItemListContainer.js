import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
import Spinner from 'react-bootstrap/Spinner';
function ItemListContainer() {
  const [productos, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    console.log(db);
    const itemCollection = db.collection('productos');
    console.log(itemCollection);
    setLoading(true);
    setTimeout(() => {
      if (
        categoryId === null ||
        categoryId === undefined ||
        categoryId === ''
      ) {
        itemCollection.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            console.log('NADA');
          }
          setProducto(querySnapshot.docs.map((doc) => doc.data()));
          setLoading(false);
        });
      } else {
        const categorias = itemCollection.where('type', '==', categoryId);
        categorias.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            itemCollection.get().then((querySnapshot) => {
              setProducto(querySnapshot.docs.map((doc) => doc.data()));
            });
          }
          setLoading(false);
          setProducto(querySnapshot.docs.map((doc) => doc.data()));
        });
      }
    }, 500);
  }, [categoryId]);

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
      {loading ? (
        <div>
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <h1>Tienda LEGO</h1>
          <Container>
            <Row>
              <CardColumns>
                <ItemList productos={items} />
              </CardColumns>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
