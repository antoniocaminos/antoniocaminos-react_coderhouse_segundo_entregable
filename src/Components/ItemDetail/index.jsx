import React from 'react';
//import Item from '../Item';

const ItemDetail = ({product}) => {
  return (
    <div>
        <p>ItemDetail</p>
            {product.name}
        
               
    </div>
  )
}
export default ItemDetail


/* {product.name}</h3>
                <img src={product.img} alt={product.name} width="400" />
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3> */

/* import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <div className="detail">
            <img src={product.img} alt={product.title} width="400" />
            <div>
                <h1>{product.name}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                <p>stock={product.stock} initial={1}</p>
            </div>
        </div>
    );
};

export default ItemDetail; */