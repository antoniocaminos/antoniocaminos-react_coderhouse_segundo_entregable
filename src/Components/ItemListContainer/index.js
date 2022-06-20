import React from 'react'
import "./styles.css"
const ItemListContainer = ({greeting}) => {
    return (
        <div className='landing'>
            <span>{greeting}</span>
            <span> `Humano $ {"terricolax"}de la tierra!`</span>
        </div>
        )
}
export default ItemListContainer;