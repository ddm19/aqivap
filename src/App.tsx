import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';

// Import pages
import HomePage from './pages/home/home';

// Import components (to be created)
// import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* <Header /> */}
        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add more routes as we create the pages */}
            <Route path="/products" element={<div>Products Page (Coming Soon)</div>} />
            <Route path="/product/:id" element={<div>Product Detail Page (Coming Soon)</div>} />
            <Route path="/cart" element={<div>Cart Page (Coming Soon)</div>} />
            <Route path="/checkout" element={<div>Checkout Page (Coming Soon)</div>} />
            <Route path="/about" element={<div>About Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div>Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
