import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Moks/products.js';
import ItemDetail from '../ItemDetail/ItemDetail/index.jsx';



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(()=>{
    getProduct
    .then((res)=> setProduct(res))
    .catch((err)=> console.log(err))
    .finally(()=> setLoading(false))
  },[]);

  return (
    
    <div>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <div className="container">
            <ItemDetail product={product}/>
          </div>
        </>
      )}
    </div>
  )
}

export default ItemDetailContainer