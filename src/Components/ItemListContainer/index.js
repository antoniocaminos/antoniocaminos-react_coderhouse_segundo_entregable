import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { getData } from '../../Moks/fakeApi.js';
//import ItemDetail from "../ItemDetail/index.jsx";
import { useParams } from "react-router-dom";
//import Cart from "../Cart";
//import Card from "../Card";
//import { db } from "../../firebase/firebase";
//import { getDocs, collection, query } from "../../firebase/firestore";



const ItemListContainer = ({greeting}) => {
    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    
    const param = useParams();
    const { categoryId } = param;
    //console.log("aca va al categoryId");
    console.log(param);


    useEffect(()=>{
       


        getData(categoryId)
        .then((res)=> setProductsList(res))
        .catch((err)=> console.log(err))
        .finally(()=> setLoading(false))
    },[categoryId]);
 //console.log(getData)

return (
        <div className="landing">
            <span>{greeting}</span>
            {loading ? <p>Cargando...</p> : <ItemList productsList={productsList}/>}
            {/* {<ItemList productsList={productsList}/>} */}
        </div> 
)
    
}
export default ItemListContainer; 
       /* <ItemDetailContainer /> */