import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
        <nav>
        <Link to='/' >Home</Link>
        <Link to='/reservacion'>Reservacion</Link>
        <Link to='/contacto'>Contacto</Link>
        <Link to='/Menu'>Menu</Link>
        </nav>
    </div>
  )
}

export default Menu