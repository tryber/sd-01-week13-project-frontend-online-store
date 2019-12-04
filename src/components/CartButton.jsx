import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';
import CartImage from '../icons/cart.jpg';

class CartButton extends React.Component {
  render() {
    return (
      <div>
        <Link to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
        </Link>
      </div>
    );
  }
}

export default CartButton;
