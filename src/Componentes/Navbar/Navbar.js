// Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
return (
    <nav className="navbar">
        <button><Link to="home" smooth={true} duration={1000}>Home</Link></button>
        <button><Link to="sobreMi" smooth={true} duration={1000}>Sobre Mi</Link></button>
        <button><Link to="proyectos" smooth={true} duration={1000}>Proyectos</Link></button>
        <button><Link to="skills" smooth={true} duration={1000}>Skills</Link></button>
        <button><Link to="contacto" smooth={true} duration={1000}>Contacto</Link></button>
    </nav>
);
}

export default Navbar;