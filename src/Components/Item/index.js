import React from 'react'

const Item = () => {
  return (
        <div className='card' style={{width: '20rem', margin: '.5rem'}}>
                <img src='' className='card-img-top' alt='imagen de comida' />
                <div className='card-body'>
                <p className='card-text'>{product.name}</p>
                <p className='card-text'>{product.price}</p>
            </div>
        <button className='btn btn-primary'>Ver mas</button>
    </div>
  )
}
export default Item