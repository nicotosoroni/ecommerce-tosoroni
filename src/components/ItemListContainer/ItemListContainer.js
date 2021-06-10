import React from 'react'
import ItemCount from '../Counter/ItemCount'

const ItemListContainer = () => {
    
    const onAdd = (amount) => {
        alert(`Compraste ${amount} productos`)
    }
    
    return (
        <div>
            <h1>Proximamente, muchos Legoss</h1>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
