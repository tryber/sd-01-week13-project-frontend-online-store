import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuantityChanger.css';
import MinusIcon from '../icons/minus_icon.png';
import PlusIcon from '../icons/plus_icon.png';

class QuantityChanger extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.refreshPrice = this.refreshPrice.bind(this);
  }

  refreshPrice() {
    const { productId } = this.props;
    const actualQuantity = parseInt(localStorage.getItem(`${productId}_quantity`), 10);
    return actualQuantity;
  }

  removeProduct() {
    const { productId, updatePrices } = this.props;
    const actualQuantity = parseInt(localStorage.getItem(`${productId}_quantity`), 10);
    const newQuantity = actualQuantity - 1;
    if (newQuantity <= 0) {
      return console.log('Para remover o produto, clique no "X"');
    }
    localStorage.removeItem(`${productId}_quantity`);
    localStorage.setItem(`${productId}_quantity`, newQuantity);
    return updatePrices();
  }

  addProduct() {
    const { productId, product, updatePrices } = this.props;
    const actualQuantity = parseInt(localStorage.getItem(`${productId}_quantity`), 10);
    const newQuantity = actualQuantity + 1;
    if (newQuantity >= product.available_quantity) {
      return console.log('Quantidade máxima do produto em estoque atingida.');
    }
    localStorage.removeItem(`${productId}_quantity`);
    localStorage.setItem(`${productId}_quantity`, newQuantity);
    return updatePrices();
  }

  render() {
    return (
      <div className="container">
        <div>
          <button type="button" onClick={() => this.removeProduct()}>
            <img className="minus-button max-img-size" src={MinusIcon} alt="Minus icon" />
          </button>
        </div>
        <input type="text" className="quantity-value" value={this.refreshPrice()} readOnly />
        <div>
          <button type="button" onClick={() => this.addProduct()}>
            <img className="plus-button max-img-size" src={PlusIcon} alt="Plus icon" />
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityChanger;

QuantityChanger.propTypes = {
  productId: PropTypes.string.isRequired,
  updatePrices: PropTypes.func.isRequired,
  product: PropTypes.shape({
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
};
