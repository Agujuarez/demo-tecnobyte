import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Aquí iría tu código para el menú de navegación, utilizando <Link> para la navegación */}
            <Link to="/">Inicio</Link>
            <Link to="/productos">Productos</Link>
            <Link to="/arma-tu-pc">Arma tu PC</Link>
            {/* ... otros enlaces ... */}
        </nav>
    );
};

export default Navbar;