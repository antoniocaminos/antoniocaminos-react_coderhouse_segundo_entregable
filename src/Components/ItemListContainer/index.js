import React, { useEffect, useState } from "react";
import ItemList from "../ItemList";


const ItemListContainer = ({greeting}) => {
    const [productsList, setProductsList] = useState([])
    const products = [
        {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25"},
        {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "https://i.postimg.cc/sGm4gzNr/foodburger.png", stock: "25"},
        {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "https://i.postimg.cc/KK3frdRP/foodpepsi.png",  stock: "25"},
        {id: "4", name: "ice", description: "es un helado", price: "90", img: "https://i.postimg.cc/RJ4TmhGd/foodice.png",  stock: "25"}
    ]
    const getData = new Promise ((resolve, reject) => {
    let condicion = true
    setTimeout(()=>{
    if (condicion){
        resolve(products)
    }else{
        reject(console.log("nando"))
        }
    }, 4000) 
})
    useEffect(()=>{
        getData
        .then((res)=> setProductsList(res))
    },[]);
console.log("ahora viene el getData")
console.log(getData)


return (
        <div className="landing">
            <span>{greeting}</span>
            <ItemList productsList={productsList}/>
            
        </div> 
    )
}
export default ItemListContainer;
/* const [productList, setProductsList] = useState([])
    const products = [
        {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "", stock: "25"},
        {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "", stock: "25"},
        {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "",  stock: "25"},
        {id: "4", name: "ice", description: "es un helado", price: "90", img: "",  stock: "25"}
    ]
    const getData = new Promise ((resolve, reject)=>{
    
    let condition = true
    setTimeout(()=>{
    if (condition) {
        resolve(products)
    } else {
        reject('no anda')
    }
},3000)
})*/