import React from 'react';
import { Link } from 'react-router-dom';
import './cartShopping.css';
import PropTypes from 'prop-types';
import CartImage from '../icons/cart.jpg';

class CartButton extends React.Component {
  render() {
    const { quantity } = this.props;
    return (
      <div>
        <Link to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          <span className="quantity">{quantity}</span>
        </Link>
      </div>
    );
  }
}

export default CartButton;

CartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
};
