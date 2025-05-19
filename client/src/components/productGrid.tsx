import React from 'react';

const ProductGrid: React.FC = () => {
  const products = [
    { id: 1, name: "Roof Kit", description: "A carport roof kit provides all necessary materials for easily installing a protective roof over your gear." },
    { id: 2, name: "Walls & Gable End Kit", description: "A carport Walls & Gable End kit offers materials for carport, enhancing protection and aesthetics." },
    { id: 3, name: "Lean-To Kit", description: "A Lean-To kit contains pre-cut materials and components for building a simple, roofed structure attatched to a wall or existing building." },
    { id: 4, name: "Fully Enclosed Kit", description: "An Enclosed carport kit provides materials to fully enclose a carport. Offering protection from the elements and added security for vehicles and your gear." },
    { id: 5, name: "Custom Kit", description: "A Custom carport kit includes materials to create a personalized carport with optional windows and doors, allowing for enhanced ventilation and access." },
  ];

  return (
    <section id="products">
      <h2>Our Products</h2>
      <p>Explore our range of carport kits designed to meet your needs.
        Whether you need a standard carport or a custom solution, we have the perfect kit for you.
        Our kits are designed for easy assembly and durability, ensuring your vehicle is protected from the elements.
        Browse our selection and find the ideal carport kit for your home or business.
        Each kit comes with detailed instructions and all necessary components for a hassle-free setup.
        If you have any questions or need assistance, our team is here to help.
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      <div className="order-button-container">
        <a href="/order-form" className="order-button">
          Place Order
        </a>
      </div>
    </section>
  );
};

export default ProductGrid;