import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className=" logo shopping-cart text-dark">
          <i className=" cart-icon fa fa-shopping-cart text-dark" />
          Shopping cart
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
