import React from "react";

const ItemListContainer = ({greeting}) => {
    const getData = new Promise((resolved, reject) =>{
        let condicion = true;
        setTimeout(()=>{
        if (condicion){
            resolved(console.log("ando"))
        }else{
            reject(console.log("no ando"));
        }
    }, 3000)
})
  return (
        <div className="landing">
            <span>{greeting}</span>
        </div> 
    )
}

export default ItemListContainer;