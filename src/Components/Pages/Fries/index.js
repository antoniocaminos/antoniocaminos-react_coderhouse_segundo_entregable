import React from "react";
import foodfries from "../../../assets/foodfries";
import './styles.css';
const Fries = () => {
    return (
        <div className="foods">
            <h1>Fries</h1>
                <img scr={foodfries} alt="foodfries" />
            <p>text</p>
        </div>
    );
}
export default Fries;