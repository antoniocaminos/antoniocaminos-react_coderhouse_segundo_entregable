import React from 'react';
import shoppingCart from '../../assets/shoppingCart.png';
import './styles.css'
const CartWidget = () => {
    return(
        <button>
            <img src={shoppingCart} className="carIcon"alt='Cart icon'/>
        </button>
        
    );
};

export default CartWidget;