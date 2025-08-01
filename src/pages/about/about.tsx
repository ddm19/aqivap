import React from 'react';
import './about.scss';

const AboutPage: React.FC = () => (
  <div className="aboutPage">
    <div className="container">
      <header className="aboutPage__header">
        <h1 className="aboutPage__title">Sobre Aqivap</h1>
        <p className="aboutPage__subtitle">Pasión por el vapeo en Alicante</p>
      </header>
      <div className="aboutPage__content">
        <section className="aboutPage__section">
          <div className="aboutPage__text">
            <p>
              Aqivap nació con el objetivo de acercar a la comunidad una selección
              de dispositivos y líquidos de primera calidad. Nuestro equipo está
              comprometido con ofrecer asesoramiento personalizado para que cada
              cliente encuentre la mejor opción para sus necesidades.
            </p>
            <p>
              Nos puedes visitar en Gta. de Tomás Ramírez, 6, 03010 Alicante,
              donde te espera un trato cercano y profesional.
            </p>
          </div>
          <div className="aboutPage__image">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMJbJeRjJnBFWlv7O3z2wgL2MgFiKHevmlIp7zG=s1360-w1360-h1020-rw"
              alt="Aqivap"
            />
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default AboutPage;
