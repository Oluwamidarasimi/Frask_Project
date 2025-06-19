import React from "react";
import "../STYLES/Header.css";

const Header = () => {
    return(
<header className="header">
    <div className="container">
        <h1 className="logo">Frask Foods</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#purchase">Purchase</a>
        </nav>
    </div>
</header>
    );
};

export default Header;