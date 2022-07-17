import ItemList from "../ItemList";
import { getData } from '../../Moks/fakeApi.js';
import { useParams } from "react-router-dom";
import { db } from "firebase/firestore";
import { getDocs, collection, query }  from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

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


return (
        <div className="landing">
            <span>{greeting}</span>
            {loading ? <p>Cargando...</p> : <ItemList productsList={productsList}/>} 
        </div> 
)
    
}
export default ItemListContainer; 
       /* <ItemDetailContainer /> */