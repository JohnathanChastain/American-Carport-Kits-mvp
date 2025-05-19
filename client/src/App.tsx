import React from 'react';
import Header from './components/header';
import Navbar from './components/navBar';
import About from './components/about';
import ProductGrid from './components/productGrid';
import ContactForm from './components/contactForm';
import './styles.css';

const App: React.FC = () => {
  const handleContactClick = () => {
    console.log('Contact button clicked!');
    // Implement functionality here if needed
  };

  return (
    <div>
      <Header />
      <Navbar onContactClick={handleContactClick} />
      <About />
      <ProductGrid />
      <ContactForm /> 
    </div>
  );
};

export default App;