//import React, { useState } from 'react'
//import { useCard } from '../Hooks/useCard';
import './styles.css';
import { useCard } from '../Hooks/index.js'
//import { useState } from 'react';
export const Card = () => {
/* empieza el hook */

          const {count, amount} = useCard()
  return (
      <section className='bg-info border'>
        <h3 className='py-3 big white'>producto title</h3>
        <p>product name</p>
        <h4>product price</h4>
        <div className='d-flex flex-row dislpay-3 justify-content-between'>
          <button className='btnCard' onClick={()=>count(-1)}>-</button>
          <span>{amount}</span>{/* aca se puede  poner el stok maximo */}
          <button className='btnCard'onClick={()=>count(+1)}>+</button>
         {/*  <button className='btnBuy'>enviar al carrito</button> */}
        </div>  
      </section>
    ) 
  }
export default Card;