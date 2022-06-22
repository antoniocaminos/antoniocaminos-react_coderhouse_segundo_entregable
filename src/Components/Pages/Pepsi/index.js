import React from "react";
import foodpepsi from "../../../assets/foodpepsi.jpg";
import './styles.css';
const Pepsi = () => {
    return (
        <div className="foods">
            <h1>Pepsi</h1>
            <img src={foodpepsi} className="menuPepsi" alt="foodpepsi" />
        </div>
    );
}
export default Pepsi;