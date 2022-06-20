import React from 'react';
import bigBurger from '../../assets/bigBurger.png';
import './styles.css';
const Logo = () => {
    return(
        <button>
            <img src={bigBurger} className="mainLogo"alt='logo burger' />
        </button>
        
    );
};

export default Logo;