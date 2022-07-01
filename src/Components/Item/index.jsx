import React from 'react'


const Item = ({products}) => {
    console.log("item "+products )
    const {img, name, description} = products
    return (
    <div className='card' style={{width:'20rem', margin:'.5rem'}}>
    <img src={img}className='card-image-top' alt={name}></img>
    <div className='card-body'>
        <p className='card-text'>{name}</p>
        <p className='card-text'>{description}</p>
    </div>
    <button className='btn btn-primery'>ver detalles</button>
    </div>
  )
}
export default Item