import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShoppingCarImg from '../icons/ShoppingCarImg.jpg';

export default class CartButton extends Component {
  render() {
    return (
      <Link to="/carrinho-de-compras" className="online-store-header-img">
        <img className="shopping-car-img" src={ShoppingCarImg} alt="Shopping Car Icon" />
        <p>{this.props.quantity}</p>
      </Link>
    );
  }
}


CartButton.propTypes = {
  quantity: PropTypes.number.isRequired,
};
