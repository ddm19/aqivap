import React from 'react';
import './contact.scss';

const ContactPage: React.FC = () => (
  <div className="contactPage">
    <div className="container">
      <header className="contactPage__header">
        <h1 className="contactPage__title">Contáctanos</h1>
        <p className="contactPage__subtitle">Estamos aquí para ayudarte</p>
      </header>
      <div className="contactPage__container">
        <form className="contactPage__form form">
          <div className="form__group">
            <label htmlFor="name" className="form__label">Nombre</label>
            <input id="name" type="text" className="form__input" placeholder="Tu nombre" />
          </div>
          <div className="form__group">
            <label htmlFor="email" className="form__label">Email</label>
            <input id="email" type="email" className="form__input" placeholder="tu@email.com" />
          </div>
          <div className="form__group">
            <label htmlFor="message" className="form__label">Mensaje</label>
            <textarea id="message" className="form__textarea" placeholder="¿En qué podemos ayudarte?" />
          </div>
          <div className="form__actions">
            <button type="submit" className="button button--primary">Enviar</button>
          </div>
        </form>
        <div className="contactPage__info">
          <div className="contactPage__contactItem">
            <span>Dirección:</span>
            <a
              href="https://www.google.com/maps?q=Gta.+de+Tom%C3%A1s+Ram%C3%ADrez,+6,+03010+Alicante"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Gta. de Tomás Ramírez, 6, 03010 Alicante
            </a>
          </div>
          <div className="contactPage__contactItem">
            <a href="https://www.instagram.com/aqivap/?hl=es" className="footer__link" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="contactPage__contactItem">
            <a href="https://x.com/antonio61680959" className="footer__link" target="_blank" rel="noopener noreferrer">X</a>
          </div>
          <div className="contactPage__contactItem">
            <a href="https://www.facebook.com/antoniojose.gutierrezbernal.5/?locale=es_ES" className="footer__link" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="contactPage__contactItem">
            <a href="https://www.tiktok.com/@aqivap" className="footer__link" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
