import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../Moks/fakeApi';



const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
   
  useEffect(() => {
    getProduct(id)
    .then((res)=>setProduct(res))
    .catch((err)=>console.log(err))
    .finally(()=>setLoading(false))
  }, [id]);

  //console.log(product);
  console.log("ando");
  return (
    <div className="container">
      {loading ? (
      <h3>Cargando Item....</h3>
      ):(
        <>
          <div>
            <ItemDetail product={product} /> 
          </div>
        </>
      )}
    </div>
  )};
export default ItemDetailContainer