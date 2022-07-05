import React, {useState, useEffect} from "react";
import { useParams} from "../../Moks/products";
import { getProd } from '../../Moks/products';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () =>{
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

useEffect(()=>{
  setLoading(true);
  const URL = './src/Moks/products.json';
  fetch(URL)
  .then(res => res.json())
  .catch((json)=>setProduct(json))
  .finally(() => {
    setLoading(false);
  });
} , [id]);
return (
  <div>
    {loading ? (<h3>cargando...</h3>
    ):(
      <>
        <ItemDetail product={product} />
      </>
    )}
  </div>
)
}
export default ItemDetailContainer;