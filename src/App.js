import NavBar from './Components/NavBar/index.js';
import "./App.css";
import ItemListContainer from './Components/ItemListContainer';
/*import Logo from '../src/Components/Logo/index.js'; */
function App(){
    return(
        <div className='nav-bar'>
          <NavBar />
          <ItemListContainer greeting="Hola Humano"/>
      </div>
      );
    }
export default App;
