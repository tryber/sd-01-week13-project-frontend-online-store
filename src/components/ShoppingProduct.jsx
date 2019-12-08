import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QuantityChanger from './QuantityChanger';
import './ShoppingProduct.css';

export default class ShoppingProduct extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  removeItem() {
    const { data: { id }, refreshHandle, updatePrices } = this.props;
    localStorage.removeItem(id);
    localStorage.removeItem(`${id}_quantity`);
    refreshHandle();
    updatePrices();
  }

  render() {
    const {
      data, updatePrices, data: {
        id, title, price, thumbnail,
      },
    } = this.props;
    return (
      <div className="product-list">
        <div className="product-item" key={id}>
          <button className="remove-button" type="button" onClick={this.removeItem}>X</button>
          <img className="thumbnail" src={thumbnail} alt={title} />
          <span className="title">{title}</span>
          <QuantityChanger
            className="quantity-component"
            updatePrices={() => updatePrices()}
            productId={id}
            product={data}
          />
          <span className="price">{`R$ ${price.toFixed(2)}`}</span>
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
  refreshHandle: PropTypes.func.isRequired,
  updatePrices: PropTypes.func.isRequired,
};
