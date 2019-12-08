import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';
import CartImage from '../icons/cart.jpg';

class CartButton extends React.Component {
  render() {
    const itemsQuantities = Object.keys(localStorage)
      .filter((key) => key.includes('quantity'))
      .reduce((acc, quantity) => acc + quantity, 0);
    return (
      <div>
        <Link to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          <span className="quantity">{itemsQuantities}</span>
        </Link>
      </div>
    );
  }
}

export default CartButton;
