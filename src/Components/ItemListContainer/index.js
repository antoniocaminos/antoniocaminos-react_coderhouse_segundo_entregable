import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import {getData} from '../../Moks/fakeApi.js';
import ItemDetail from "../ItemDetail/index.jsx";

const ItemListContainer = ({greeting}) => {
    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        getData
        .then((res)=> setProductsList(res))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    },[]);
console.log(getData)

return (
        <div className="landing">
            <span>{greeting}</span>
            {loading ? <p>Cargando...</p> : <ItemList productsList={productsList}/>}
            {/* {<ItemList productsList={productsList}/>} */}
        </div> 
)
        {/* <ItemDetailContainer /> */}
    
}
export default ItemListContainer;