import NavBar from './Components/NavBar/index.js';
import "./App.css";
import ItemListContainer from './Components/ItemListContainer';
//import Burger from './Components/Pages/Burger/index.js';
//import Fries from './Components/Fries/index.js';
//import Ice from './Components/Pages/Ice/index.js';
//import Pepsi from './Components/Pages/Pepsi/index.js';
/*import Logo from '../src/Components/Logo/index.js'; */
function App(){
    return(
        <div className='nav-bar'>
              <NavBar />
          <div className='itemList'>
              <ItemListContainer greeting="Hola Humano"/>
          </div>
          <div className='body'>
            
          </div>
          
        </div>
      );  
    }
export default App;