import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import logo from '../componets/img/Logo.png'

export const Nav = () => {

  
  return (

    <div>
      <nav className="nav-style">
        <div className="container-logo">
          <Link to="/">
            <img className='logo' src={logo} alt="Logo" style={{ width: '75px' }}></img>
          </Link>
        </div>
       
          
        <ul id="list" className="navbar-list">
          <li className="navbar-item">
                <Link className="navbar-font" to="/registro">
                  Registro
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/login">
                  Login
                </Link>
          </li>

          <li className="navbar-item">
                <Link className="navbar-font" to="/listado">
                  Listado de Usuarios
                </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
