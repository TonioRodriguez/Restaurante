import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    <Link to='/' >Home</Link>
  <Link to='/reservacion'>Reservacion</Link>
  <Link to='/contacto'>Contacto</Link>
  <Link to='/Menu'>Menu</Link>
    <h1>Terraza del Padrino</h1>
    <h3>Todos los martes tragos 2x1!!!!</h3>
    </>
  )
}

export default home