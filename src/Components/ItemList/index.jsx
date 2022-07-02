import React from 'react'
import Item from '../Item';


const ItemList = ({productsList}) => {
    
    return (
    <div>
        <h6>lista de productos</h6>
        {productsList.map((products)=><Item key ={products.id} products={products}/>)}
    </div>
  )
}

export default ItemList;