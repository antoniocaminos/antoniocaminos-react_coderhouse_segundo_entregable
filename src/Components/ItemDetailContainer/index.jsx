import React, { useState, useEffect } from 'react';
import ItemDetal from '../ItemDetail';
import { useParams } from 'react-router-dom';
import { getData, getProduct } from '../../Moks/fakeApi';



const ItemDetalContainer = () => {
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
            <ItemDetal product={product.id} /> 
          </div>
        </>
      )}
    </div>
  )};
export default ItemDetalContainer