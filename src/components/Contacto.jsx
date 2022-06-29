import React from 'react'
import { Link } from 'react-router-dom'

const Contacto = () => {
  return (
    <div>
        <Link to='/' >Home</Link>
        <Link to='/reservacion'>Reservacion</Link>
        <Link to='/contacto'>Contacto</Link>
        <Link to='/Menu'>Menu</Link>
    </div>
  )
}

export default Contacto