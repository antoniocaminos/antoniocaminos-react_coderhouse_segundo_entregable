import React from 'react';
import CartWidget from '../CartWidget';
import Logo from '../Logo';
import '../NavBar/styles.css';
import { Link } from 'react-router-dom';
const categories = [
{   id: 1,
    label: "Comidas rápidas",
    path: "/",
    name: "/category/FastFood",
    },
{   id: 2,
    label: "Bebidas",
    path: "/",
    name: "/category/Drinks",
    },
{   id: 2,
    label: "Postres",
    path: "/",
    name: "Desserts",
    },
    
];


const NavBar = () => {
    
    return(
        <div className="navbar">
            <Logo />
                <h1 className="nav-logo">Big Burgers</h1>
                    <ul>
                        {categories.map(category => (
                            <Link /* className='nav-item' */ to={category.path}  key={category.id}>
                             {category.name}
                               </Link>
                        ))}
                    </ul>
                    <CartWidget />
        </div>
    );
};      
         
export default NavBar