import React from 'react'
import { Link } from 'react-router-dom'
import ItemDetail from '../ItemDetail'
import './style.css'

const Item = ({products}) => {
  //console.log(products)
  const {name, description, price, img, stock} = products
  return (
    <div className='card' style={{width:'20rem',margin:'.5rem'}}>
        <div className='card-body'>
        <img className='avatar' src={img} alt={description}></img>
          <h6 className='card-title'>{name}</h6>
          <p className='card-text'>{description}</p>
          <p className='card-text'>$: {price}</p>
          <p className='card-stock'>Quedan: {stock}</p>
          <Link to={`/detail/${products.id}`} className='btn btn-primary'>ver mas</Link>
          </div> 
    </div>
  )
}
export default Item