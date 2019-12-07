import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityChanger from './QuantityChanger';
import './ShoppingProduct.css';

export default class ShoppingProduct extends Component {
  render() {
    const {
      data, data: {
        id, title, price, thumbnail,
      },
    } = this.props;
    return (
      <div className="product-list">
        <div className="product-item" key={id}>
          <button type="button">X</button>
          <img src={thumbnail} alt={title} />
          <span>{title}</span>
          <div><QuantityChanger productId={id} product={data} /></div>
          <span>{`R$ ${price}`}</span>
        </div>
      </div>
    );
  }
}

ShoppingProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};
