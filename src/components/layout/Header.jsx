import React from 'react';
import  "./header.css";
import "../../global.css";
import logo from "../../assets/logo.png";


function Header() {
    console.log("Header renderizado");
    return (
        <div className='header'>
            <div className='div-titulo'> 
            <img src={logo} alt="logo" />
                        <h1>SnapOut</h1>
                  </div>
        </div>
    );
} 

export default Header;