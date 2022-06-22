import React from 'react'
import foodburger  from '../../../assets/foodburger.jpg'
import './styles.css'
const Burger = () => {
  return (
    <div className='foods'> 
        <h1>Burgers</h1>
        <img src={foodburger} className="menuBurger"alt='burger'/>
    </div>
  )
}
export default Burger;
