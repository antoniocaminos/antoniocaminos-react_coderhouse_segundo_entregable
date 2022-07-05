import "./App.css";
import NavBar from './Components/NavBar/index.js';
import ItemListContainer from './Components/ItemListContainer';
//import { Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';
//import Item from './Components/Item/index.jsx';
//import Burger from './Components/Pages/Burger/index.js';
//import Fries from './Components/Fries/index.js';
//import Ice from './Components/Pages/Ice/index.js';
//import Pepsi from './Components/Pages/Pepsi/index.js';
/*import Logo from '../src/Components/Logo/index.js'; */
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Card from './Components/Card';
//import Item from './Components/Item/index.jsx';
function App(){
    return(
        <div className='nav-bar'>
              <NavBar />
          <div className='itemList'>
            <div className="ItemListContainer">
              <ItemListContainer greeting="Hola Humano" />
          </div>
          <Routes>
            <Route path="/category/:categoryId" element={<ItemListContainer/>} />

            <Route path="/detail/:id" element={<ItemDetailContainer />} />
            <Route path="/" element={<ItemListContainer/>} />
            {/* <Route path="/cart" element={<Cart/>} /> */}

          </Routes>
          </div>
          <div>
              {/* <ItemDetailContainer /> */}
          </div>
          <div className='body'>
              {/* <Card /> */}
          </div>
          
        </div>
        
      );  
    }
export default App;