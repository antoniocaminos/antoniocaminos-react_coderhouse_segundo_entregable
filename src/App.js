import "./App.css";
import React from "react";
import NavBar from './Components/NavBar/index.js';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer";
import Card from './Components/Card';
import Cart from './Components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
export const CartContext = React.createContext('');
console.log('CartContext', CartContext);

function App(){
    return(
      <>     
        <BrowserRouter>
              <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Hola Humano"/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
              <Route path="/path/Card:" element={<Card />}/>
              <Route path="path/Cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>        
      </>
 
      );  
    }
export default App;