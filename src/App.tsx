import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

// Import pages
import HomePage from './pages/home/home'
import ProductsPage from 'pages/products/products'
import ProductDetailPage from 'pages/productDetail/productDetail'
import ContactPage from 'pages/contact/contact'
import AboutPage from 'pages/about/about'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// Import components (to be created)
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <Header />
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<div>Cart Page (Coming Soon)</div>} />
            <Route path="/checkout" element={<div>Checkout Page (Coming Soon)</div>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        {/* <Footer /> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
