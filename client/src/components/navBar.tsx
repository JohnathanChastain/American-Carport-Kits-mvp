import React from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        {/* <li><a href="#gallery">Gallery</a></li> */}
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        {/* <li><a href="#faq">FAQ</a></li> */}
        {/* <li><a href="#free quote">Free Quote</a></li> */}
        <li><a href="#place order">Place Order</a></li>
        <li><a href="#contactForm">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;