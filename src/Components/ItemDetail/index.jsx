import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/index.jsx';
import Cart from '../Cart/index.jsx';
import { useState } from 'react';


const ItemDetail = ({product}) => {
    console.log("agrego contador");

    const [goToBuy, setgoToBuy] = useState(false);
    console.log(goToBuy);
    const onAdd = () => {
       setgoToBuy(true);
    }

    return(
        <div className='detail'>
            <img src={product.img} alt={product.description} width = '400 px' />
            <h2>{product.name}</h2>
            <h3>$: {product.price}</h3>
            <h4>Stok: {product.stok}</h4>
            <Card product={product}/>
            {
            goToBuy 
                ?
                <Link to='/Cart'>Terminar Compra</Link>   
                :
                <button onClick={()=> onAdd(product)}>Enviar al carrito </button>}
                

        </div>
    
  )
}
export default ItemDetail;

