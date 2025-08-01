import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="footer__section">
        <h3 className="footer__title">Aqivap</h3>
        <p className="footer__text">Productos de vapeo de calidad</p>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">Enlaces</h3>
        <NavLink to="/" className="footer__link">Inicio</NavLink>
        <NavLink to="/products" className="footer__link">Productos</NavLink>
        <NavLink to="/about" className="footer__link">Nosotros</NavLink>
        <NavLink to="/contact" className="footer__link">Contacto</NavLink>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">Síguenos</h3>
        <a href="https://www.facebook.com/antoniojose.gutierrezbernal.5/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="footer__link">Facebook</a>
        <a href="https://www.instagram.com/aqivap/?hl=es" target="_blank" rel="noopener noreferrer" className="footer__link">Instagram</a>
        <a href="https://x.com/antonio61680959" target="_blank" rel="noopener noreferrer" className="footer__link">X</a>
        <a href="https://www.tiktok.com/@aqivap" target="_blank" rel="noopener noreferrer" className="footer__link">TikTok</a>
      </div>
    </div>
    <div className="footer__bottom">© {new Date().getFullYear()} Aqivap</div>
  </footer>
)

export default Footer
