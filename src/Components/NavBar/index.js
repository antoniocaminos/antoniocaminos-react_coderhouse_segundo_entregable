import React from 'react';
import CartWidget from '../CartWidget';
import Logo from '../Logo';
import '../NavBar/styles.css';
import { Link } from 'react-router-dom';

const menuItems = [
{   id: 1,
    label: "Hamburguesas",
    path: "/category/burger", 
    name: "Home",
    },
{   id: 2,
    label: "Papas Fritas",
    path: "/category/fries",
    name: "Fries",
    },
{   id: 2,
    label: "Bebidas",
    path: "/category/drink",
    name: "Drink",
    },
{   id: 3,
    label: "Postres",
    path: "/category/dessert", 
    name: "Dessert",   
},    
];
const NavBar = () => {
    return(
        <div className='nav'>
        <Logo />
            <h1 className="nav-logo">Big Burgers</h1>
                
                    {menuItems.map(categoryId => (
                        
                        < li to={categoryId.path}> 
                            <Link to={categoryId.path}>{categoryId.label}
                             </Link>
                             </li>
                                            ))}
                    <CartWidget />
                
        </div>
            );
        }        
export default NavBar
/* saque los estilos del navBar propiamente dicho, cambiar */