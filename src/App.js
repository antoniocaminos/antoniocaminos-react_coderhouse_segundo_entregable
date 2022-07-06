import "./App.css";
import NavBar from './Components/NavBar/index.js';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetalContainer from "./Components/ItemDetailContainer";
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
            <div>
              <ItemListContainer greeting="Hola Humano" />
          </div>
          
          <div className='body'>
              {/* <Card /> */}
              <ItemDetalContainer />
          </div>
              
        </div>
        
        </div>
      );  
    }
export default App;