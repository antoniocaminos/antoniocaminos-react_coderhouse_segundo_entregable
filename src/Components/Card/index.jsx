import React, { useState } from 'react'
//import { useCard } from '../Hooks/useCard';
import './styles.css';

          
export const Card = () => {
          const [amount, setAmount] = useState (0)
          
          const stock = 11;
          const limit = 0;
          const count = (value) =>{
                const result = amount+value
            if (result < stock && result >= limit) {
                setAmount(amount+value)
                console.log(amount)
              }
              console.log(value)
            };
              
  return (
      <section className='bg-info border'>
        <h3 className='py-3 big white'>producto title</h3>
        <p>product image</p>
        <h4>product price</h4>
        <div className='d-flex flex-row dislpay-3 justify-content-between'>
          <button className='btnCard' onClick={()=>count(-1)}>-</button>
          <span>{amount}</span>{/* aca se puede  poner el stok maximo */}
          <button className='btnCard'onClick={()=>count(+1)}>+</button>
        </div>  
      </section>
    ) 
  }


export default Card;
/* const {count , amount} = useCard(stock)
  const stock = 10;
  const limit = 0; 
  const [amount, setAmount] = useState (0)
  
  const count = (value) => {

    const result = amount + value
    if ( result <= stock && result >= limit) { /* cambiar el stok en para agregarlo al arr * /
    setAmount(amount+value)
    console.log(value)
  }
   */