import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

const HomePage: React.FC = () => {
  return (
    <div className="homePage">
      {/* Hero Section */}
      <section className="homePage__hero">
        <div className="container">
          <div className="homePage__heroContent">
            <h1 className="homePage__heroTitle">
              Welcome to Aqivap
            </h1>
            <p className="homePage__heroSubtitle">
              Your premium destination for vaping products and accessories
            </p>
            <div className="homePage__heroActions">
              <Link to="/products" className="button button--primary button--large">
                Shop Now
              </Link>
              <Link to="/about" className="button button--outline button--large">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="homePage__categories">
        <div className="container">
          <h2 className="homePage__sectionTitle">Shop by Category</h2>
          <div className="homePage__categoryGrid">
            <div className="homePage__categoryCard">
              <div className="homePage__categoryIcon">🖊️</div>
              <h3>Vape Pens</h3>
              <p>Premium disposable and rechargeable vape pens</p>
              <Link to="/products?category=vape-pens" className="button button--outline">
                View Products
              </Link>
            </div>
            <div className="homePage__categoryCard">
              <div className="homePage__categoryIcon">💧</div>
              <h3>E-Liquids</h3>
              <p>High-quality e-liquids in various flavors</p>
              <Link to="/products?category=e-liquids" className="button button--outline">
                View Products
              </Link>
            </div>
            <div className="homePage__categoryCard">
              <div className="homePage__categoryIcon">🔧</div>
              <h3>Accessories</h3>
              <p>Essential vaping accessories and parts</p>
              <Link to="/products?category=accessories" className="button button--outline">
                View Products
              </Link>
            </div>
            <div className="homePage__categoryCard">
              <div className="homePage__categoryIcon">⚡</div>
              <h3>Mods & Tanks</h3>
              <p>Advanced vaping devices and tanks</p>
              <Link to="/products?category=mods" className="button button--outline">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="homePage__featured">
        <div className="container">
          <h2 className="homePage__sectionTitle">Featured Products</h2>
          <div className="homePage__productGrid">
            {/* Placeholder product cards */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="card card--grid">
                <div className="card__media">
                  <div className="homePage__productImage">
                    <div className="homePage__productPlaceholder">
                      Product {item}
                    </div>
                  </div>
                </div>
                <div className="card__content">
                  <h3 className="card__title">Premium Vape Product {item}</h3>
                  <p className="card__subtitle">High-quality vaping experience</p>
                  <div className="card__body">
                    <p className="textBody">
                      Experience the best in vaping technology with our premium products.
                    </p>
                  </div>
                  <div className="card__footer">
                    <span className="homePage__productPrice">$29.99</span>
                    <button className="button button--primary button--small">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="homePage__viewAllContainer">
            <Link to="/products" className="button button--outline button--large">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="homePage__about">
        <div className="container">
          <div className="homePage__aboutContent">
            <div className="homePage__aboutText">
              <h2 className="homePage__sectionTitle">About Aqivap</h2>
              <p className="textBody">
                Aqivap is your trusted destination for premium vaping products. 
                We offer a wide selection of high-quality devices, e-liquids, and accessories 
                to enhance your vaping experience.
              </p>
              <p className="textBody">
                Our commitment to quality, safety, and customer satisfaction makes us 
                the preferred choice for vaping enthusiasts and beginners alike.
              </p>
              <Link to="/about" className="button button--primary">
                Learn More About Us
              </Link>
            </div>
            <div className="homePage__aboutImage">
              <div className="homePage__aboutPlaceholder">
                Store Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="homePage__contact">
        <div className="container">
          <div className="homePage__contactContent">
            <h2 className="homePage__sectionTitle">Need Help?</h2>
            <p className="textBody">
              Our team is here to help you find the perfect vaping products. 
              Contact us for personalized recommendations and support.
            </p>
            <div className="homePage__contactActions">
              <Link to="/contact" className="button button--primary">
                Contact Us
              </Link>
              <Link to="/products" className="button button--outline">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 