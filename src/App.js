import "./App.css";
import NavBar from './Components/NavBar/index.js';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from "./Components/ItemDetailContainer";
//import Item from './Components/Item/index.jsx';
//import Burger from './Components/Pages/Burger/index.js';
//import Fries from './Components/Fries/index.js';
//import Ice from './Components/Pages/Ice/index.js';
//import Pepsi from './Components/Pages/Pepsi/index.js';
/*import Logo from '../src/Components/Logo/index.js'; */
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Components/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Item from './Components/Item/index.jsx';
/* Class Routing y Pre-entrega */
function App(){
    return(
      <>     
        <BrowserRouter>
              <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Hola Humano"/>} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemDetailContainer />} />
              <Route path="/Card" element={<Card />}/>
            </Routes>
        </BrowserRouter>        
      </>
 
      );  
    }
export default App;