import React from 'react'


const Item = ({products}) => {
  console.log(products)
  const {name, description, price, img, stock} = products
  return (
    <div className='card' style={{width:'20rem',margin:'.5rem'}}>
        <div className='card-body'>
        <img src={img} style={{width:'100px'}} alt={description}></img>
          <h6 className='card-title'>{name}</h6>
          <p className='card-text'>{description}</p>
          <p className='card-text'>$: {price}</p>
          <button className='btn btn-primary'>ver mas</button>
          </div> 
    </div>
  )
}
export default Item