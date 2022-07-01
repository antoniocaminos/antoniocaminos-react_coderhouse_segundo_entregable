import React from 'react'
import Item from '../Item/index.jsx'

const ItemList = (props) => {
    const {productsList} = props
    return (
    <div>
        <h6>lista de productos</h6>
        {console.log(productsList)}
        
        {productsList.map((products)=><Item />)}
        
    </div>
  )
}

export default ItemList;