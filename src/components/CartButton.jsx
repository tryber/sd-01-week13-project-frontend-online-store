import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './cartButton.css';
import CartImage from '../icons/cart.jpg';

class CartButton extends React.Component {
  static getCurrentQuantity() {
    const itemsQuantities = Object.keys(localStorage)
      .filter((key) => key.includes('quantity'))
      .reduce(
        (acc, quantity) => acc + parseInt(localStorage.getItem(quantity), 10),
        0,
      );
    return itemsQuantities;
  }

  componentDidMount() {
    CartButton.getCurrentQuantity();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props.onChange) {
      return CartButton.getCurrentQuantity();
    }
    return '';
  }

  render() {
    return (
      <div>
        <Link className="button-container" to="/carrinho-de-compras">
          <img className="cartImage" src={CartImage} alt="shoppinng cart" />
          <div className="number-of-products">{CartButton.getCurrentQuantity()}</div>
        </Link>
      </div>
    );
  }
}

CartButton.propTypes = {
  onChange: PropTypes.string.isRequired,
};

export default CartButton;
