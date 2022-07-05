import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";
import {getData} from '../../Moks/fakeApi.js'

const ItemListContainer = ({greeting}) => {
    const [productsList, setProductsList] = useState([])
    const [loading, setLoading] = useState(true)
    /* 
    me llevo el array y la promesa al moks fakeApi.js
    const products = [
        {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25"},
        {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25"},
        {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25"},
        {id: "4", name: "ice", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25"},
    ]
    const getData = new Promise ((resolve, reject) => {
    let condicion = true
    setTimeout(()=>{
    if (condicion){
        resolve(products)
    }else{
        reject(console.log("nando"))
        }
    }, 3000) 
}) */
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
            {/* <ItemList productsList={productsList}/> */}

        </div> 
    )
}
export default ItemListContainer;