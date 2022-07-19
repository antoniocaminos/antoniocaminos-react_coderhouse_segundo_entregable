import React, { useContext } from 'react';
import shoppingCart from '../../assets/shoppingCart.png';
import './styles.css'
import { CartContext } from '../../App';
const CartWidget = () => {
const contex = useContext(CartContext);
console.log('cartWichget' , contex);
    return(
        <button>
            <img src={shoppingCart} className="cart"alt='Cart icon'/>
        </button>
        
    );
};

export default CartWidget;