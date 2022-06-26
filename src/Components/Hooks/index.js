//import React from 'react'
import { useState } from "react";
export const useCard = () => {
/* aca pego el hook del index de Card */
        const [amount, setAmount] = useState (0)  
        const stock = 11;
        const limit = 0;
        const count = (value) =>{
            const result = amount+value
        if (result < stock && result >= limit) {
            setAmount(amount+value)
            console.log(amount)
            }
            console.log(value)
            }
        
    return{
        count, amount
    }
}