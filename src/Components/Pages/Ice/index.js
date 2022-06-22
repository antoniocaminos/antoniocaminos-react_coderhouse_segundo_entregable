import React from 'react'
import foodice  from '../../../assets/foodice.jpg'
import '.styles.css'
export const Ice = () => {
  return (
    <div className='foods'>
        <h1>Ice Creams</h1>
            <img src={foodice} className="menuIce"alt='ice'/>
        </div> 
  )
}
export default Ice
