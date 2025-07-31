import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => (
  <header className="header">
    <NavLink to="/" className="header__logo">Aqivap</NavLink>
    <nav className="header__nav">
      <NavLink to="/" className={({ isActive }) => `header__navLink${isActive ? ' header__navLink--active' : ''}`}>Inicio</NavLink>
      <NavLink to="/products" className={({ isActive }) => `header__navLink${isActive ? ' header__navLink--active' : ''}`}>Productos</NavLink>
      <NavLink to="/about" className={({ isActive }) => `header__navLink${isActive ? ' header__navLink--active' : ''}`}>Nosotros</NavLink>
      <NavLink to="/contact" className={({ isActive }) => `header__navLink${isActive ? ' header__navLink--active' : ''}`}>Contacto</NavLink>
    </nav>
    <div className="header__actions">
      <button className="header__mobileMenu">☰</button>
    </div>
  </header>
)

export default Header
