import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const items = {
      id: 1,
      title: 'Pirates of Barracuda Bay',
      description:
        'Discover the captain’s cabin, food store, kitchen, bedrooms, supply dock, farm, toilet, jail cell, tavern and hidden treasure, plus lots of fun accessories, 8 pirate minifigures, assorted animal figures and 2 skeleton figures to inspire action-packed stories. This set includes an island that can be split in half and rearranged. The shipwreck can also be dismantled and reassembled to make a ship inspired by the Black Seas Barracuda pirate ship LEGO model from 1989.',
      price: 199.99,
      pictureUrl:
        'https://images.brickset.com/sets/images/21322-1.jpg?202003240103',
      stock: 10,
    };

    const getItem = (productos) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      });
    };

    getItem(items)
      .then((result) => setLocalItems(result))
      .catch((error) => console.log(error.message));
  }, [id]);

  return (
    <div className="row productos mt-3">
      <ItemDetail element={localItems} />
    </div>
  );
};

export default ItemDetailContainer;
