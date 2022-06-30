import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productList}) => {
    return (
    <div>
        <h3>Disponibles</h3>
        {productList.map((product)=><Item product={product}/>)}
    </div>
    )
}    
export default ItemList;














/*import React from 'react'
 
const ItemList = () => {
    
const {productList} = props 
    return (
    <div>
        <h3>
            Opciones:
            {
            productList.map((products)=><p key={products.id}>{products.name}</p>)}
        </h3>
    </div>
  )
}
export default ItemList  */
