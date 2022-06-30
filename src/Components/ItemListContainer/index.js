import React, { useEffect, useState } from "react";
import ItemList from '../ItemList/index.js'

const ItemListContainer = ({greeting}) => {
    const [productList, setProductsList] = useState([])
    const products = [
        {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "", stock: "25"},
        {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "", stock: "25"},
        {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "",  stock: "25"},
        {id: "4", name: "ice", description: "es un helado", price: "90", img: "",  stock: "25"}
    ]
const getData = new Promise ((resolve, reject)=>{
    let condition = true
    setTimeout(() => {
        if (condition){
            resolve(console.log(products))
        }else{
            reject(console.log("no anda"))
        }
}, 4000)
})
        useEffect(()=>{
        getData
        .then((res)=>setProductsList(res))
        },[])
        console.log(productList)
return (
        <div className="landing">
            <span>{greeting}</span>
            <ItemList productList={productList}/>
        </div> 
    )
}

export default ItemListContainer;
/* linea 18:  <ItemList productsList={productsList}/> */
  /* const [productsList, setProductsList] = useState([])
    const products = [
        {id: '1', name: "burger", description: "es una hamburguesa", price: "200", img: "", stock: "25"},
        {id: "2", name: "fries", description: "son papas fritas", price: "100", img: "", stock: "25"},
        {id: "3", name: "soda", description: "es una pepsi", price: "100", img: "",  stock: "25"},
        {id: "4", name: "ice", description: "es un helado", price: "90", img: "",  stock: "25"}
    ]
    const getData = new Promise((resolve, reject) =>{
        let condition = true
        setTimeout(()=>{
        if (condition){
            resolve(console.log(products))
        }else{
            reject(console.log("no salio"));
        }
    },5000)
})
        useEffect(()=>{
        getData
        .then((result)=>console.log("manecat", result))
    }, [])
    console.log(productsList) */