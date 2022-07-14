import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/index.jsx';
import { useState } from 'react';


const ItemDetail = ({product}) => {
    const [goToBuy, setgoToBuy] = useState(false);

    
    const onAdd = (quantity) => {
       setgoToBuy(true);
    }

    return(
        <div className='detail'>
            <img src={product.img} alt={product.description} width = '400 px' />
            <h2>{product.name}</h2>
            <h3>$: {product.price}</h3>
            <h4>Stok: {product.stok}</h4>
            {
            goToBuy 
                ?
                <Link to='/Cart'>Terminar Compra</Link>   
                :<Card onAdd={onAdd}/>

            }

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