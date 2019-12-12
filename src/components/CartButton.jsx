import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cartButton.css';
import CartImage from '../icons/cart.jpg';
import Quantity from './Quantity';

class CartButton extends React.Component {
  render() {
    return (
      <div className="cartButton-Box">
        <Link className="cartButton-Link" to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          <Quantity />
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default CartButton;
