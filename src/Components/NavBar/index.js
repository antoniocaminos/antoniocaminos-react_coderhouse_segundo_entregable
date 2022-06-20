import React from 'react';
import CartWidget from '../CartWidget';
import Logo from '../Logo';
import '../NavBar/styles.css';

const menuItems = [
{   id: 1,
    label: "Burger",
    },
{   id: 2,
    label: "Fries",
    },
{   id: 2,
    label: "Pepsi",
    },
{   id: 3,
    label: "Ice Cream",
    },    
];


const NavBar = () => {
    return(
        <div className='nav'>
            <Logo />
                <h1 className="nav-logo">Big Burgers</h1>
                    <div>
                        {menuItems.map(item => (
                            <a href="/" className='nav-item' key={item.id}>
                                {item.label}
                                 </a>
                                                ))}
                        <CartWidget />
                    </div>
            </div>
            
            );
        }
        
export default NavBar