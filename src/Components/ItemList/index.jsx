import React from 'react'
import Item from '../Item';


const ItemList = ({productsList}) => {
    
    return (
    <div>
        <h6>lista de productos</h6>
      <div style={{display:'flex', justifyContent: 'space-between', alingItems:'center',  flexWrap:'wrap'}}>
        {productsList.map((products)=><Item key ={products.id} products={products}/>)}
      </div>
    </div>
  )
}

export default ItemList;