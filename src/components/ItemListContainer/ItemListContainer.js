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
    const itemCollection = db.collection('items');
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
                <ItemList productos={productos} />
              </CardColumns>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
}
export default ItemListContainer;
