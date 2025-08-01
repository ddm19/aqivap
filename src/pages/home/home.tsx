import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.scss';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="homePage">
      <section className="homePage__hero">
        <div className="container">
          <div className="homePage__heroContent">
            <h1 className="homePage__heroTitle">Bienvenido a Aqivap</h1>
            <p className="homePage__heroSubtitle">Tu destino premium para productos de vapeo y accesorios</p>
            <div className="homePage__heroActions">
              <Link to="/products" className="button button--primary button--large">Comprar ahora</Link>
              <Link to="/about" className="button button--outline button--large">Conócenos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homePage__offers">
        <div className="container">
          <h2 className="homePage__sectionTitle">Ofertas Especiales</h2>
          <div className="homePage__productGrid">
            {[{
              title: 'Kit Inicio Aqivap',
              subtitle: 'Dispositivo + líquido 10ml',
              price: '29,99 €',
              image: 'kitinicio.jpg',
            }, {
              title: 'Pack 3×50ml Sabores',
              subtitle: 'Frutas Mix, Menta y Vainilla',
              price: '19,99 €',
              image: 'sabores.jpg',
            }, {
              title: 'Mod Tank 80W',
              subtitle: 'Potencia ajustable y pantalla OLED',
              price: '39,99 €',
              image: 'modtank.jpg',
            },
            {
              title: 'Kit Inicio Aqivap',
              subtitle: 'Dispositivo + líquido 10ml',
              price: '29,99 €',
              image: 'kitinicio.jpg',
            },
            ].map((offer, idx) => (
              <div key={idx} className="card card--grid homePage__categoryCard" onClick={() => navigate('/product/1')}>
                <div className="card__media">
                  <div className="homePage__productImage">
                    <img src={offer.image} alt={offer.title} className="homePage__productImage" />
                  </div>
                </div>
                <div className="card__content">
                  <h3 className="card__title">{offer.title}</h3>
                  <p className="card__subtitle">{offer.subtitle}</p>
                  <div className="card__footer">
                    <span className="homePage__productPrice">{offer.price}</span>
                    <button className="button button--primary button--small">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="homePage__categories">
        <div className="container">
          <h2 className="homePage__sectionTitle">Categorías Destacadas</h2>
          <div className="homePage__categoryGrid">
            <div className="homePage__categoryCard" onClick={() => navigate('/products?category=desechables')}>
              <div className="homePage__categoryIcon">🖊️</div>
              <h3>Desechables</h3>
              <p>Vape pens de un solo uso</p>
              <Link to="/products?category=desechables" className="button button--outline">Ver productos</Link>
            </div>
            <div className="homePage__categoryCard" onClick={() => navigate('/products?category=e-liquidos')}>
              <div className="homePage__categoryIcon">💧</div>
              <h3>E-Líquidos</h3>
              <p>Sabores premium: frutas, mentolados y postres</p>
              <Link to="/products?category=e-liquidos" className="button button--outline">Ver productos</Link>
            </div>
            <div className="homePage__categoryCard" onClick={() => navigate('/products?category=accesorios')}>
              <div className="homePage__categoryIcon">🔧</div>
              <h3>Accesorios</h3>
              <p>Baterías, cargadores y piezas de repuesto</p>
              <Link to="/products?category=accesorios" className="button button--outline">Ver productos</Link>
            </div>
            <div className="homePage__categoryCard" onClick={() => navigate('/products?category=mods')}>
              <div className="homePage__categoryIcon">⚡</div>
              <h3>Mods & Tanques</h3>
              <p>Dispositivos avanzados y tanques de calidad</p>
              <Link to="/products?category=mods" className="button button--outline">Ver productos</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homePage__featured">
        <div className="container">
          <h2 className="homePage__sectionTitle">Productos Destacados</h2>
          <div className="homePage__productGrid">
            {[{
              title: 'Cool Mint 50ml',
              subtitle: 'Mentol intenso',
              price: '14,99 €',
              image: 'https://x-bar.co/wp-content/uploads/2023/11/xbar-eliquids-50ml-coolmint1.png',
            }, {
              title: 'Strawberry Blast 50ml',
              subtitle: 'Fresa jugosa',
              price: '14,99 €',
              image: 'https://www.bazardelvapeo.com/wp-content/uploads/2023/06/ske-crystal-strawberry-blast.jpg',
            }, {
              title: 'Vainilla Clásica 50ml',
              subtitle: 'Dulzura suave',
              price: '14,99 €',
              image: 'https://upload.vapeo24.com/producto/md/vanilla-biscuit-50ml-ivg-desert.webp',
            }, {
              title: 'Tabaco Vintage 50ml',
              subtitle: 'Sabor auténtico',
              price: '14,99 €',
              image: 'https://siemprevapor.com/7513-large_default/vintage-juliet-100ml-blackout.jpg',

            }].map((prod, i) => (
              <div key={i} className="card card--grid" onClick={() => navigate('/product/1')}>
                <div className="card__media">
                  <div className="homePage__productImage">
                    <img src={prod.image} alt={prod.title} className="homePage__productImage" />
                  </div>
                </div>
                <div className="card__content">
                  <h3 className="card__title">{prod.title}</h3>
                  <p className="card__subtitle">{prod.subtitle}</p>
                  <div className="card__footer">
                    <span className="homePage__productPrice">{prod.price}</span>
                    <button className="button button--primary button--small">Añadir al carrito</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="homePage__viewAllContainer">
            <Link to="/products" className="button button--outline button--large">Ver todos los productos</Link>
          </div>
        </div>
      </section>

      <section className="homePage__about">
        <div className="container">
          <div className="homePage__aboutContent">
            <div className="homePage__aboutText">
              <h2 className="homePage__sectionTitle">Sobre Aqivap</h2>
              <p>Nuestro compromiso con la calidad y la seguridad nos convierte en la elección preferida de vapeadores.</p>
              <Link to="/about" className="button button--primary">Más información</Link>
            </div>
            <div className="homePage__aboutImage">
              <img src="https://lh3.googleusercontent.com/p/AF1QipMJbJeRjJnBFWlv7O3z2wgL2MgFiKHevmlIp7zG=s1360-w1360-h1020-rw" alt="Aqivap" className="homePage__aboutImage" />
            </div>
          </div>
        </div>
      </section>

      <section className="homePage__contact">
        <div className="container">
          <div className="homePage__contactContent">
            <h2 className="homePage__sectionTitle">¿Necesitas ayuda?</h2>
            <p>Contáctanos para recomendaciones personalizadas y soporte.</p>
            <div className="homePage__contactActions">
              <Link to="/contact" className="button button--primary">Contáctanos</Link>
              <Link to="/products" className="button button--outline">Ver productos</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
