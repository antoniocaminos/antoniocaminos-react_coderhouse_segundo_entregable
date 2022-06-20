import NavBar from './Components/NavBar/index.js';
import "./App.css";
import ItemListContainer from '.Components/ItenListContainer/index.js';

function App(){
    return(
        <div>
            <NavBar />
            <itemListContainer greeting="hola humano!"/>
        </div>
      );
    }
export default App;
