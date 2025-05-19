import React from 'react';

const OrderForm: React.FC = () => {
  return (
    <div className="order-form-container">
      <h1>Order Form</h1>
      <form className="order-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" className="form-control" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="product">Select Product</label>
          <select id="product" className="form-control" required>
            <option value="">Choose a product...</option>
            <option value="roof-kit">Roof Kit</option>
            <option value="walls-gable-end-kit">Walls & Gable End Kit</option>
            <option value="lean-to-kit">Lean-To Kit</option>
            <option value="fully-enclosed-kit">Fully Enclosed Kit</option>
            <option value="custom-kit">Custom Kit</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="address">Shipping Address</label>
          <input type="text" id="address" className="form-control" placeholder="Enter your shipping address" required />
        </div>
        <button type="submit" className="btn-primary">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;